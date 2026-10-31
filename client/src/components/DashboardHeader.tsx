import { CalendarPlus, Plus } from "lucide-react";

const today = new Date().toLocaleDateString("bs-BA", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

function DashboardHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold">Dobrodošli nazad, Emrah! 👋</h1>
          <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium capitalize text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            {today}
          </span>
        </div>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Pregled aktivnosti, opterećenja i napretka za svih 5 volonterskih
          timova unutar zajednice.
        </p>
      </div>

      <div className="flex gap-3">
        <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700">
          <CalendarPlus size={16} />
          Zakaži sastanak
        </button>

        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          <Plus size={16} />
          Novi zadatak
        </button>
      </div>
    </div>
  );
}

export default DashboardHeader;