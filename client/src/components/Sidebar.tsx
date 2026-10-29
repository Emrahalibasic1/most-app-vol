import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Kontrolna tabla", path: "/" },
  { label: "Zadaci", path: "/zadaci" },
  {label: "Sastanci" , path: "/sastanci"},
  {label: "OKR Ciljevi", path:"/okr"},
  {label: "Izvjestaji", path:"/izvjestaji"},
  {label: "Timovi", path:"/timovi"},
  {label: "Profil", path:"/profil"}
];

const teams = [
  "Dizajn tim",
  "IT Inženjering",
  "PR & Komunikacije",
  "HR & Volonteri",
  "Edu & Radionice",
];

function Sidebar() {

  return (
    
    <aside className="w-64 border-r border-slate-200 bg-white p-5 dark:bg-slate-900 dark:border-slate-700">
      <div>
        <div className="text-lg font-bold text-blue-700">VolonteriHub</div>
        <div className="text-xs text-slate-500">ZAJEDNICA & ZADACI</div>
      </div>

      <nav className="mt-6">
        <ul className="space-y-1">
          {navItems.map((item) => (
           <li key={item.path}>
    <NavLink 
      to={item.path}
      end={item.path === "/"}
      className={({ isActive }) =>
        `block rounded-lg px-3 py-2 text-sm ${
          isActive ? "bg-blue-600 text-white" : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
        }`
      }
    >
      {item.label}
    </NavLink>
  </li>
          ))}
        </ul>
      </nav>

      <p className="mt-6 text-xs font-semibold text-slate-500 dark:text-slate-400">Timovi</p>
      <ul className="mt-2 space-y-1">
        {teams.map((team) => (
          <li key={team} className="px-3 py-2 text-sm text-slate-600 ark:text-slate-300 ">
            {team}
          </li>
        ))}
      </ul>
      <div className="mt-6">
            <ThemeToggle/>
      </div>
  
    </aside>
  );
}

export default Sidebar;