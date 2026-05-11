import { Procedimento } from "@/types/procedimento";

export const mockProcedimentos: Procedimento[] = [
  {
    id: "1",
    nome: "Limpeza de pele",
    descricao: "Procedimento para remoção de impurezas, controle de oleosidade e renovação da pele.",
    duracaoMinutos: 60,
    valor: 120,
    necessitaRetorno: true,
    diasParaRetorno: 30,
    cuidadosPosProcedimento:
      "Evitar exposição solar, usar protetor solar e não aplicar ácidos nas primeiras 48 horas.",
    status: "ativo",
  },
  {
    id: "2",
    nome: "Design de sobrancelhas",
    descricao: "Modelagem das sobrancelhas respeitando o formato do rosto.",
    duracaoMinutos: 40,
    valor: 50,
    necessitaRetorno: true,
    diasParaRetorno: 20,
    cuidadosPosProcedimento:
      "Evitar maquiagem na região nas primeiras horas e não esfregar a pele.",
    status: "ativo",
  },
  {
    id: "3",
    nome: "Peeling facial",
    descricao: "Tratamento para renovação celular, manchas superficiais e textura da pele.",
    duracaoMinutos: 50,
    valor: 180,
    necessitaRetorno: true,
    diasParaRetorno: 15,
    cuidadosPosProcedimento:
      "Usar protetor solar diariamente, evitar sol e não remover descamações manualmente.",
    status: "ativo",
  },
  {
    id: "4",
    nome: "Microagulhamento",
    descricao: "Procedimento para estímulo de colágeno e melhora da textura da pele.",
    duracaoMinutos: 75,
    valor: 250,
    necessitaRetorno: true,
    diasParaRetorno: 30,
    cuidadosPosProcedimento:
      "Evitar exposição solar, maquiagem e produtos irritantes nas primeiras 24 a 48 horas.",
    status: "ativo",
  },
  {
    id: "5",
    nome: "Hidratação facial",
    descricao: "Tratamento para reposição de hidratação e melhora do viço da pele.",
    duracaoMinutos: 45,
    valor: 100,
    necessitaRetorno: false,
    cuidadosPosProcedimento:
      "Manter hidratação da pele e usar protetor solar diariamente.",
    status: "inativo",
  },
];