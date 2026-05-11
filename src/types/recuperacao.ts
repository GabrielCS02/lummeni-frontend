export type RecuperacaoStatus = "sem_resposta" | "interessada" | "aguardando" | "recuperada" | "perdida";

export type RecuperacaoCliente = {
  id: string;
  clienteId: string;
  procedimentoInteresse?: string;
  motivo: string;
  status: RecuperacaoStatus;
  ultimaTentativaContato?: string;
};
