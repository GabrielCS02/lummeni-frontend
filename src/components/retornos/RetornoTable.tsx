"use client";

import { useMemo, useState } from "react";
import { Retorno } from "@/types/retorno";
import { buildWhatsAppUrl } from "@/lib/whatsapp/build-whatsapp-url";
import { RetornoStatusBadge } from "./RetornoStatusBadge";
import { WhatsAppActionButton } from "@/components/common/WhatsAppActionButton";
type RetornoTableProps = {
  retornos: Retorno[];
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    timeZone: "UTC",
  }).format(new Date(date));
}

export function RetornoTable({ retornos }: RetornoTableProps) {
  const [search, setSearch] = useState("");

  const filteredRetornos = useMemo(() => {
    const normalizedSearch = search.toLowerCase().trim();

    if (!normalizedSearch) {
      return retornos;
    }

    return retornos.filter((retorno) => {
      return (
        retorno.clienteNome.toLowerCase().includes(normalizedSearch) ||
        retorno.procedimentoNome.toLowerCase().includes(normalizedSearch) ||
        retorno.status.toLowerCase().includes(normalizedSearch) ||
        retorno.clienteWhatsapp.includes(normalizedSearch)
      );
    });
  }, [retornos, search]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Lista de retornos
          </h2>
          <p className="text-sm text-slate-500">
            Acompanhe retornos previstos, atrasados e clientes que precisam ser avisadas.
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
                Atendimento
              </th>
              <th className="px-4 py-3 text-left font-medium text-slate-600">
                Retorno previsto
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
            {filteredRetornos.map((retorno) => {
              const whatsappUrl = buildWhatsAppUrl({
                phone: retorno.clienteWhatsapp,
                message: `Olá, ${retorno.clienteNome}! Tudo bem? Estou entrando em contato para lembrar sobre o retorno do procedimento de ${retorno.procedimentoNome}, realizado em ${formatDate(retorno.dataAtendimento)}. Gostaria de verificar sua disponibilidade para agendarmos?`,
              });

              return (
                <tr key={retorno.id} className="border-b last:border-b-0">
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium text-slate-900">
                        {retorno.clienteNome}
                      </p>
                      <p className="text-xs text-slate-500">
                        {retorno.clienteWhatsapp}
                      </p>
                    </div>
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    {retorno.procedimentoNome}
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    {formatDate(retorno.dataAtendimento)}
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    {formatDate(retorno.dataPrevistaRetorno)}
                  </td>

                  <td className="px-4 py-3">
                    <RetornoStatusBadge status={retorno.status} />
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    {retorno.observacoes ?? "Sem observações"}
                  </td>

                  <td className="px-4 py-3 text-right">
                    <WhatsAppActionButton
                    phone={retorno.clienteWhatsapp}
                    label="Avisar retorno"
                    message={`Olá, ${retorno.clienteNome}! Tudo bem? Estou entrando em contato para lembrar sobre o retorno do procedimento de ${retorno.procedimentoNome}, realizado em ${formatDate(retorno.dataAtendimento)}. Gostaria de verificar sua disponibilidade para agendarmos?`}
                  />
                  </td>
                </tr>
              );
            })}

            {filteredRetornos.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-8 text-center text-sm text-slate-500"
                >
                  Nenhum retorno encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}