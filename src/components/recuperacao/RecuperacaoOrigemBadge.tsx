import { StatusBadge, StatusBadgeVariant } from "@/components/common/StatusBadge";
import { RecuperacaoOrigem } from "@/types/recuperacao";

type RecuperacaoOrigemBadgeProps = {
  origem: RecuperacaoOrigem;
};

const origemConfig: Record<
  RecuperacaoOrigem,
  {
    label: string;
    variant: StatusBadgeVariant;
  }
> = {
  pre_avaliacao: {
    label: "Pré-avaliação",
    variant: "accent",
  },
  agendamento_cancelado: {
    label: "Agendamento cancelado",
    variant: "warning",
  },
  cliente_antiga: {
    label: "Cliente antiga",
    variant: "neutral",
  },
  orcamento_enviado: {
    label: "Orçamento enviado",
    variant: "info",
  },
  pos_atendimento: {
    label: "Pós-atendimento",
    variant: "success",
  },
};

export function RecuperacaoOrigemBadge({
  origem,
}: RecuperacaoOrigemBadgeProps) {
  const config = origemConfig[origem];

  return <StatusBadge label={config.label} variant={config.variant} />;
}