export type Item = {
  id: number;
  title: string;
  type: string | null;
  description: string;
  link: string;
  techStack: TechStack[];
  images?: string[];
};

type BorderStyle =
  | { borderBottomLeftRadius: 5; borderTopLeftRadius: 5 }
  | { borderBottomRightRadius: 5; borderTopRightRadius: 5 };

export type TechStack = {
  title: string;
  icon: string;
  width: string;
  backgroundColor: string;
  borderStyle?: BorderStyle;
};
