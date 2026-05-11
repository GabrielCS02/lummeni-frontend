export type PreAvaliacaoStatus =
  | "nova"
  | "em_analise"
  | "aprovada"
  | "recusada"
  | "aguardando_resposta";

export type PreAvaliacao = {
  id: string;
  clienteNome: string;
  clienteWhatsapp: string;
  procedimentoInteresse: string;
  objetivo: string;
  possuiContraindicacao: boolean;
  contraindicacoes?: string;
  dataSolicitacao: string;
  status: PreAvaliacaoStatus;
  observacoes?: string;
};