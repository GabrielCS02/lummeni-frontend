type AdminHeaderProps = {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
};

export function AdminHeader({
  isSidebarOpen,
  onToggleSidebar,
}: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-[#E8DDD7] bg-white/90 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="rounded-full border border-[#E8DDD7] bg-white px-4 py-2 text-sm font-medium text-[#8C6A5D] shadow-sm transition hover:bg-[#F3E7E2]"
            aria-label={
              isSidebarOpen ? "Fechar menu lateral" : "Abrir menu lateral"
            }
          >
            {isSidebarOpen ? "Fechar menu" : "☰ Menu"}
          </button>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8C6A5D]">
              Sistema Lummeni
            </p>

            <h1 className="mt-1 text-xl font-semibold text-[#2E2E2E]">
              Painel Administrativo
            </h1>
          </div>
        </div>

        <div className="hidden rounded-full border border-[#E8DDD7] bg-[#FAF7F2] px-4 py-2 text-sm text-[#6B5F5A] md:block">
          Atendimento via WhatsApp
        </div>
      </div>
    </header>
  );
}