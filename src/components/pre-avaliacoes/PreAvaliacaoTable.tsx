"use client";

import { useMemo, useState } from "react";
import { PreAvaliacao } from "@/types/pre-avaliacao";
import { buildWhatsAppUrl } from "@/lib/whatsapp/build-whatsapp-url";
import { PreAvaliacaoStatusBadge } from "./PreAvaliacaoStatusBadge";
import { WhatsAppActionButton } from "@/components/common/WhatsAppActionButton";

type PreAvaliacaoTableProps = {
  preAvaliacoes: PreAvaliacao[];
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    timeZone: "UTC",
  }).format(new Date(date));
}

export function PreAvaliacaoTable({
  preAvaliacoes,
}: PreAvaliacaoTableProps) {
  const [search, setSearch] = useState("");

  const filteredPreAvaliacoes = useMemo(() => {
    const normalizedSearch = search.toLowerCase().trim();

    if (!normalizedSearch) {
      return preAvaliacoes;
    }

    return preAvaliacoes.filter((preAvaliacao) => {
      return (
        preAvaliacao.clienteNome.toLowerCase().includes(normalizedSearch) ||
        preAvaliacao.clienteWhatsapp.includes(normalizedSearch) ||
        preAvaliacao.procedimentoInteresse
          .toLowerCase()
          .includes(normalizedSearch) ||
        preAvaliacao.status.toLowerCase().includes(normalizedSearch)
      );
    });
  }, [preAvaliacoes, search]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Lista de pré-avaliações
          </h2>
          <p className="text-sm text-slate-500">
            Acompanhe clientes interessadas antes do agendamento.
          </p>
        </div>

        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Buscar por cliente, WhatsApp, procedimento ou status"
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
                Procedimento
              </th>
              <th className="px-4 py-3 text-left font-medium text-slate-600">
                Objetivo
              </th>
              <th className="px-4 py-3 text-left font-medium text-slate-600">
                Contraindicação
              </th>
              <th className="px-4 py-3 text-left font-medium text-slate-600">
                Solicitação
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
            {filteredPreAvaliacoes.map((preAvaliacao) => {
              const whatsappUrl = buildWhatsAppUrl({
                phone: preAvaliacao.clienteWhatsapp,
                message: `Olá, ${preAvaliacao.clienteNome}! Tudo bem? Estou entrando em contato sobre sua pré-avaliação para ${preAvaliacao.procedimentoInteresse}. Gostaria de confirmar algumas informações para seguirmos com segurança.`,
              });

              return (
                <tr
                  key={preAvaliacao.id}
                  className="border-b last:border-b-0"
                >
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium text-slate-900">
                        {preAvaliacao.clienteNome}
                      </p>
                      <p className="text-xs text-slate-500">
                        {preAvaliacao.clienteWhatsapp}
                      </p>
                    </div>
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    {preAvaliacao.procedimentoInteresse}
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    <p className="max-w-xs text-xs">
                      {preAvaliacao.objetivo}
                    </p>
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    {preAvaliacao.possuiContraindicacao ? (
                      <p className="max-w-xs text-xs">
                        {preAvaliacao.contraindicacoes ??
                          "Possui contraindicação informada"}
                      </p>
                    ) : (
                      "Não"
                    )}
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    {formatDate(preAvaliacao.dataSolicitacao)}
                  </td>

                  <td className="px-4 py-3">
                    <PreAvaliacaoStatusBadge status={preAvaliacao.status} />
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    <p className="max-w-xs text-xs">
                      {preAvaliacao.observacoes ?? "Sem observações"}
                    </p>
                  </td>

                  <td className="px-4 py-3 text-right">
                    <WhatsAppActionButton phone={preAvaliacao.clienteWhatsapp}
                    message={`Olá, ${preAvaliacao.clienteNome}! 
                    Tudo bem? Estou entrando em contato pelo Lummeni para falar sobre seu interesse em 
                    ${preAvaliacao.procedimentoInteresse}.`}/>
                  </td>
                </tr>
              );
            })}

            {filteredPreAvaliacoes.length === 0 && (
              <tr>
                <td
                  colSpan={8}
                  className="px-4 py-8 text-center text-sm text-slate-500"
                >
                  Nenhuma pré-avaliação encontrada.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}