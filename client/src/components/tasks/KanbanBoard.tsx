import type { Member, Task } from "../../types/task";
import { COLUMNS } from "../../types/task";
import TaskCard from "./TaskCard";

type Props = {
  tasks: Task[];
  members: Member[];
};

function KanbanBoard({ tasks, members }: Props) {
  return (
    <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 xl:grid-cols-4">
      {COLUMNS.map((col) => {
        const colTasks = tasks.filter((t) => t.status === col.status);

        return (
          <section key={col.status} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/50">
            <header className="mb-4 flex items-center gap-2">
              <span className={`h-3 w-3 rounded-full ${col.dotClass}`} />
              <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100">{col.label}</h2>
              <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                {colTasks.length}
              </span>
            </header>

            {colTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                assignee={members.find((m) => m.id === task.assigneeId)}
              />
            ))}
          </section>
        );
      })}
    </div>
  );
}

export default KanbanBoard;