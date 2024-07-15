import { Editable, RenderElementProps, Slate, withReact } from "slate-react";
import styles from "./Notepad.module.css";
import { useCallback, useState } from "react";
import { Descendant, createEditor } from "slate";
import { usePageContext } from "@/pages/workspace";
import Paragraph from "./elements/Paragraph";
import { Heading1, Heading2, Heading3, Title } from "./elements/Headings";
import { withHistory } from "slate-history";
import TitleEditor from "./TitleEditor";
import { customEditor } from "@/features/customEditor";

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
