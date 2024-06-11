import { useState } from "react";
import Filter from "../Board/Filter";
import BoardHeader from "./BoardHeader";
import styles from "./BoardLayout.module.css";
import { ShortNoteType, TagType } from "@/types/types";
import NoteList from "../Board/NoteList";

export default function BoardLayout(): JSX.Element {
  const [tags, setTags] = useState<TagType[]>([
    {
      id: "test",
      name: "Test Tag",
      color: "#ee8800",
      children: [],
      groupable: false,
      switchable: false,
    },
    {
      id: "hw",
      name: "Homework",
      color: "#0000aa",
      children: [],
      groupable: false,
      switchable: false,
    },
  ]);
  const [notes, setNote] = useState<ShortNoteType[]>([
    { id: 0, title: "Example Note", tags: [], timestamp: 0 },
  ]);
  return (
    <div className={styles.parent}>
      <div className={styles.header}>
        <BoardHeader />
      </div>
      <div className={styles.main}>
        <div className={styles.filter}>
          <Filter tags={tags} />
        </div>
        <div className={styles.workspace}>
          <NoteList notes={notes} />
        </div>
      </div>
    </div>
  );
}
