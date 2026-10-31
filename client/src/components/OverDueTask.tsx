import { Bell, Clock, HandHelping } from "lucide-react";
import type { OverdueTask } from "../data/mockDashboard";

type Props = { tasks: OverdueTask[] };

const actions = {
  reminder: { label: "Pošalji podsjetnik", icon: Bell },
  help: { label: "Ponudi pomoć", icon: HandHelping },
};

function OverdueTasks({ tasks }: Props) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-start justify-between">
        <h2 className="flex items-center text-lg font-bold">
          <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-red-500" />
          Prekoračeni rokovi
        </h2>
        <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-bold text-red-700 dark:bg-red-950 dark:text-red-300">
          {tasks.length} Hitno!
        </span>
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Zadaci koji traže asistenciju ili reviziju datuma predaje.
      </p>

      <div className="mt-4 space-y-3">
        {tasks.map((task) => {
          const action = actions[task.action];
          const ActionIcon = action.icon;

          return (
            <div
              key={task.id}
              className="rounded-xl border border-red-100 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/40"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="rounded bg-white px-2 py-0.5 font-medium dark:bg-slate-700">
                  {task.team}
                </span>
                <span className="flex items-center gap-1 font-medium text-red-600 dark:text-red-400">
                  <Clock size={12} />
                  Rok: {task.due}
                </span>
              </div>

              <h3 className="mt-2 font-bold">{task.title}</h3>

              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-slate-500 dark:text-slate-400">
                  Zadužen: {task.assignee}
                </span>
                <button className="flex items-center gap-1 font-medium text-blue-700 hover:underline dark:text-blue-400">
                  <ActionIcon size={14} />
                  {action.label}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OverdueTasks;