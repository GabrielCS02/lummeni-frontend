export type PreAvaliacaoStatus = "nova" | "em_analise" | "aprovada" | "recusada" | "sem_resposta";

export type PreAvaliacao = {
  id: string;
  clienteId?: string;
  nomeCliente: string;
  whatsapp: string;
  procedimentoInteresse: string;
  queixaObjetivo?: string;
  contraindicacoes?: string;
  observacoes?: string;
  status: PreAvaliacaoStatus;
};
