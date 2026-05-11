export type AtendimentoStatus =
  | "realizado"
  | "retorno_pendente"
  | "retorno_agendado"
  | "finalizado";

export type Atendimento = {
  id: string;
  clienteNome: string;
  clienteWhatsapp: string;
  procedimentoNome: string;
  dataAtendimento: string;
  profissionalResponsavel?: string;
  produtosUtilizados?: string;
  observacoes?: string;
  cuidadosEnviados: boolean;
  dataPrevistaRetorno?: string;
  status: AtendimentoStatus;
};