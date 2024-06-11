import { TagType } from "@/types/types";
import styles from "./Tag.module.css";

import { IoClose } from "react-icons/io5";

export default function Tag({ tag }: { tag: TagType }): JSX.Element {
  return (
    <div
      className={styles.parent}
      style={{
        backgroundColor: tag.color + "44",
        // border: "1px solid " + tag.color,
        color: tag.color,
      }}
    >
      <div className={styles.tagName}>{tag.name}</div>
      <div className={styles.closeButton}>
        <IoClose />
      </div>
    </div>
  );
}
