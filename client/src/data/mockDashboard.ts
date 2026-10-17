export type Team = {
  id: number;
  name: string;
  coordinator: string;
  tasks: number;
  progress: number;
};

export type OverdueTask = {
  id: number;
  team: string;
  title: string;
  assignee: string;
  due: string;
};

export const teams: Team[] = [
  { id: 1, name: "Dizajn tim", coordinator: "Lejla I.", tasks: 14, progress: 85 },
  { id: 2, name: "IT Inženjering", coordinator: "Denis K.", tasks: 18, progress: 60 },
  { id: 3, name: "PR & Komunikacije", coordinator: "Sara M.", tasks: 11, progress: 90 },
  { id: 4, name: "HR & Volonteri", coordinator: "Haris T.", tasks: 12, progress: 70 },
  { id: 5, name: "Edu & Radionice", coordinator: "Nejra B.", tasks: 13, progress: 55 },
];

export const overdueTasks: OverdueTask[] = [
  { id: 1, team: "Dizajn tim", title: "Priprema roll-up banera za Info dan", assignee: "Emina S.", due: "Jučer" },
  { id: 2, team: "IT tim", title: "Testiranje e-mail servera za registraciju", assignee: "Kenan M.", due: "Prije 2 dana" },
];