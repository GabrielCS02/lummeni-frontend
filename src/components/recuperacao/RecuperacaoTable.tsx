import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { whatsappMessages } from "@/lib/whatsapp/messages";
import { RecuperacaoStatusBadge } from "./RecuperacaoStatusBadge";

const clientes = [
  { id: "1", nome: "Cliente exemplo", whatsapp: "11999999999", interesse: "Limpeza de pele", status: "sem_resposta" as const },
];

export function RecuperacaoTable() {
  return (
    <section className="rounded-2xl border border-[#E8DDD7] bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-[#2E2E2E]">Clientes para recuperação</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[820px] text-left text-sm">
          <thead className="text-[#8C6A5D]"><tr><th className="border-b border-[#E8DDD7] py-3">Cliente</th><th className="border-b border-[#E8DDD7] py-3">Interesse</th><th className="border-b border-[#E8DDD7] py-3">Status</th><th className="border-b border-[#E8DDD7] py-3">Ação</th></tr></thead>
          <tbody>{clientes.map((item) => <tr key={item.id}><td className="border-b border-[#F2E9E4] py-3">{item.nome}</td><td className="border-b border-[#F2E9E4] py-3">{item.interesse}</td><td className="border-b border-[#F2E9E4] py-3"><RecuperacaoStatusBadge status={item.status} /></td><td className="border-b border-[#F2E9E4] py-3"><WhatsAppButton phone={item.whatsapp} message={whatsappMessages.recuperacao(item.nome, item.interesse)} label="Recuperar" /></td></tr>)}</tbody>
        </table>
      </div>
    </section>
  );
}
