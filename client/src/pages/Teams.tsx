import { useState } from "react";
import type { TeamId } from "../types/task";
import TeamFilters from "../components/teams/TeamFilters";

function Teams() {
  const [selected, setSelected] = useState<TeamId | "all">("all");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
        Timovi i članovi
      </h1>
      <div className="mt-6">
        <TeamFilters selected={selected} onSelect={setSelected} />
      </div>
    </div>
  );
}

export default Teams;