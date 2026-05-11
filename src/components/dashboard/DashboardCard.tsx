type DashboardCardProps = {
  title: string;
  value: string;
  description: string;
};

export function DashboardCard({ title, value, description }: DashboardCardProps) {
  return (
    <article className="rounded-2xl border border-[#E8DDD7] bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-[#8C6A5D]">{title}</p>
      <strong className="mt-3 block text-3xl font-semibold text-[#2E2E2E]">{value}</strong>
      <p className="mt-2 text-sm text-[#8C6A5D]">{description}</p>
    </article>
  );
}
