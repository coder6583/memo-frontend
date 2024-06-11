import { ShortNoteType } from "@/types/types";
import styles from "./NoteCard.module.css";

export default function NoteCard({
  note,
}: {
  note: ShortNoteType;
}): JSX.Element {
  const date = new Date(note.timestamp);
  return (
    <div className={styles.parent}>
      <div className={styles.title}>
        <div className={styles.name}>{note.title}</div>
        <div className={styles.date}>
          {"Last Updated : " +
            date.getFullYear() +
            " / " +
            String(date.getMonth() + 1) +
            " / " +
            date.getDate()}
        </div>
      </div>
      <div className={styles.variableTags}></div>
    </div>
  );
}
