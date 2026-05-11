export type ClienteStatus =
  | "ativo"
  | "sem_resposta"
  | "em_acompanhamento"
  | "inativo";

export type Cliente = {
  id: string;
  nome: string;
  whatsapp: string;
  email?: string;
  procedimentoInteresse: string;
  ultimoAtendimento?: string;
  proximoRetorno?: string;
  status: ClienteStatus;
  observacoes?: string;
};