import { StatusBadge, StatusBadgeVariant } from "@/components/common/StatusBadge";
import { PreAvaliacaoStatus } from "@/types/pre-avaliacao";

type PreAvaliacaoStatusBadgeProps = {
  status: PreAvaliacaoStatus;
};

const statusConfig: Record<
  PreAvaliacaoStatus,
  {
    label: string;
    variant: StatusBadgeVariant;
  }
> = {
  nova: {
    label: "Nova",
    variant: "accent",
  },
  em_analise: {
    label: "Em análise",
    variant: "info",
  },
  aprovada: {
    label: "Aprovada",
    variant: "success",
  },
  recusada: {
    label: "Recusada",
    variant: "danger",
  },
  aguardando_resposta: {
    label: "Aguardando resposta",
    variant: "warning",
  },
};

export function PreAvaliacaoStatusBadge({
  status,
}: PreAvaliacaoStatusBadgeProps) {
  const config = statusConfig[status];

  return <StatusBadge label={config.label} variant={config.variant} />;
}