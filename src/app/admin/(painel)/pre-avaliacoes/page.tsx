import { PreAvaliacaoForm } from "@/components/pre-avaliacoes/PreAvaliacaoForm";
import { PreAvaliacaoTable } from "@/components/pre-avaliacoes/PreAvaliacaoTable";

export default function PreAvaliacoesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#2E2E2E]">Pré-avaliações</h1>
        <p className="mt-1 text-sm text-[#8C6A5D]">Registre interesses recebidos pelo WhatsApp e acompanhe o status.</p>
      </div>

      <PreAvaliacaoForm />
      <PreAvaliacaoTable />
    </div>
  );
}
