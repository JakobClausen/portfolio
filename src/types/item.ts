export type Item = {
  id: number;
  title: string;
  description: string;
};

export type ProjectInfo = { item: Item; children: React.ReactNode } | null;
