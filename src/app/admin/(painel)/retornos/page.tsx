import { RetornoTable } from "@/components/retornos/RetornoTable";

export default function RetornosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#2E2E2E]">Retornos</h1>
        <p className="mt-1 text-sm text-[#8C6A5D]">Acompanhe clientes que precisam retornar e envie lembretes pelo WhatsApp.</p>
      </div>

      <RetornoTable />
    </div>
  );
}
