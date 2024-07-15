import styles from "./Broswer.module.css";
import BrowserHeader from "./BrowserHeader";

export default function Browser(): JSX.Element {
  return (
    <div className={styles.parent}>
      <div className={styles.header}>
        <BrowserHeader />
      </div>
    </div>
  );
}
