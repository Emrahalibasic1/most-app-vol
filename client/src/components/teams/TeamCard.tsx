import { TEAMS } from "../../types/task";
import type { Team, MemberRole, MemberStatus } from "../../types/team";
import { TEAM_MEMBERS } from "../../data/mockTeams";

const ROLE_LABEL: Record<MemberRole, string> = {
  koordinator: "Koordinator",
  senior: "Senior volonter",
  volonter: "Volonter",
  novi: "Novi član",
};

const STATUS_STYLE: Record<MemberStatus, string> = {
  aktivan: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  pauza: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  mentorisanje: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
};

type Props = {
  team: Team;
};

function TeamCard({ team }: Props) {
  const label = TEAMS[team.id].label;
  const coordinator = TEAM_MEMBERS.find((m) => m.id === team.coordinatorId);
  const members = TEAM_MEMBERS.filter((m) => team.memberIds.includes(m.id));

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {label}
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Koordinator: {coordinator?.name} · {members.length} članova
          </p>
        </div>
        <span className="text-sm font-semibold text-blue-600">
          {team.okrProgress}%
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
        OKR: {team.okrTitle}
      </p>
      <div className="mt-2 h-2 rounded-full bg-slate-100 dark:bg-slate-800">
        <div
          className="h-2 rounded-full bg-blue-600"
          style={{ width: `${team.okrProgress}%` }}
        />
      </div>

      <table className="mt-5 w-full text-left text-sm">
        <thead className="text-xs uppercase text-slate-400">
          <tr>
            <th className="pb-2">Član</th>
            <th className="pb-2">Uloga</th>
            <th className="pb-2">Status</th>
            <th className="pb-2">Zadaci</th>
            <th className="pb-2">Vještine</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m) => (
            <tr key={m.id} className="border-t border-slate-100 dark:border-slate-800">
              <td className="py-2">
                <div className="font-medium text-slate-900 dark:text-slate-100">
                  {m.name}
                </div>
                <div className="text-xs text-slate-500">{m.email}</div>
              </td>
              <td className="py-2 text-slate-600 dark:text-slate-300">
                {ROLE_LABEL[m.role]}
              </td>
              <td className="py-2">
                <span className={`rounded-full px-2 py-0.5 text-xs ${STATUS_STYLE[m.status]}`}>
                  {m.status}
                </span>
              </td>
              <td
                className={`py-2 ${
                  m.taskCount >= 4
                    ? "font-semibold text-red-600"
                    : "text-slate-600 dark:text-slate-300"
                }`}
              >
                {m.taskCount}
              </td>
              <td className="py-2 text-xs text-slate-500">
                {m.skills.join(", ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeamCard;