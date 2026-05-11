type RecuperacaoStatusBadgeProps = {
  status: "sem_resposta" | "interessada" | "aguardando" | "recuperada" | "perdida";
};

const labels = {
  sem_resposta: "Sem resposta",
  interessada: "Interessada",
  aguardando: "Aguardando",
  recuperada: "Recuperada",
  perdida: "Perdida",
};

export function RecuperacaoStatusBadge({ status }: RecuperacaoStatusBadgeProps) {
  return <span className="rounded-full bg-[#FAF7F2] px-3 py-1 text-xs font-medium text-[#8C6A5D]">{labels[status]}</span>;
}
