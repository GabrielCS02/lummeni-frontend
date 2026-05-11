export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FAF7F2] px-4">
      <section className="w-full max-w-md rounded-2xl border border-[#E8DDD7] bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#C89F9C]">Lummeni</p>
          <h1 className="mt-3 text-2xl font-semibold text-[#2E2E2E]">Acesso administrativo</h1>
          <p className="mt-2 text-sm text-[#8C6A5D]">Entre para gerenciar clientes, agendamentos e retornos.</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#2E2E2E]" htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="admin@lummeni.com"
              className="w-full rounded-xl border border-[#E8DDD7] px-4 py-3 text-sm outline-none transition focus:border-[#C89F9C]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#2E2E2E]" htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-[#E8DDD7] px-4 py-3 text-sm outline-none transition focus:border-[#C89F9C]"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-xl bg-[#C89F9C] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#B88986]"
          >
            Entrar no painel
          </button>
        </form>
      </section>
    </main>
  );
}
