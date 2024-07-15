import styles from "./TitleEditor.module.css";

export default function TitleEditor(): JSX.Element {
  return (
    <div className={styles.parent}>
      <input className={styles.input} placeholder="Untitled" />
    </div>
  );
}
