import type { Goal } from "../data/mockDashboard";

type Props = { goals: Goal[] };

function getStatus(goal: Goal) {
  if (goal.progress >= 80) return `${goal.progress}% Ostvareno`;
  return `${goal.progress}% U toku`;
}

function getStatusColor(goal: Goal) {
  if (goal.progress >= 80) {
    return "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300";
  }
  return "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300";
}

function OkrGoals({ goals }: Props) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
      {/* ZAGLAVLJE */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <h2 className="text-lg font-bold">Strateški ciljevi (OKR Q2)</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Ključni rezultati organizacije prema kojima su vezani timski
            sprintovi
          </p>
        </div>
        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          {goals.length} Aktivna cilja
        </span>
      </div>

      {/* LISTA CILJEVA */}
      <div className="mt-4 space-y-3">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className="rounded-xl bg-slate-50 p-4 dark:bg-slate-900"
          >
            {/* Naslov + značka */}
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-semibold">{goal.title}</h3>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-medium ${getStatusColor(goal)}`}
              >
                {getStatus(goal)}
              </span>
            </div>

            {/* Traka */}
            <div className="mt-2 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700">
              <div
                className={`h-2.5 rounded-full ${goal.color}`}
                style={{ width: `${goal.progress}%` }}
              />
            </div>

            {/* Ispod trake: KR-ovi ili timovi i rok */}
            {goal.keyResults && goal.keyResults.length > 0 ? (
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {goal.keyResults.map((kr) => (
                  <div
                    key={kr.id}
                    className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 dark:bg-slate-800"
                  >
                    <span className="text-slate-500 dark:text-slate-400">
                      {kr.label}
                    </span>
                    <span className="font-bold text-blue-700 dark:text-blue-400">
                      {kr.current} / {kr.target}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400">
                  Zajednički timovi: {goal.teams}
                </span>
                <span className="font-medium">Rok: {goal.deadline}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default OkrGoals;