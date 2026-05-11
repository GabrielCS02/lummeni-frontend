export type RetornoStatus = "pendente" | "avisado" | "agendado" | "concluido" | "atrasado";

export type Retorno = {
  id: string;
  clienteId: string;
  atendimentoId?: string;
  procedimentoId: string;
  dataPrevista: string;
  status: RetornoStatus;
  avisadoEm?: string;
};
