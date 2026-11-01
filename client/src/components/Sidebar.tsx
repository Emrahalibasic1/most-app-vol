import {
  Calendar,
  ChartColumn,
  CircleCheck,
  Flag,
  Heart,
  LayoutDashboard,
  UserCog,
  Users,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { teams } from "../data/mockDashboard";

const navItems = [
  { label: "Kontrolna tabla", path: "/", icon: LayoutDashboard },
  { label: "Zadaci", path: "/zadaci", icon: CircleCheck },
  { label: "Sastanci", path: "/sastanci", icon: Calendar },
  { label: "OKR Ciljevi", path: "/okr", icon: Flag },
  { label: "Izvještaji", path: "/izvjestaji", icon: ChartColumn },
  { label: "Timovi", path: "/timovi", icon: Users },
  { label: "Profil", path: "/profil", icon: UserCog },
];

function Sidebar() {
  return (
    <aside className="flex flex-col w-64 border-r border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
      <div>
        <div className="text-lg font-bold text-blue-700">VolonteriHub</div>
        <div className="text-xs text-slate-500">ZAJEDNICA & ZADACI</div>
      </div>

      <nav className="mt-6">
        <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
          Glavni meni
        </p>
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                    }`
                  }
                >
                  <Icon size={18} />
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-6 flex items-center justify-between px-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Timovi
        </p>
        <Link
          to="/timovi"
          className="text-xs font-medium text-blue-700 hover:underline dark:text-blue-400"
        >
          + Dodaj
        </Link>
      </div>

      <ul className="mt-2 space-y-1">
        {teams.map((team) => (
          <li
            key={team.id}
            className="flex items-center justify-between px-3 py-2 text-sm text-slate-600 dark:text-slate-300"
          >
            <span className="flex items-center gap-2">
              <span
                className={`inline-block h-2.5 w-2.5 rounded-full ${team.color}`}
              />
              {team.name}
            </span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs dark:bg-slate-800">
              {team.members}
            </span>
          </li>
        ))}
      </ul>

       <div className="mt-auto pt-6">
  <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/40">
    <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
      <Heart size={16} />
      <h3 className="text-sm font-bold">Zajedno stvaramo!</h3>
    </div>
    <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
      Ove sedmice realizovano je 84% volonterskih aktivnosti.
    </p>
    <Link
      to="/"
      className="mt-3 inline-block text-xs font-medium text-blue-700 hover:underline dark:text-blue-400"
    >
      Pomoć i podrška →
    </Link>
  </div>
</div>

    </aside>
  );
}

export default Sidebar;