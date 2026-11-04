import { Bell, Search } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

function TopBar() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-3 dark:border-slate-700 dark:bg-slate-900">
      <div className="relative w-full max-w-md">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          placeholder="Pretraži zadatke, članove ili OKR-ove"
          className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-16 text-sm outline-none focus:border-blue-600 dark:border-slate-700 dark:bg-slate-800"
        />
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded bg-slate-200 px-1.5 py-0.5 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-300">
          Ctrl+K
        </kbd>
      </div>
      <div className="hidden gap-1 rounded-full bg-slate-100 p-1 text-sm font-medium lg:flex dark:bg-slate-800">
        <button className="rounded-full bg-blue-600 px-3 py-1 text-white">
          Admin / PM
        </button>
        <button className="rounded-full px-3 py-1 text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-slate-700">
          Koordinator
        </button>
        <button className="rounded-full px-3 py-1 text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-slate-700">
          Volonter
        </button>
      </div>
      <div className="hidden gap-1 text-xs font-bold lg:flex">
        <button className="rounded px-2 py-1 text-blue-700 dark:text-blue-400">
          BS
        </button>
        <button className="rounded px-2 py-1 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
          EN
        </button>
      </div>
      <div className="flex items-center gap-4">
          <ThemeToggle />
        <button className="relative rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
          <Bell size={18} />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
            3
          </span>
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
            AH
          </div>
          <div className="hidden md:block">
            <div className="text-sm font-semibold">Amina Hadžić</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Projekt Menadžer / Admin
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopBar;