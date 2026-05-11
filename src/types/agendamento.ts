export type AgendamentoStatus = "pendente" | "confirmado" | "realizado" | "cancelado";

export type Agendamento = {
  id: string;
  clienteId: string;
  procedimentoId: string;
  data: string;
  horario: string;
  observacao?: string;
  status: AgendamentoStatus;
};
