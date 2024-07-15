import { useState } from "react";
import styles from "./BoardLayout.module.css";
import { ShortNoteType, TagType } from "@/types/types";
import Notepad from "../Notepad/Notepad";
import { BoardSider } from "./BoardSider";
import Browser from "../Browser/Browser";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

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
      {/* <div className={styles.side}>
        <BoardSider />
      </div> */}
      <div className={styles.main}>
        <PanelGroup direction="horizontal">
          <Panel defaultSize={50} minSize={30}>
            <div className={styles.notepad}>
              <Notepad />
            </div>
          </Panel>
          <PanelResizeHandle className={styles.resizeHandle} />
          <Panel defaultSize={50} minSize={30}>
            <div className={styles.browser}>
              <Browser />
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}
