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
    <h1
      className={clsx(
        styles.heading1,
        (props.element.children[0].text as string) === "" &&
          styles["h1-selected-empty-element"]
      )}
      {...props.attribute}
    >
      {props.children}
    </h1>
  );
}

function Heading2(props: any): JSX.Element {
  return (
    <h2
      className={clsx(
        styles.heading2,
        (props.element.children[0].text as string) === "" &&
          styles["h2-selected-empty-element"]
      )}
      {...props.attribute}
    >
      {props.children}
    </h2>
  );
}

function Heading3(props: any): JSX.Element {
  return (
    <h3
      className={clsx(
        styles.heading3,
        (props.element.children[0].text as string) === "" &&
          styles["h3-selected-empty-element"]
      )}
      {...props.attribute}
    >
      {props.children}
    </h3>
  );
}

export { Title, Heading1, Heading2, Heading3 };
