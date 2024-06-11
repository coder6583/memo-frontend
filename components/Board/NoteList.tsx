import { NoteType, ShortNoteType } from "@/types/types";
import styles from "./NoteList.module.css";
import NoteCard from "./NoteCard";
import NewNoteButton from "./NewNoteButton";

export default function NoteList({
  notes,
}: {
  notes: ShortNoteType[];
}): JSX.Element {
  return (
    <div className={styles.parent}>
      <NewNoteButton />
      {notes.map((note: ShortNoteType) => {
        return <NoteCard key={note.timestamp} note={note} />;
      })}
    </div>
  );
}
