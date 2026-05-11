export type ClienteStatus = "ativo" | "sem_resposta" | "inativo";

export type Cliente = {
  id: string;
  nome: string;
  whatsapp: string;
  observacao?: string;
  status: ClienteStatus;
  criadoEm: string;
};
