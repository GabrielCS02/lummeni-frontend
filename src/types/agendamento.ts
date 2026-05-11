export type AgendamentoStatus =
  | "pendente"
  | "confirmado"
  | "realizado"
  | "cancelado";

export type Agendamento = {
  id: string;
  clienteNome: string;
  clienteWhatsapp: string;
  procedimentoNome: string;
  data: string;
  horario: string;
  status: AgendamentoStatus;
  observacoes?: string;
};