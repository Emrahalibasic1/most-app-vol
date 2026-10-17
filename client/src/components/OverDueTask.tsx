import type { OverdueTask } from "../data/mockDashboard";

type Props = { tasks: OverdueTask[] };

function OverdueTasks({ tasks }: Props) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="flex items-start justify-between">
        <h2 className="text-lg font-bold">Prekoračeni rokovi</h2>
        <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-bold text-red-700">
          {tasks.length} hitno
        </span>
      </div>
      <p className="text-sm text-slate-500">
        Zadaci koji traže asistenciju ili reviziju datuma predaje.
      </p>

      <div className="mt-4 space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="rounded-xl border border-red-100 bg-red-50 p-4"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="rounded bg-white px-2 py-0.5 font-medium">
                {task.team}
              </span>
              <span className="font-medium text-red-600">Rok: {task.due}</span>
            </div>

            <h3 className="mt-2 font-bold">{task.title}</h3>

            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-slate-500">Zadužen: {task.assignee}</span>
              <button className="font-medium text-blue-700">
                Pošalji podsjetnik
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OverdueTasks;