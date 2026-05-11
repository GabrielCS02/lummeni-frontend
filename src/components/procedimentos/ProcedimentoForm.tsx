export function ProcedimentoForm() {
  return (
    <section className="rounded-2xl border border-[#E8DDD7] bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-[#2E2E2E]">Novo procedimento</h2>
      <form className="mt-4 grid gap-4 md:grid-cols-3">
        <input className="rounded-xl border border-[#E8DDD7] px-4 py-3 text-sm" placeholder="Nome do procedimento" />
        <input className="rounded-xl border border-[#E8DDD7] px-4 py-3 text-sm" placeholder="Duração estimada" />
        <input className="rounded-xl border border-[#E8DDD7] px-4 py-3 text-sm" placeholder="Dias para retorno" />
        <textarea className="rounded-xl border border-[#E8DDD7] px-4 py-3 text-sm md:col-span-3" placeholder="Cuidados pós-procedimento" />
        <button type="button" className="rounded-xl bg-[#C89F9C] px-4 py-3 text-sm font-semibold text-white md:col-span-3">
          Salvar procedimento
        </button>
      </form>
    </section>
  );
}
