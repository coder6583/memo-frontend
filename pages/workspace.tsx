import BoardLayout from "@/components/layout/BoardLayout";
import Head from "next/head";
import styles from "@/styles/Board.module.css";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { uuid } from "uuidv4";
import { v4 } from "uuid";
import { Descendant } from "slate";

export type NoteContextType = {
  content: Descendant[];
  setContent: Dispatch<SetStateAction<Descendant[]>>;
};
export const pageContext = createContext<NoteContextType | undefined>(
  undefined
);
export const usePageContext = (): NoteContextType => {
  const context = useContext(pageContext);
  if (context === undefined) {
    throw Error("pageContext is undefined.");
  }
  return context;
};

export type CurrentInputContextType = {
  id: string;
  setId: Dispatch<SetStateAction<string>>;
};
export const currentInputContext = createContext<
  CurrentInputContextType | undefined
>(undefined);
export const useCurrentInputContext = (): CurrentInputContextType => {
  const context = useContext(currentInputContext);
  if (context === undefined) {
    throw Error("currentInputContext is undefined.");
  }
  return context;
};

const initialValue = [
  {
    type: "h1",
    children: [{ text: "A line of text in a h1." }],
  },
  {
    type: "h2",
    children: [{ text: "A line of text in a h2." }],
  },
  {
    type: "h3",
    children: [{ text: "A line of text in a h3." }],
  },
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

export default function Board(): JSX.Element {
  const [content, setContent] = useState<Descendant[]>(initialValue);
  const [id, setId] = useState<string>(v4());

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <pageContext.Provider value={{ content, setContent }}>
          <currentInputContext.Provider value={{ id: id, setId }}>
            <BoardLayout />
          </currentInputContext.Provider>
        </pageContext.Provider>
      </main>
    </>
  );
}
