import { TEAMS } from "../../types/task";
import type { TeamId } from "../../types/task";

type Props = {
  selected: TeamId | "all";
  onSelect: (value: TeamId | "all") => void;
};

function TeamFilters({ selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect("all")}
        className={`rounded-full px-4 py-1.5 text-sm font-medium ${
          selected === "all"
            ? "bg-blue-600 text-white"
            : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
        }`}
      >
        Svi timovi
      </button>

      {Object.entries(TEAMS).map(([id, team]) => (
        <button
          key={id}
          onClick={() => onSelect(id as TeamId)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium ${
            selected === id
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          {team.label}
        </button>
      ))}
    </div>
  );
}

export default TeamFilters;