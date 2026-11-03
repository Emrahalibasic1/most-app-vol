import type { Member, Task } from "../../types/task";
import { TEAMS, PRIORITIES } from "../../types/task";
import { Clock, MessageSquare, Paperclip } from "lucide-react";

type Props = {
  task: Task;
  assignee?: Member;
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];

function formatDue(iso: string): string {
  const d = new Date(iso);
  return `${String(d.getDate()).padStart(2, "0")}. ${MONTHS[d.getMonth()]}`;
}

function TaskCard({ task, assignee }: Props) {
  const team = TEAMS[task.team];
  const priority = PRIORITIES[task.priority];

  return (
    <div className="mb-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <span className={`rounded-md px-2 py-0.5 text-xs font-semibold ${team.badgeClass}`}>
          {team.label}
        </span>
        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${priority.pillClass}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${priority.dotClass}`} />
          {priority.label}
        </span>
      </div>
      <h3 className="mt-3 text-sm font-bold text-slate-900 dark:text-slate-100">{task.title}</h3>
      <p className="mt-1 line-clamp-2 text-xs text-slate-500 dark:text-slate-400">{task.description}</p>
      {task.keyResult && (
        <span className="mt-3 inline-block rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          🎯 {task.keyResult}
        </span>
      )}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {assignee && (
            <>
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${assignee.avatarClass}`}
              >
                {assignee.initials}
              </div>
              <span className="text-xs font-medium text-slate-700 dark:text-slate-200">{assignee.name}</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
          <Clock size={14} />
          {formatDue(task.dueDate)}
        </div>
      </div>
      <div className="mt-3 flex gap-3 text-xs text-slate-400">
        <span className="flex items-center gap-1">
          <MessageSquare size={14} /> {task.comments}
        </span>
        <span className="flex items-center gap-1">
          <Paperclip size={14} /> {task.attachments}
        </span>
      </div>
    </div>
  );
}

export default TaskCard;