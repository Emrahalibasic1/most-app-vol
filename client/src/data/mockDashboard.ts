export type Team = {
  id: number;
  name: string;
  coordinator: string;
  tasks: number;
  progress: number;
  color: string;     
  late?: number;     
};

export type OverdueTask = {
  id: number;
  team: string;
  title: string;
  assignee: string;
  due: string;
  action: "reminder" | "help" ;
};
export type Meeting = {
  id: number;
  when: string;
  place: string;
  online: boolean;
  title: string;
  description: string;
  attendees: string[];
  confirmed: number;
  action: string;
};
export const teams: Team[] = [
  { id: 1, name: "Dizajn tim", coordinator: "Lejla I.", tasks: 14, progress: 85, color: "bg-purple-600" },
  { id: 2, name: "IT Inženjering", coordinator: "Denis K.", tasks: 18, progress: 60, color: "bg-blue-600", late: 1 },
  { id: 3, name: "PR & Komunikacije", coordinator: "Sara M.", tasks: 11, progress: 90, color: "bg-pink-500" },
  { id: 4, name: "HR & Volonteri", coordinator: "Haris T.", tasks: 12, progress: 70, color: "bg-emerald-600" },
  { id: 5, name: "Edu & Radionice", coordinator: "Nejra B.", tasks: 13, progress: 55, color: "bg-teal-500" },
];

export const overdueTasks: OverdueTask[] = [
  { id: 1, team: "Dizajn tim", title: "Priprema roll-up banera za Info dan", assignee: "Emina S.", due: "Jučer", action: "reminder" },
  { id: 2, team: "IT Inženjering", title: "Testiranje e-mail servera za registraciju", assignee: "Kenan M.", due: "Prije 2 dana", action: "help" },
];

export const meetings: Meeting[] = [
  {
    id: 1,
    when: "Danas • 17:00",
    place: "Google Meet",
    online: true,
    title: "Koordinacija voditelja timova",
    description: "Usklađivanje agende za ljetnu kampanju i provjera resursa.",
    attendees: ["LI", "DK", "HT"],
    confirmed: 6,
    action: "Pristupi",
  },
  {
    id: 2,
    when: "Sutra • 18:30",
    place: "Hub Sala 1",
    online: false,
    title: "Sedmični retro Dizajn tima",
    description: "Pregled vizuala za društvene mreže i novih promo šablona.",
    attendees: [],
    confirmed: 5,
    action: "Detalji agende",
  },
];