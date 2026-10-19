const navItems = [
  "Kontrolna tabla",
  "Zadaci",
  "Sastanci",
  "OKR Ciljevi",
  "Izvještaji",
  "Timovi",
  "Profil i postavke",
];

const teams = [
  "Dizajn tim",
  "IT Inženjering",
  "PR & Komunikacije",
  "HR & Volonteri",
  "Edu & Radionice",
];

function Sidebar() {
  const active = "Kontrolna tabla";

  return (
    <aside className="w-64 border-r border-slate-200 bg-white p-5">
      <div>
        <div className="text-lg font-bold text-blue-700">VolonteriHub</div>
        <div className="text-xs text-slate-500">ZAJEDNICA & ZADACI</div>
      </div>

      <nav className="mt-6">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li
              key={item}
              className={`rounded-lg px-3 py-2 text-sm ${
                item === active
                  ? "bg-blue-600 text-white"
                  : "text-slate-600"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      <p className="mt-6 text-xs font-semibold text-slate-500">Timovi</p>
      <ul className="mt-2 space-y-1">
        {teams.map((team) => (
          <li key={team} className="px-3 py-2 text-sm text-slate-600">
            {team}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;