export function PreAvaliacaoForm() {
  return (
    <section className="rounded-2xl border border-[#E8DDD7] bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-[#2E2E2E]">Nova pré-avaliação</h2>
      <form className="mt-4 grid gap-4 md:grid-cols-2">
        <input className="rounded-xl border border-[#E8DDD7] px-4 py-3 text-sm" placeholder="Nome da cliente" />
        <input className="rounded-xl border border-[#E8DDD7] px-4 py-3 text-sm" placeholder="Procedimento de interesse" />
        <textarea className="rounded-xl border border-[#E8DDD7] px-4 py-3 text-sm md:col-span-2" placeholder="Queixa, objetivo, contraindicações e observações" />
        <button type="button" className="rounded-xl bg-[#C89F9C] px-4 py-3 text-sm font-semibold text-white md:col-span-2">
          Salvar pré-avaliação
        </button>
      </form>
    </section>
  );
}
