import { ClienteTable } from "@/components/clientes/ClienteTable";
import { mockClientes } from "@/data/mock-clientes";

export default function ClientesPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Clientes
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Gerencie clientes, acompanhe histórico e facilite o contato pelo WhatsApp.
        </p>
      </div>

      <ClienteTable clientes={mockClientes} />
    </section>
  );
}