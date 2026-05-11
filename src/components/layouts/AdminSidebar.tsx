import Link from "next/link";

const menuItems = [
  { label: "Dashboard", href: "/admin/dashboard" },
  { label: "Clientes", href: "/admin/clientes" },
  { label: "Pré-avaliações", href: "/admin/pre-avaliacoes" },
  { label: "Agendamentos", href: "/admin/agendamentos" },
  { label: "Procedimentos", href: "/admin/procedimentos" },
  { label: "Atendimentos", href: "/admin/atendimentos" },
  { label: "Retornos", href: "/admin/retornos" },
  { label: "Recuperação", href: "/admin/recuperacao" },
];

export function AdminSidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-[#E8DDD7] bg-white p-5 lg:block">
      <div className="mb-8">
        <p className="text-xl font-semibold text-[#2E2E2E]">Lummeni</p>
        <p className="mt-1 text-sm text-[#8C6A5D]">Gestão para estética</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-xl px-4 py-3 text-sm font-medium text-[#2E2E2E] transition hover:bg-[#FAF7F2] hover:text-[#8C6A5D]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
