import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { RecentActivityList } from "@/components/dashboard/RecentActivityList";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#2E2E2E]">Dashboard</h1>
        <p className="mt-1 text-sm text-[#8C6A5D]">Resumo operacional do Lummeni.</p>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <DashboardCard title="Clientes cadastrados" value="0" description="Base total de clientes" />
        <DashboardCard title="Agendamentos hoje" value="0" description="Procedimentos previstos" />
        <DashboardCard title="Retornos próximos" value="0" description="Retornos em aberto" />
        <DashboardCard title="Sem resposta" value="0" description="Clientes para recuperação" />
      </section>

      <RecentActivityList />
    </div>
  );
}
