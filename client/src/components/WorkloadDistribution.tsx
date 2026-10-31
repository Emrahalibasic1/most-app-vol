import type { Member } from "../data/mockDashboard";
import WorkloadPanel from "./WorkloadPanel";

type Props = {
  overloaded: Member[];
  free: Member[];
};

function WorkloadDistribution({ overloaded, free }: Props) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h2 className="text-lg font-bold">Raspodjela opterećenja članova</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Balansiranje angažmana radi prevencije sagorijevanja volontera
          </p>
        </div>
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
          18 u ravnoteži
        </span>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <WorkloadPanel
          tone="red"
          title="Preopterećeni (4+ zadataka)"
          members={overloaded}
          actionLabel="Preraspodijeli"
          note="Preporuka: Prenijeti 2 zadatka na članove sa slobodnim kapacitetom."
        />
        <WorkloadPanel
          tone="green"
          title="Slobodan kapacitet (0-1 zadatak)"
          members={free}
          actionLabel="Dodijeli"
          note="Otvoreni su za prihvatanje novih mini-projekata ove sedmice."
        />
      </div>
    </section>
  );
}

export default WorkloadDistribution;