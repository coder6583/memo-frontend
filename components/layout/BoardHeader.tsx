import styles from "./BoardHeader.module.css";
import BoardHeaderButton from "./BoardHeaderButton";

export default function BoardHeader(): JSX.Element {
  return (
    <div className={styles.parent}>
      <BoardHeaderButton />
    </div>
  );
}
