import { useState } from "react";
import type { TeamId } from "../types/task";
import TeamFilters from "../components/teams/TeamFilters";
import TeamCard from "../components/teams/TeamCard";
import { TEAMS_DATA } from "../data/mockTeams";
import TeamStats from "../components/teams/TeamStats";
import type { MemberRole, MemberStatus } from "../types/team";
import MemberFilters from "../components/teams/MemberFilters";
function Teams() {
  const [selected, setSelected] = useState<TeamId | "all">("all");
  const [search, setSearch] = useState<string> ("");
  const [roleFilter, setRoleFilter] = useState<MemberRole | "all">("all");
  const [statusFilter, setStatusFilter] = useState<MemberStatus | "all">("all");
  const visibleTeams = selected === "all" ? TEAMS_DATA : TEAMS_DATA.filter((teams)=>teams.id === selected);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
        Timovi i članovi
      </h1>
      <div className="mt-6">
        <TeamStats />
      </div>
      <div className="mt-6">
          <MemberFilters
      search={search}
      onSearch={setSearch}
      role={roleFilter}
      onRole={setRoleFilter}
      status={statusFilter}
      onStatus={setStatusFilter}
      />
      </div>
      <div className="mt-6">
        <TeamFilters selected={selected} onSelect={setSelected} />
      </div>

      <div className="mt-6 grid gap-4">
        {visibleTeams.map((team) => (
          <TeamCard
            key={team.id}
            team={team}
            search={search}
            roleFilter={roleFilter}
            statusFilter={statusFilter}
          />
        ))}
      </div>
    </div>
  );
}

export default Teams;