const procedimentos = [
  { id: "1", nome: "Limpeza de pele", duracao: "60 min", retorno: "30 dias", status: "Ativo" },
];

export function ProcedimentoTable() {
  return (
    <section className="rounded-2xl border border-[#E8DDD7] bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-[#2E2E2E]">Procedimentos cadastrados</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="text-[#8C6A5D]"><tr><th className="border-b border-[#E8DDD7] py-3">Nome</th><th className="border-b border-[#E8DDD7] py-3">Duração</th><th className="border-b border-[#E8DDD7] py-3">Retorno</th><th className="border-b border-[#E8DDD7] py-3">Status</th></tr></thead>
          <tbody>{procedimentos.map((item) => <tr key={item.id}><td className="border-b border-[#F2E9E4] py-3">{item.nome}</td><td className="border-b border-[#F2E9E4] py-3">{item.duracao}</td><td className="border-b border-[#F2E9E4] py-3">{item.retorno}</td><td className="border-b border-[#F2E9E4] py-3">{item.status}</td></tr>)}</tbody>
        </table>
      </div>
    </section>
  );
}
