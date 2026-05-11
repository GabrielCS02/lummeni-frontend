import { RecuperacaoTable } from "@/components/recuperacao/RecuperacaoTable";

export default function RecuperacaoPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#2E2E2E]">Recuperação de clientes</h1>
        <p className="mt-1 text-sm text-[#8C6A5D]">Veja clientes sem resposta, cancelados ou interessados que ainda não agendaram.</p>
      </div>

      <RecuperacaoTable />
    </div>
  );
}
