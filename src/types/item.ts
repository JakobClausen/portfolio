export type Item = {
  id: number;
  title: string;
  description: string;
  link: string;
  techStack: TechStack[];
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
