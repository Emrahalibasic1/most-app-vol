import { AlarmClockOff, ClipboardList, Flag, Users } from "lucide-react";
import DashboardHeader from "../components/DashboardHeader";
import OverdueTasks from "../components/OverDueTask";
import StatCard from "../components/statCard";
import TeamProgressList from "../components/teamProgressList";
import { teams, overdueTasks, meetings } from "../data/mockDashboard";
import UpcomingMeetings from "../components/UpcomingMeetings";

const stats = [
  { id: 1, value: 68, label: "Ukupno aktivnih zadataka", icon: ClipboardList, badge: "+12%", tone: "blue", footer: "42 završeno • 19 u toku • 7 na čekanju" },
  { id: 2, value: 3, label: "Prekoračena roka", icon: AlarmClockOff, badge: "Potrebna pažnja", tone: "red", footer: "2 tima imaju zastoje" },
  { id: 3, value: "74%", label: "Kvartalni OKR progres", icon: Flag, badge: "Q2 2025", tone: "gray", footer: "Uspješan tempo" },
  { id: 4, value: 34, label: "Aktivnih volontera", icon: Users, badge: "5 timova", tone: "green", footer: "Kapacitet: 82% • 2 slobodna" },
] as const;

function Dashboard() {
  return (
    <div className="p-8">
     <DashboardHeader />

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
       {stats.map((stat) => (
  <StatCard
    key={stat.id}
    value={stat.value}
    label={stat.label}
    icon={stat.icon}
    badge={stat.badge}
    tone={stat.tone}
    footer={stat.footer}
  />
))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <TeamProgressList teams={teams} />
        </div>
        <div className="space-y-6">
          <OverdueTasks tasks={overdueTasks} />
          <UpcomingMeetings meetings={meetings} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;