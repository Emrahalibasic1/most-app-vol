import type { Member } from "../data/mockDashboard";

type Tone = "red" | "green";

type Props = {
  tone: Tone;
  title: string;
  members: Member[];
  actionLabel: string;
  note: string;
};

const tones: Record<Tone, { box: string; title: string; badge: string }> = {
  red: {
    box: "bg-red-50 border-red-100 dark:bg-red-950/40 dark:border-red-900",
    title: "text-red-700 dark:text-red-300",
    badge: "bg-red-600 text-white",
  },
  green: {
    box: "bg-emerald-50 border-emerald-100 dark:bg-emerald-950/40 dark:border-emerald-900",
    title: "text-emerald-700 dark:text-emerald-300",
    badge: "bg-emerald-600 text-white",
  },
};

function WorkloadPanel({ tone, title, members, actionLabel, note }: Props) {
  const color = tones[tone];

  return (
    <section className={`rounded-xl border p-4 ${color.box}`}>
      <div className="flex items-center justify-between gap-2">
        <h3 className={`text-xs font-bold uppercase ${color.title}`}>{title}</h3>
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-bold ${color.badge}`}
        >
          {members.length} volontera
        </span>
      </div>

      <div className="mt-3 space-y-2">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex items-center justify-between rounded-lg bg-white p-3 dark:bg-slate-800"
          >
            <div>
              <div className="font-semibold">{member.name}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {member.team} • {member.tasks} zadataka
              </div>
            </div>
            <button className="text-sm font-medium text-blue-700 hover:underline dark:text-blue-400">
              {actionLabel}
            </button>
          </div>
        ))}
      </div>

      <p className={`mt-3 text-sm ${color.title}`}>{note}</p>
    </section>
  );
}

export default WorkloadPanel;