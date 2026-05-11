export function AgendamentoForm() {
  return (
    <section className="rounded-2xl border border-[#E8DDD7] bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-[#2E2E2E]">Novo agendamento</h2>
      <form className="mt-4 grid gap-4 md:grid-cols-4">
        <input className="rounded-xl border border-[#E8DDD7] px-4 py-3 text-sm" placeholder="Cliente" />
        <input className="rounded-xl border border-[#E8DDD7] px-4 py-3 text-sm" placeholder="Procedimento" />
        <input className="rounded-xl border border-[#E8DDD7] px-4 py-3 text-sm" type="date" />
        <input className="rounded-xl border border-[#E8DDD7] px-4 py-3 text-sm" type="time" />
        <button type="button" className="rounded-xl bg-[#C89F9C] px-4 py-3 text-sm font-semibold text-white md:col-span-4">
          Salvar agendamento
        </button>
      </form>
    </section>
  );
}
