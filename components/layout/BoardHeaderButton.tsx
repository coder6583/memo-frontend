import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import styles from "./BoardHeaderButton.module.css";

export default function BoardHeaderButton(): JSX.Element {
  return (
    <div className={styles.parent}>
      <IoSettingsOutline />
    </div>
  );
}
