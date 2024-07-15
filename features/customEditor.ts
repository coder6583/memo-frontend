import { Editor, Element, Text, Transforms } from "slate";

export const customEditor = (editor: Editor) => {
  const { apply } = editor;

  editor.apply = (operation) => {
    if (operation.type === "split_node") {
      const newOperation = {
        ...operation,
        properties: { type: "paragraph" },
      };
      apply(newOperation);
    } else if (operation.type === "insert_text") {
      if (operation.text.includes(" ")) {
        const line_num = operation.path[0];
        const line_element = editor.children.at(line_num);
        if (line_element === undefined) {
          apply(operation);
          return;
        }
        if (
          !(
            Element.isElement(line_element) &&
            Text.isText(line_element.children[0])
          )
        ) {
          apply(operation);
          return;
        }
        const line_text = line_element.children[0];
        apply(operation);
        if (line_text.text.match(/^###/) && operation.offset === 3) {
          Transforms.setNodes(editor, { type: "h3" });
          Transforms.setSelection(editor, {
            focus: { offset: 0, path: [operation.path[0], 0] },
          });
          Transforms.insertText(editor, "");
        } else if (line_text.text.match(/^##/) && operation.offset === 2) {
          Transforms.setNodes(editor, { type: "h2" });
          Transforms.setSelection(editor, {
            focus: { offset: 0, path: [operation.path[0], 0] },
          });
          Transforms.insertText(editor, "");
        } else if (line_text.text.match(/^#/) && operation.offset === 1) {
          Transforms.setNodes(editor, { type: "h1" });
          Transforms.setSelection(editor, {
            focus: { offset: 0, path: [operation.path[0], 0] },
          });
          Transforms.insertText(editor, "");
        }
      } else {
        apply(operation);
      }
    } else {
      apply(operation);
    }
  };
  return editor;
};
