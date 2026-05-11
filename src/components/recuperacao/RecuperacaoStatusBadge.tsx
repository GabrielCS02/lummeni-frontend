import { StatusBadge, StatusBadgeVariant } from "@/components/common/StatusBadge";
import { RecuperacaoStatus } from "@/types/recuperacao";

type RecuperacaoStatusBadgeProps = {
  status: RecuperacaoStatus;
};

const statusConfig: Record<
  RecuperacaoStatus,
  {
    label: string;
    variant: StatusBadgeVariant;
  }
> = {
  sem_resposta: {
    label: "Sem resposta",
    variant: "warning",
  },
  aguardando_retorno: {
    label: "Aguardando retorno",
    variant: "info",
  },
  interessada: {
    label: "Interessada",
    variant: "accent",
  },
  recuperada: {
    label: "Recuperada",
    variant: "success",
  },
  perdida: {
    label: "Perdida",
    variant: "neutral",
  },
};

export function RecuperacaoStatusBadge({
  status,
}: RecuperacaoStatusBadgeProps) {
  const config = statusConfig[status];

  return <StatusBadge label={config.label} variant={config.variant} />;
}