export type Atendimento = {
  id: string;
  clienteId: string;
  procedimentoId: string;
  dataAtendimento: string;
  observacoes?: string;
  dataPrevistaRetorno?: string;
  cuidadosEnviados: boolean;
};
