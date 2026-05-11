import { StatusBadge, StatusBadgeVariant } from "@/components/common/StatusBadge";
import { AgendamentoStatus } from "@/types/agendamento";

type AgendamentoStatusBadgeProps = {
  status: AgendamentoStatus;
};

const statusConfig: Record<
  AgendamentoStatus,
  {
    label: string;
    variant: StatusBadgeVariant;
  }
> = {
  pendente: {
    label: "Pendente",
    variant: "warning",
  },
  confirmado: {
    label: "Confirmado",
    variant: "info",
  },
  realizado: {
    label: "Realizado",
    variant: "success",
  },
  cancelado: {
    label: "Cancelado",
    variant: "danger",
  },
};

export function AgendamentoStatusBadge({
  status,
}: AgendamentoStatusBadgeProps) {
  const config = statusConfig[status];

  return <StatusBadge label={config.label} variant={config.variant} />;
}