export function AtendimentoForm() {
  return (
    <section className="rounded-2xl border border-[#E8DDD7] bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-[#2E2E2E]">Registrar atendimento</h2>
      <form className="mt-4 grid gap-4 md:grid-cols-3">
        <input className="rounded-xl border border-[#E8DDD7] px-4 py-3 text-sm" placeholder="Cliente" />
        <input className="rounded-xl border border-[#E8DDD7] px-4 py-3 text-sm" placeholder="Procedimento realizado" />
        <input className="rounded-xl border border-[#E8DDD7] px-4 py-3 text-sm" type="date" />
        <textarea className="rounded-xl border border-[#E8DDD7] px-4 py-3 text-sm md:col-span-3" placeholder="Observações do atendimento" />
        <button type="button" className="rounded-xl bg-[#C89F9C] px-4 py-3 text-sm font-semibold text-white md:col-span-3">
          Salvar atendimento
        </button>
      </form>
    </section>
  );
}
