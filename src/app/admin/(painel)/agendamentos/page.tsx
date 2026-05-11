import { AgendamentoTable } from "@/components/agendamentos/AgendamentoTable";
import { mockAgendamentos } from "@/data/mock-agendamentos";

export default function AgendamentosPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Agendamentos
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Acompanhe os agendamentos, horários e confirmações de atendimento.
        </p>
      </div>

      <AgendamentoTable agendamentos={mockAgendamentos} />
    </section>
  );
}