export const dashboardMetrics = [
  {
    title: "Clientes cadastrados",
    value: 38,
    description: "Total de clientes no sistema",
  },
  {
    title: "Agendamentos hoje",
    value: 4,
    description: "Procedimentos marcados para hoje",
  },
  {
    title: "Retornos pendentes",
    value: 7,
    description: "Clientes que precisam de acompanhamento",
  },
  {
    title: "Clientes sem resposta",
    value: 5,
    description: "Oportunidades para recuperação",
  },
  {
    title: "Atendimentos no mês",
    value: 21,
    description: "Procedimentos realizados neste mês",
  },
  {
    title: "Pré-avaliações abertas",
    value: 6,
    description: "Clientes aguardando análise",
  },
];

export const todayAppointments = [
  {
    id: "1",
    cliente: "Mariana Souza",
    procedimento: "Limpeza de pele",
    horario: "09:00",
    status: "Confirmado",
  },
  {
    id: "2",
    cliente: "Camila Ferreira",
    procedimento: "Design de sobrancelhas",
    horario: "11:30",
    status: "Pendente",
  },
  {
    id: "3",
    cliente: "Juliana Lima",
    procedimento: "Peeling facial",
    horario: "14:00",
    status: "Confirmado",
  },
  {
    id: "4",
    cliente: "Renata Alves",
    procedimento: "Microagulhamento",
    horario: "16:30",
    status: "Confirmado",
  },
];

export const pendingReturns = [
  {
    id: "1",
    cliente: "Ana Paula",
    procedimento: "Limpeza de pele",
    dataRetorno: "Hoje",
    status: "Pendente",
  },
  {
    id: "2",
    cliente: "Beatriz Martins",
    procedimento: "Peeling facial",
    dataRetorno: "Amanhã",
    status: "Avisar",
  },
  {
    id: "3",
    cliente: "Fernanda Rocha",
    procedimento: "Microagulhamento",
    dataRetorno: "Em atraso",
    status: "Atrasado",
  },
];

export const unansweredClients = [
  {
    id: "1",
    cliente: "Larissa Gomes",
    interesse: "Limpeza de pele",
    ultimaInteracao: "Há 2 dias",
  },
  {
    id: "2",
    cliente: "Patrícia Mendes",
    interesse: "Peeling facial",
    ultimaInteracao: "Há 4 dias",
  },
  {
    id: "3",
    cliente: "Bruna Costa",
    interesse: "Design de sobrancelhas",
    ultimaInteracao: "Há 6 dias",
  },
];

export const latestPreEvaluations = [
  {
    id: "1",
    cliente: "Sabrina Lopes",
    procedimento: "Microagulhamento",
    status: "Nova",
  },
  {
    id: "2",
    cliente: "Letícia Ramos",
    procedimento: "Limpeza de pele",
    status: "Em análise",
  },
  {
    id: "3",
    cliente: "Aline Nunes",
    procedimento: "Peeling facial",
    status: "Aguardando resposta",
  },
];