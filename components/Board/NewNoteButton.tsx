import { IoAddSharp } from "react-icons/io5";
import styles from "./NewNoteButton.module.css";

export default function NewNoteButton(): JSX.Element {
  return (
    <div className={styles.parent}>
      <div className={styles.addIcon}>+</div>
      <div className={styles.buttonText}>New Entry...</div>
    </div>
  );
}
