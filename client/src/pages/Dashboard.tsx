import OverdueTasks from "../components/OverDueTask";
import StatCard from "../components/statCard";
import TeamProgressList from "../components/teamProgressList";
import { teams, overdueTasks } from "../data/mockDashboard";

const stats = [
  { id: 1, value: 68, label: "Ukupno aktivnih zadataka" },
  { id: 2, value: 3, label: "Prekoračena roka" },
  { id: 3, value: "74%", label: "Kvartalni OKR progres" },
  { id: 4, value: 34, label: "Aktivnih volontera" },
];

function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="font-bold text-2xl">Kontrolna tabla</h1>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.id} value={stat.value} label={stat.label} />
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <TeamProgressList teams={teams} />
        </div>
        <div className="space-y-6">
          <OverdueTasks tasks={overdueTasks} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;