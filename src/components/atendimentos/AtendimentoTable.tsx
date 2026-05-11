const atendimentos = [
  { id: "1", cliente: "Cliente exemplo", procedimento: "Limpeza de pele", data: "A definir" },
];

export function AtendimentoTable() {
  return (
    <section className="rounded-2xl border border-[#E8DDD7] bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-[#2E2E2E]">Atendimentos realizados</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="text-[#8C6A5D]"><tr><th className="border-b border-[#E8DDD7] py-3">Cliente</th><th className="border-b border-[#E8DDD7] py-3">Procedimento</th><th className="border-b border-[#E8DDD7] py-3">Data</th></tr></thead>
          <tbody>{atendimentos.map((item) => <tr key={item.id}><td className="border-b border-[#F2E9E4] py-3">{item.cliente}</td><td className="border-b border-[#F2E9E4] py-3">{item.procedimento}</td><td className="border-b border-[#F2E9E4] py-3">{item.data}</td></tr>)}</tbody>
        </table>
      </div>
    </section>
  );
}
