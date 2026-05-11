import { ProcedimentoForm } from "@/components/procedimentos/ProcedimentoForm";
import { ProcedimentoTable } from "@/components/procedimentos/ProcedimentoTable";

export default function ProcedimentosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#2E2E2E]">Procedimentos</h1>
        <p className="mt-1 text-sm text-[#8C6A5D]">Cadastre serviços, duração, retorno e cuidados pós-procedimento.</p>
      </div>

      <ProcedimentoForm />
      <ProcedimentoTable />
    </div>
  );
}
