type DashboardCardProps = {
  title: string;
  value: number;
  description: string;
};

export function DashboardCard({
  title,
  value,
  description,
}: DashboardCardProps) {
  return (
    <div className="rounded-lg border bg-white p-4">
      <p className="text-sm text-slate-500">{title}</p>

      <strong className="mt-2 block text-2xl text-slate-900">
        {value}
      </strong>

      <p className="mt-1 text-sm text-slate-500">
        {description}
      </p>
    </div>
  );
}