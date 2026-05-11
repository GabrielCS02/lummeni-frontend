type RetornoStatusBadgeProps = {
  status: "pendente" | "avisado" | "agendado" | "concluido" | "atrasado";
};

const labels = {
  pendente: "Pendente",
  avisado: "Avisado",
  agendado: "Agendado",
  concluido: "Concluído",
  atrasado: "Atrasado",
};

export function RetornoStatusBadge({ status }: RetornoStatusBadgeProps) {
  return <span className="rounded-full bg-[#FAF7F2] px-3 py-1 text-xs font-medium text-[#8C6A5D]">{labels[status]}</span>;
}
