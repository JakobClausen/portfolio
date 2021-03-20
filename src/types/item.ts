export type Item = {
  id: number;
  title: string;
  description: string;
  techStack: TechStack[];
};

type BorderStyle =
  | { borderBottomLeftRadius: 5; borderTopLeftRadius: 5 }
  | { borderBottomRightRadius: 5; borderTopRightRadius: 5 };

export type TechStack = {
  title: string;
  width: string;
  backgroundColor: string;
  borderStyle?: BorderStyle;
};

export type ProjectInfo = { item: Item; children: React.ReactNode } | null;
