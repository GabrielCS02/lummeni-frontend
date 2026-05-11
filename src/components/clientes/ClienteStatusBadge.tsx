import { StatusBadge, StatusBadgeVariant } from "@/components/common/StatusBadge";
import { ClienteStatus } from "@/types/cliente";

type ClienteStatusBadgeProps = {
  status: ClienteStatus;
};

const statusConfig: Record<
  ClienteStatus,
  {
    label: string;
    variant: StatusBadgeVariant;
  }
> = {
  ativo: {
    label: "Ativo",
    variant: "success",
  },
  sem_resposta: {
    label: "Sem resposta",
    variant: "warning",
  },
  em_acompanhamento: {
    label: "Em acompanhamento",
    variant: "info",
  },
  inativo: {
    label: "Inativo",
    variant: "neutral",
  },
};

export function ClienteStatusBadge({ status }: ClienteStatusBadgeProps) {
  const config = statusConfig[status];

  return <StatusBadge label={config.label} variant={config.variant} />;
}