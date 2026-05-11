import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { whatsappMessages } from "@/lib/whatsapp/messages";

const clientes = [
  { id: "1", nome: "Cliente exemplo", whatsapp: "11999999999", status: "Ativa" },
];

export function ClienteTable() {
  return (
    <section className="rounded-2xl border border-[#E8DDD7] bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-[#2E2E2E]">Clientes cadastrados</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="text-[#8C6A5D]">
            <tr>
              <th className="border-b border-[#E8DDD7] py-3">Nome</th>
              <th className="border-b border-[#E8DDD7] py-3">WhatsApp</th>
              <th className="border-b border-[#E8DDD7] py-3">Status</th>
              <th className="border-b border-[#E8DDD7] py-3">Ação</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td className="border-b border-[#F2E9E4] py-3">{cliente.nome}</td>
                <td className="border-b border-[#F2E9E4] py-3">{cliente.whatsapp}</td>
                <td className="border-b border-[#F2E9E4] py-3">{cliente.status}</td>
                <td className="border-b border-[#F2E9E4] py-3">
                  <WhatsAppButton phone={cliente.whatsapp} message={whatsappMessages.contatoInicial(cliente.nome)} label="Chamar" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
