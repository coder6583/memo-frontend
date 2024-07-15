import { Editable, RenderElementProps, Slate, withReact } from "slate-react";
import styles from "./Notepad.module.css";
import {
  ChangeEventHandler,
  KeyboardEvent,
  KeyboardEventHandler,
  useCallback,
  useState,
} from "react";
import {
  BaseEditor,
  BaseElement,
  BaseSelection,
  BaseText,
  Descendant,
  Editor,
  Element,
  Text,
  Transforms,
  createEditor,
} from "slate";
import { usePageContext } from "@/pages/workspace";
import Paragraph from "./elements/Paragraph";
import { Heading1, Heading2, Heading3, Title } from "./elements/Headings";
import { withHistory } from "slate-history";
import TitleEditor from "./TitleEditor";

const customEditor = (editor: Editor) => {
  const { apply } = editor;

  editor.apply = (operation) => {
    console.log(operation);

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
        console.log(line_text);
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

export default function Notepad(): JSX.Element {
  const [editor] = useState(() =>
    withReact(withHistory(customEditor(createEditor())))
  );
  const { content, setContent } = usePageContext();

  const onChange: (value: Descendant[]) => void = (value) => {
    setContent(value);
  };

  const renderElement = useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case "paragraph":
        return <Paragraph {...props} />;
      case "h1":
        return <Heading1 {...props} />;
      case "h2":
        return <Heading2 {...props} />;
      case "h3":
        return <Heading3 {...props} />;
      case "title":
        return <Title {...props} />;
      default:
        return <Paragraph {...props} />;
    }
  }, []);

  return (
    <div className={styles.parent}>
      <TitleEditor />
      <Slate editor={editor} initialValue={content} onValueChange={onChange}>
        <Editable className={styles.editable} renderElement={renderElement} />
      </Slate>
    </div>
  );
}
