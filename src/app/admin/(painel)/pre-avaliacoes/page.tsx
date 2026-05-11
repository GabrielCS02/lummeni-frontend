import { PreAvaliacaoTable } from "@/components/pre-avaliacoes/PreAvaliacaoTable";
import { mockPreAvaliacoes } from "@/data/mock-pre-avaliacoes";

export default function PreAvaliacoesPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Pré-avaliações
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Acompanhe clientes interessadas, análise inicial e próximos contatos pelo WhatsApp.
        </p>
      </div>

      <PreAvaliacaoTable preAvaliacoes={mockPreAvaliacoes} />
    </section>
  );
}