import { StatusBadge, StatusBadgeVariant } from "@/components/common/StatusBadge";
import { ProcedimentoStatus } from "@/types/procedimento";

type ProcedimentoStatusBadgeProps = {
  status: ProcedimentoStatus;
};

const statusConfig: Record<
  ProcedimentoStatus,
  {
    label: string;
    variant: StatusBadgeVariant;
  }
> = {
  ativo: {
    label: "Ativo",
    variant: "success",
  },
  inativo: {
    label: "Inativo",
    variant: "neutral",
  },
};

export function ProcedimentoStatusBadge({
  status,
}: ProcedimentoStatusBadgeProps) {
  const config = statusConfig[status];

  return <StatusBadge label={config.label} variant={config.variant} />;
}