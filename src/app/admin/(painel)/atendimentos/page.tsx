import { AtendimentoTable } from "@/components/atendimentos/AtendimentoTable";
import { mockAtendimentos } from "@/data/mock-atendimentos";

export default function AtendimentosPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Atendimentos
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Registre e acompanhe os procedimentos realizados, cuidados enviados e retornos previstos.
        </p>
      </div>

      <AtendimentoTable atendimentos={mockAtendimentos} />
    </section>
  );
}