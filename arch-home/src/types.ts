export type Project = {
  id: string;
  title: string;
  location: string;
  year: number;
  coverUrl?: string; // optional
  tags: string[];
};
