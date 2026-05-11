"use client";

import { useMemo, useState } from "react";
import { Recuperacao } from "@/types/recuperacao";
import { buildWhatsAppUrl } from "@/lib/whatsapp/build-whatsapp-url";
import { RecuperacaoStatusBadge } from "./RecuperacaoStatusBadge";
import { RecuperacaoOrigemBadge } from "./RecuperacaoOrigemBadge";
import { WhatsAppActionButton } from "@/components/common/WhatsAppActionButton";
type RecuperacaoTableProps = {
  recuperacoes: Recuperacao[];
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    timeZone: "UTC",
  }).format(new Date(date));
}

export function RecuperacaoTable({
  recuperacoes,
}: RecuperacaoTableProps) {
  const [search, setSearch] = useState("");

  const filteredRecuperacoes = useMemo(() => {
    const normalizedSearch = search.toLowerCase().trim();

    if (!normalizedSearch) {
      return recuperacoes;
    }

    return recuperacoes.filter((recuperacao) => {
      return (
        recuperacao.clienteNome.toLowerCase().includes(normalizedSearch) ||
        recuperacao.procedimentoInteresse
          .toLowerCase()
          .includes(normalizedSearch) ||
        recuperacao.status.toLowerCase().includes(normalizedSearch) ||
        recuperacao.origem.toLowerCase().includes(normalizedSearch) ||
        recuperacao.clienteWhatsapp.includes(normalizedSearch)
      );
    });
  }, [recuperacoes, search]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Lista de recuperação
          </h2>
          <p className="text-sm text-slate-500">
            Acompanhe clientes sem resposta e oportunidades de reagendamento.
          </p>
        </div>

        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Buscar por cliente, procedimento, WhatsApp, origem ou status"
          className="lummeni-search-input"
        />
      </div>

      <div className="lummeni-table-container">
  <table className="lummeni-table">
          <thead className="border-b bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-slate-600">
                Cliente
              </th>
              <th className="px-4 py-3 text-left font-medium text-slate-600">
                Interesse
              </th>
              <th className="px-4 py-3 text-left font-medium text-slate-600">
                Origem
              </th>
              <th className="px-4 py-3 text-left font-medium text-slate-600">
                Última interação
              </th>
              <th className="px-4 py-3 text-left font-medium text-slate-600">
                Sem resposta
              </th>
              <th className="px-4 py-3 text-left font-medium text-slate-600">
                Status
              </th>
              <th className="px-4 py-3 text-left font-medium text-slate-600">
                Observações
              </th>
              <th className="px-4 py-3 text-right font-medium text-slate-600">
                Ações
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredRecuperacoes.map((recuperacao) => {
              const whatsappUrl = buildWhatsAppUrl({
                phone: recuperacao.clienteWhatsapp,
                message: `Olá, ${recuperacao.clienteNome}! Tudo bem? Estou passando para saber se você ainda tem interesse em realizar ${recuperacao.procedimentoInteresse}. Posso te ajudar com horários disponíveis ou tirar alguma dúvida.`,
              });

              return (
                <tr key={recuperacao.id} className="border-b last:border-b-0">
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium text-slate-900">
                        {recuperacao.clienteNome}
                      </p>
                      <p className="text-xs text-slate-500">
                        {recuperacao.clienteWhatsapp}
                      </p>
                    </div>
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    {recuperacao.procedimentoInteresse}
                  </td>

                  <td className="px-4 py-3">
                    <RecuperacaoOrigemBadge origem={recuperacao.origem} />
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    {formatDate(recuperacao.ultimaInteracao)}
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    {recuperacao.diasSemResposta} dias
                  </td>

                  <td className="px-4 py-3">
                    <RecuperacaoStatusBadge status={recuperacao.status} />
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    {recuperacao.observacoes ?? "Sem observações"}
                  </td>

                  <td className="px-4 py-3 text-right">
                    <WhatsAppActionButton
                      phone={recuperacao.clienteWhatsapp}
                      label="Recuperar"
                      message={`Olá, ${recuperacao.clienteNome}! Tudo bem? Estou passando para saber se você ainda tem interesse em realizar ${recuperacao.procedimentoInteresse}. Posso te ajudar com horários disponíveis ou tirar alguma dúvida.`}
                    />
                  </td>
                </tr>
              );
            })}

            {filteredRecuperacoes.length === 0 && (
              <tr>
                <td
                  colSpan={8}
                  className="px-4 py-8 text-center text-sm text-slate-500"
                >
                  Nenhuma oportunidade de recuperação encontrada.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}