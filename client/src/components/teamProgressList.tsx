import { Link } from "react-router-dom";
import type { Team } from "../data/mockDashboard";

type Props = { teams: Team[] };

function getBarColor(progress: number) {
  if (progress >= 85) return "bg-emerald-600";
  if (progress >= 60) return "bg-blue-600";
  return "bg-red-500";
}

function getStatusColor(team: Team) {
  if (team.late && team.late > 0) {
    return "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300";
  }
  if (team.progress >= 85) {
    return "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300";
  }
  return "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200";
}

function getStatus(team: Team) {
  if (team.late && team.late > 0) {
    return `${team.progress}% • ${team.late} kasni`;
  }
  if (team.progress >= 85) {
    return `${team.progress}% Odličan`;
  }
  return `${team.progress}% U toku`;
}

function TeamProgressList({ teams }: Props) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-bold">Napredak po timovima</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Pregled realizacije zadataka i vođa pojedinačnih timova
          </p>
        </div>
        <Link
          to="/timovi"
          className="text-sm font-medium text-blue-700 hover:underline dark:text-blue-400"
        >
          Upravljaj timovima →
        </Link>
      </div>

      <div className="mt-4 space-y-3">
        {teams.map((team) => (
          <div
            key={team.id}
            className="rounded-xl bg-slate-50 p-4 dark:bg-slate-900"
          >
            <div className="flex items-center justify-between">
              <div>
                <span
                  className={`mr-2 inline-block h-2.5 w-2.5 rounded-full ${team.color}`}
                />
                <span className="font-semibold">{team.name}</span>
                <span className="ml-2 text-sm text-slate-500 dark:text-slate-400">
                  Koordinator: {team.coordinator}
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <span className="text-slate-500 dark:text-slate-400">
                  {team.tasks} zadataka
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${getStatusColor(team)}`}
                >
                  {getStatus(team)}
                </span>
              </div>
            </div>

            <div className="mt-2 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700">
              <div
                className={`h-2.5 rounded-full ${getBarColor(team.progress)}`}
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