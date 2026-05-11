const activities = [
  "Nenhuma atividade recente cadastrada.",
  "Integração com Supabase será adicionada nas próximas etapas.",
  "Botões de WhatsApp serão usados para conduzir o contato com clientes.",
];

export function RecentActivityList() {
  return (
    <section className="rounded-2xl border border-[#E8DDD7] bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-[#2E2E2E]">Atividades recentes</h2>
      <ul className="mt-4 space-y-3">
        {activities.map((activity) => (
          <li key={activity} className="rounded-xl bg-[#FAF7F2] px-4 py-3 text-sm text-[#8C6A5D]">
            {activity}
          </li>
        ))}
      </ul>
    </section>
  );
}
