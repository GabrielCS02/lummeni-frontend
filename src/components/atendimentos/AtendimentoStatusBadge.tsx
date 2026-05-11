import { StatusBadge, StatusBadgeVariant } from "@/components/common/StatusBadge";
import { AtendimentoStatus } from "@/types/atendimento";

type AtendimentoStatusBadgeProps = {
  status: AtendimentoStatus;
};

const statusConfig: Record<
  AtendimentoStatus,
  {
    label: string;
    variant: StatusBadgeVariant;
  }
> = {
  realizado: {
    label: "Realizado",
    variant: "info",
  },
  retorno_pendente: {
    label: "Retorno pendente",
    variant: "warning",
  },
  retorno_agendado: {
    label: "Retorno agendado",
    variant: "accent",
  },
  finalizado: {
    label: "Finalizado",
    variant: "success",
  },
};

export function AtendimentoStatusBadge({
  status,
}: AtendimentoStatusBadgeProps) {
  const config = statusConfig[status];

  return <StatusBadge label={config.label} variant={config.variant} />;
}