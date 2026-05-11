export type RetornoStatus =
  | "pendente"
  | "avisado"
  | "agendado"
  | "concluido"
  | "atrasado";

export type Retorno = {
  id: string;
  clienteNome: string;
  clienteWhatsapp: string;
  procedimentoNome: string;
  dataAtendimento: string;
  dataPrevistaRetorno: string;
  status: RetornoStatus;
  observacoes?: string;
};