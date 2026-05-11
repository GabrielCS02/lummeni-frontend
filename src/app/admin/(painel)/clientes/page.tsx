import { ClienteForm } from "@/components/clientes/ClienteForm";
import { ClienteTable } from "@/components/clientes/ClienteTable";

export default function ClientesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#2E2E2E]">Clientes</h1>
        <p className="mt-1 text-sm text-[#8C6A5D]">Cadastre, pesquise e acompanhe o histórico das clientes.</p>
      </div>

      <ClienteForm />
      <ClienteTable />
    </div>
  );
}
