import { RetornoTable } from "@/components/retornos/RetornoTable";
import { mockRetornos } from "@/data/mock-retornos";

export default function RetornosPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Retornos
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Acompanhe clientes com retorno previsto, atrasado ou já avisado.
        </p>
      </div>

      <RetornoTable retornos={mockRetornos} />
    </section>
  );
}