import { RecuperacaoTable } from "@/components/recuperacao/RecuperacaoTable";
import { mockRecuperacoes } from "@/data/mock-recuperacao";

export default function RecuperacaoPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Recuperação
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Acompanhe clientes sem resposta, cancelamentos e oportunidades de retorno pelo WhatsApp.
        </p>
      </div>

      <RecuperacaoTable recuperacoes={mockRecuperacoes} />
    </section>
  );
}