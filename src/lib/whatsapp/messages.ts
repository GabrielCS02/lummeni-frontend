export const whatsappMessages = {
  contatoInicial: (nome: string) =>
    `Olá, ${nome}! Tudo bem? Estou entrando em contato pelo seu atendimento no Lummeni.`,

  confirmacaoAgendamento: (nome: string, procedimento: string, data: string, horario: string) =>
    `Olá, ${nome}! Seu procedimento de ${procedimento} está confirmado para ${data} às ${horario}. Qualquer dúvida, estou à disposição.`,

  retorno: (nome: string, procedimento: string) =>
    `Olá, ${nome}! Tudo bem? Está chegando o período ideal para o retorno do procedimento ${procedimento}. Gostaria de verificar sua disponibilidade para agendarmos?`,

  recuperacao: (nome: string, procedimento: string) =>
    `Olá, ${nome}! Tudo bem? Vi que você demonstrou interesse em ${procedimento}. Posso te ajudar com alguma dúvida ou verificar um melhor horário para você?`,
};
