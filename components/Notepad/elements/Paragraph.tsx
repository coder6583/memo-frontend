import styles from "./Paragraph.module.css";

export default function Paragraph(props: any): JSX.Element {
  return (
    <div {...props.attribute} className={styles.parent}>
      {props.children}
    </div>
  );
}
