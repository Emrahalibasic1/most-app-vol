export type TeamId = "dizajn" | "it" | "pr" | "hr" | "edu";
export type Priority = "visok" | "srednji" | "nizak";
export type TaskStatus = "todo" | "in_progress" | "review" | "done";

export interface Member {
  id: string;
  name: string; // "Emina S."
  initials: string; // "ES"
  avatarClass: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  team: TeamId;
  priority: Priority;
  status: TaskStatus;
  assigneeId: string;
  dueDate: string; // "2025-05-28"
  keyResult?: string;
  comments: number;
  attachments: number;
}

export const COLUMNS: { status: TaskStatus; label: string; dotClass: string }[] = [
  { status: "todo", label: "Za uraditi", dotClass: "bg-slate-400" },
  { status: "in_progress", label: "U toku", dotClass: "bg-blue-500" },
  { status: "review", label: "Na pregledu", dotClass: "bg-purple-500" },
  { status: "done", label: "Završeno", dotClass: "bg-emerald-500" },
];

export const TEAMS: Record<TeamId, { label: string; badgeClass: string }> = {
  dizajn: { label: "Dizajn tim", badgeClass: "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300" },
  it: { label: "IT Inženjering", badgeClass: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300" },
  pr: { label: "PR & Komunikacije", badgeClass: "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300" },
  hr: { label: "HR & Volonteri", badgeClass: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300" },
  edu: { label: "Edu & Radionice", badgeClass: "bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300" },
};

export const PRIORITIES: Record<Priority, { label: string; pillClass: string; dotClass: string }> = {
  visok: { label: "Visok", pillClass: "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300", dotClass: "bg-red-500" },
  srednji: { label: "Srednji", pillClass: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300", dotClass: "bg-amber-500" },
  nizak: { label: "Nizak", pillClass: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300", dotClass: "bg-slate-400" },
};