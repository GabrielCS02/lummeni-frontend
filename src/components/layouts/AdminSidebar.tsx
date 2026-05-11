"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    label: "Clientes",
    href: "/admin/clientes",
  },
  {
    label: "Pré-avaliações",
    href: "/admin/pre-avaliacoes",
  },
  {
    label: "Agendamentos",
    href: "/admin/agendamentos",
  },
  {
    label: "Procedimentos",
    href: "/admin/procedimentos",
  },
  {
    label: "Atendimentos",
    href: "/admin/atendimentos",
  },
  {
    label: "Retornos",
    href: "/admin/retornos",
  },
  {
    label: "Recuperação",
    href: "/admin/recuperacao",
  },
];

type AdminSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname();

  function handleMenuClick() {
    const isMobile = window.innerWidth < 1024;

    if (isMobile) {
      onClose();
    }
  }

  return (
    <>
      {isOpen && (
        <button
          type="button"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          aria-label="Fechar menu lateral"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72 border-r border-[#E8DDD7] bg-white px-5 py-6 shadow-xl transition-transform duration-300 lg:shadow-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-start justify-between gap-4">
          <div className="rounded-2xl bg-[#FAF7F2] p-4">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8C6A5D]">
              Lummeni
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-[#2E2E2E]">
              Admin
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-[#6B5F5A]">
              Gestão de clientes, procedimentos, retornos e recuperação.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[#E8DDD7] px-3 py-1 text-sm text-[#8C6A5D] transition hover:bg-[#F3E7E2] lg:hidden"
            aria-label="Fechar menu"
          >
            ×
          </button>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleMenuClick}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#8C6A5D] text-white shadow-sm"
                    : "text-[#6B5F5A] hover:bg-[#F3E7E2] hover:text-[#2E2E2E]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 rounded-2xl border border-[#E8DDD7] bg-[#FAF7F2] p-4">
          <p className="text-sm font-medium text-[#2E2E2E]">
            MVP administrativo
          </p>

          <p className="mt-1 text-xs leading-relaxed text-[#6B5F5A]">
            O cliente segue pelo WhatsApp. O painel organiza toda a operação.
          </p>
        </div>
      </aside>
    </>
  );
}
