import { AgendamentoForm } from "@/components/agendamentos/AgendamentoForm";
import { AgendamentoTable } from "@/components/agendamentos/AgendamentoTable";

export default function AgendamentosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#2E2E2E]">Agendamentos</h1>
        <p className="mt-1 text-sm text-[#8C6A5D]">Organize os horários e envie confirmações pelo WhatsApp.</p>
      </div>

      <AgendamentoForm />
      <AgendamentoTable />
    </div>
  );
}
