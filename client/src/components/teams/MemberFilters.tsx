import type { MemberRole, MemberStatus } from "../../types/team";
import { ROLE_LABEL, STATUS_LABEL } from "../../types/team";

type Props = {
  search: string;
  onSearch: (value: string) => void;
  role: MemberRole | "all";
  onRole: (value: MemberRole | "all") => void;
  status: MemberStatus | "all";
  onStatus: (value: MemberStatus | "all") => void;
};

const inputClass =
  "rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100";

function MemberFilters({ search, onSearch, role, onRole, status, onStatus }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      <input
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Pretraži članove..."
        className={`${inputClass} min-w-56 flex-1`}
      />

      <select
        value={role}
        onChange={(e) => onRole(e.target.value as MemberRole | "all")}
        className={inputClass}
      >
        <option value="all">Sve uloge</option>
        {Object.entries(ROLE_LABEL).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    <select
    value={status}
    onChange={(e) => onStatus(e.target.value as MemberStatus | "all")}
    className={inputClass}
    >
    <option value="all">Svi statusi</option>
    {Object.entries(STATUS_LABEL).map(([value, label]) => (
        <option key={value} value={value}>
        {label}
        </option>
    ))}
    </select>
    </div>
  );
}

export default MemberFilters;