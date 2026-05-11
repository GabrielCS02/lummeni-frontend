import { ProcedimentoTable } from "@/components/procedimentos/ProcedimentoTable";
import { mockProcedimentos } from "@/data/mock-procedimentos";

export default function ProcedimentosPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Procedimentos
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Gerencie os procedimentos oferecidos, prazos de retorno e cuidados pós-procedimento.
        </p>
      </div>

      <ProcedimentoTable procedimentos={mockProcedimentos} />
    </section>
  );
}