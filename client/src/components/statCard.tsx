type StatCardProps = {
  value: string | number;
  label: string;
};

function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
      <div className="text-4xl font-bold">{value}</div>
      <div className="text-sm text-slate-500 dark:text-slate-400">{label}</div>
    </div>
  );
}

export default StatCard;