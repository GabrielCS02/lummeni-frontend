export type Procedimento = {
  id: string;
  nome: string;
  descricao?: string;
  duracaoMinutos?: number;
  valor?: number;
  necessitaRetorno: boolean;
  diasParaRetorno?: number;
  cuidadosPosProcedimento?: string;
  ativo: boolean;
};
