import { useState } from "react";
import type { TeamId } from "../types/task";
import TeamFilters from "../components/teams/TeamFilters";
import TeamCard from "../components/teams/TeamCard";
import { TEAMS_DATA } from "../data/mockTeams";

function Teams() {
  const [selected, setSelected] = useState<TeamId | "all">("all");
  const visibleTeams = selected === "all" ? TEAMS_DATA : TEAMS_DATA.filter((teams)=>teams.id === selected);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
        Timovi i članovi
      </h1>

      <div className="mt-6">
        <TeamFilters selected={selected} onSelect={setSelected} />
      </div>

      <div className="mt-6 grid gap-4">
        {visibleTeams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}

export default Teams;