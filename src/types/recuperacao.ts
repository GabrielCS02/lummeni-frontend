export type RecuperacaoStatus =
  | "sem_resposta"
  | "aguardando_retorno"
  | "interessada"
  | "recuperada"
  | "perdida";

export type RecuperacaoOrigem =
  | "pre_avaliacao"
  | "agendamento_cancelado"
  | "cliente_antiga"
  | "orcamento_enviado"
  | "pos_atendimento";

export type Recuperacao = {
  id: string;
  clienteNome: string;
  clienteWhatsapp: string;
  procedimentoInteresse: string;
  origem: RecuperacaoOrigem;
  ultimaInteracao: string;
  diasSemResposta: number;
  status: RecuperacaoStatus;
  observacoes?: string;
};