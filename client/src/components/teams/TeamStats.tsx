import { TEAM_MEMBERS } from "../../data/mockTeams";

type StatProps = {
  label: string;
  value: string | number;
};

function Stat({ label, value }: StatProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
      <p className="text-xs uppercase text-slate-400">{label}</p>
      <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">
        {value}
      </p>
    </div>
  );
}

function TeamStats() {
  const total = TEAM_MEMBERS.length;
  const coordinators = TEAM_MEMBERS.filter((m) => m.role === "koordinator").length;
  const overloaded = TEAM_MEMBERS.filter((m) => m.taskCount >= 4).length;

  const totalTasks = TEAM_MEMBERS.reduce((sum, m) => sum + m.taskCount, 0);
  const avgTasks = (totalTasks / total).toFixed(1);

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <Stat label="Ukupno volontera" value={total} />
      <Stat label="Koordinatori" value={coordinators} />
      <Stat label="Prosj. zadataka" value={avgTasks} />
     <Stat label="Preopterećeni" value={overloaded} />
    </div>
  );
}

export default TeamStats;