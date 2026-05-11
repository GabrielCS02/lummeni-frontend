export function AdminHeader() {
  return (
    <header className="border-b border-[#E8DDD7] bg-white px-4 py-4 md:px-6">
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#C89F9C]">Sistema Lummeni</p>
          <h2 className="text-lg font-semibold text-[#2E2E2E]">Painel administrativo</h2>
        </div>
        <p className="text-sm text-[#8C6A5D]">Atendimento conduzido pelo WhatsApp</p>
      </div>
    </header>
  );
}
