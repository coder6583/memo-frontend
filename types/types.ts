type TagType = {
  id: string;
  name: string;
  color: string;
  switchable: boolean;
  groupable: boolean;
  children: TagType[];
};

type NoteType = {
  id: number;
  tags: string[];
  title: string;
  content: string;
  timestamp: number;
};

type ShortNoteType = {
  id: number;
  tags: string[];
  title: string;
  timestamp: number;
};

export { type TagType, type NoteType, type ShortNoteType };
