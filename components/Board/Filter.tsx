import { TagType } from "@/types/types";
import styles from "./Filter.module.css";
import Tag from "../Tag/Tag";

export default function Filter({ tags }: { tags: TagType[] }): JSX.Element {
  return (
    <div className={styles.parent}>
      <div className={styles.tags}>
        {tags &&
          tags.map((tag: TagType) => {
            return <Tag key={tag.id} tag={tag} />;
          })}
      </div>
      <div className={styles.inputField}>
        <input className={styles.input} />
      </div>
    </div>
  );
}
