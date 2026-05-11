"use client";

import { useMemo, useState } from "react";
import { Atendimento } from "@/types/atendimento";
import { buildWhatsAppUrl } from "@/lib/whatsapp/build-whatsapp-url";
import { AtendimentoStatusBadge } from "./AtendimentoStatusBadge";
import { WhatsAppActionButton } from "@/components/common/WhatsAppActionButton";

type AtendimentoTableProps = {
  atendimentos: Atendimento[];
};

function formatDate(date?: string) {
  if (!date) {
    return "Não informado";
  }

  return new Intl.DateTimeFormat("pt-BR", {
    timeZone: "UTC",
  }).format(new Date(date));
}

export function AtendimentoTable({ atendimentos }: AtendimentoTableProps) {
  const [search, setSearch] = useState("");

  const filteredAtendimentos = useMemo(() => {
    const normalizedSearch = search.toLowerCase().trim();

    if (!normalizedSearch) {
      return atendimentos;
    }

    return atendimentos.filter((atendimento) => {
      return (
        atendimento.clienteNome.toLowerCase().includes(normalizedSearch) ||
        atendimento.procedimentoNome.toLowerCase().includes(normalizedSearch) ||
        atendimento.status.toLowerCase().includes(normalizedSearch) ||
        atendimento.clienteWhatsapp.includes(normalizedSearch)
      );
    });
  }, [atendimentos, search]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Lista de atendimentos
          </h2>
          <p className="text-sm text-slate-500">
            Consulte os procedimentos realizados e envie cuidados pelo WhatsApp.
          </p>
        </div>

        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Buscar por cliente, procedimento, WhatsApp ou status"
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
                Data
              </th>
              <th className="px-4 py-3 text-left font-medium text-slate-600">
                Retorno previsto
              </th>
              <th className="px-4 py-3 text-left font-medium text-slate-600">
                Cuidados
              </th>
              <th className="px-4 py-3 text-left font-medium text-slate-600">
                Status
              </th>
              <th className="px-4 py-3 text-right font-medium text-slate-600">
                Ações
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredAtendimentos.map((atendimento) => {
              const whatsappUrl = buildWhatsAppUrl({
                phone: atendimento.clienteWhatsapp,
                message: `Olá, ${atendimento.clienteNome}! Tudo bem? Seguem os cuidados após o procedimento de ${atendimento.procedimentoNome}: evitar exposição solar, usar protetor solar e seguir as orientações passadas no atendimento. Qualquer dúvida, estou à disposição.`,
              });

              return (
                <tr key={atendimento.id} className="border-b last:border-b-0">
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium text-slate-900">
                        {atendimento.clienteNome}
                      </p>
                      <p className="text-xs text-slate-500">
                        {atendimento.clienteWhatsapp}
                      </p>
                    </div>
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    <div>
                      <p>{atendimento.procedimentoNome}</p>
                      {atendimento.produtosUtilizados && (
                        <p className="mt-1 max-w-xs text-xs text-slate-500">
                          Produtos: {atendimento.produtosUtilizados}
                        </p>
                      )}
                    </div>
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    {formatDate(atendimento.dataAtendimento)}
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    {formatDate(atendimento.dataPrevistaRetorno)}
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    {atendimento.cuidadosEnviados ? "Enviados" : "Pendente"}
                  </td>

                  <td className="px-4 py-3">
                    <AtendimentoStatusBadge status={atendimento.status} />
                  </td>

                  <td className="px-4 py-3 text-right">
                    <WhatsAppActionButton
                      phone={atendimento.clienteWhatsapp}
                      label="Enviar cuidados"
                      message={`Olá, ${atendimento.clienteNome}! Tudo bem? Seguem os cuidados após o procedimento de ${atendimento.procedimentoNome}: evitar exposição solar, usar protetor solar e seguir as orientações passadas no atendimento. Qualquer dúvida, estou à disposição.`}
                    />
                  </td>
                </tr>
              );
            })}

            {filteredAtendimentos.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-8 text-center text-sm text-slate-500"
                >
                  Nenhum atendimento encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}