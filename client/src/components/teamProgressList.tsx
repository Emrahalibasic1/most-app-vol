import type { Team } from "../data/mockDashboard";

type Props = { teams: Team[] };

function getColor(progress: number) {
  if (progress >= 85) return "bg-emerald-600";
  if (progress >= 60) return "bg-blue-600";
  return "bg-red-500";
}

function TeamProgressList({ teams }: Props) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
      <h2 className="text-lg font-bold">Napredak po timovima</h2>

      <div className="mt-4 space-y-3">
        {teams.map((team) => (
          <div
            key={team.id}
            className="rounded-xl bg-slate-50 p-4 dark:bg-slate-900"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold">{team.name}</span>
                <span className="ml-2 text-sm text-slate-500 dark:text-slate-400">
                  Koordinator: {team.coordinator}
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <span className="text-slate-500 dark:text-slate-400">
                  {team.tasks} zadataka
                </span>
                <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs font-medium dark:bg-slate-700">
                  {team.progress}%
                </span>
              </div>
            </div>

            <div className="mt-2 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700">
              <div
                className={`h-2.5 rounded-full ${getColor(team.progress)}`}
                style={{ width: `${team.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamProgressList;