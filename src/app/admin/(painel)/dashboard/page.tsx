import { DashboardCard } from "@/components/dashboard/DashboardCard";
import {
  dashboardMetrics,
  latestPreEvaluations,
  pendingReturns,
  todayAppointments,
  unansweredClients,
} from "@/data/mock-dashboard";

export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Visão geral do atendimento, agendamentos e oportunidades do Lummeni.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {dashboardMetrics.map((metric) => (
          <DashboardCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            description={metric.description}
          />
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <div className="rounded-lg border bg-white p-4">
          <h2 className="text-lg font-semibold text-slate-900">
            Agendamentos de hoje
          </h2>

          <div className="mt-4 space-y-3">
            {todayAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between border-b pb-3 last:border-b-0 last:pb-0"
              >
                <div>
                  <p className="font-medium text-slate-900">
                    {appointment.cliente}
                  </p>
                  <p className="text-sm text-slate-500">
                    {appointment.procedimento}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-medium text-slate-900">
                    {appointment.horario}
                  </p>
                  <p className="text-xs text-slate-500">
                    {appointment.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border bg-white p-4">
          <h2 className="text-lg font-semibold text-slate-900">
            Retornos pendentes
          </h2>

          <div className="mt-4 space-y-3">
            {pendingReturns.map((retorno) => (
              <div
                key={retorno.id}
                className="flex items-center justify-between border-b pb-3 last:border-b-0 last:pb-0"
              >
                <div>
                  <p className="font-medium text-slate-900">
                    {retorno.cliente}
                  </p>
                  <p className="text-sm text-slate-500">
                    {retorno.procedimento}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-medium text-slate-900">
                    {retorno.dataRetorno}
                  </p>
                  <p className="text-xs text-slate-500">
                    {retorno.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border bg-white p-4">
          <h2 className="text-lg font-semibold text-slate-900">
            Clientes sem resposta
          </h2>

          <div className="mt-4 space-y-3">
            {unansweredClients.map((client) => (
              <div
                key={client.id}
                className="flex items-center justify-between border-b pb-3 last:border-b-0 last:pb-0"
              >
                <div>
                  <p className="font-medium text-slate-900">
                    {client.cliente}
                  </p>
                  <p className="text-sm text-slate-500">
                    Interesse: {client.interesse}
                  </p>
                </div>

                <p className="text-sm text-slate-500">
                  {client.ultimaInteracao}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border bg-white p-4">
          <h2 className="text-lg font-semibold text-slate-900">
            Últimas pré-avaliações
          </h2>

          <div className="mt-4 space-y-3">
            {latestPreEvaluations.map((evaluation) => (
              <div
                key={evaluation.id}
                className="flex items-center justify-between border-b pb-3 last:border-b-0 last:pb-0"
              >
                <div>
                  <p className="font-medium text-slate-900">
                    {evaluation.cliente}
                  </p>
                  <p className="text-sm text-slate-500">
                    {evaluation.procedimento}
                  </p>
                </div>

                <p className="text-sm text-slate-500">
                  {evaluation.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}