import clsx from "clsx";
import styles from "./Headings.module.css";

function Title(props: any): JSX.Element {
  return (
    <div
      className={clsx(
        styles.title,
        (props.element.children[0].text as string) === "" &&
          styles["selected-empty-element"]
      )}
      {...props.attribute}
    >
      {props.children}
    </div>
  );
}

function Heading1(props: any): JSX.Element {
  return (
    <div className={styles.heading1} {...props.attribute}>
      {props.children}
    </div>
  );
}

function Heading2(props: any): JSX.Element {
  return (
    <div className={styles.heading2} {...props.attribute}>
      {props.children}
    </div>
  );
}

function Heading3(props: any): JSX.Element {
  return (
    <div className={styles.heading3} {...props.attribute}>
      {props.children}
    </div>
  );
}

export { Title, Heading1, Heading2, Heading3 };
