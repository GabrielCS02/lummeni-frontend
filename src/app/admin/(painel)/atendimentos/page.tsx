import { AtendimentoForm } from "@/components/atendimentos/AtendimentoForm";
import { AtendimentoTable } from "@/components/atendimentos/AtendimentoTable";

export default function AtendimentosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#2E2E2E]">Atendimentos</h1>
        <p className="mt-1 text-sm text-[#8C6A5D]">Registre procedimentos realizados e alimente o histórico da cliente.</p>
      </div>

      <AtendimentoForm />
      <AtendimentoTable />
    </div>
  );
}
