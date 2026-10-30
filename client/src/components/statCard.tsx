import type { LucideIcon } from "lucide-react";

type Tone = "blue" | "gray" | "red" | "green";

type StatCardProps = {
  value: string | number;
  label: string;
  icon: LucideIcon;
  badge: string;
  tone: Tone;
  footer: string;
};

const tones: Record<Tone, { icon: string; badge: string }> = {
  blue: {
    icon: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  },
  red: {
    icon: "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300",
    badge: "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300",
  },
gray: {
  icon: "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200",
  badge: "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200",
},
  green: {
    icon: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  },
};

function StatCard({ value, label, icon: Icon, badge, tone, footer }: StatCardProps) {
  const color = tones[tone];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-start justify-between">
        <div className={`rounded-lg p-2 ${color.icon}`}>
          <Icon size={20} />
        </div>
        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${color.badge}`}>
          {badge}
        </span>
      </div>

      <div className="mt-4 text-4xl font-bold">{value}</div>
      <div className="text-sm text-slate-500 dark:text-slate-400">{label}</div>

      <div className="mt-4 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600 dark:bg-slate-900 dark:text-slate-300">
        {footer}
      </div>
    </div>
  );
}

export default StatCard;