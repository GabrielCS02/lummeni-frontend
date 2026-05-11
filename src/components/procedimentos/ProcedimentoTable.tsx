"use client";

import { useMemo, useState } from "react";
import { Procedimento } from "@/types/procedimento";
import { ProcedimentoStatusBadge } from "./ProcedimentoStatusBadge";

type ProcedimentoTableProps = {
  procedimentos: Procedimento[];
};

function formatCurrency(value?: number) {
  if (!value) {
    return "Não informado";
  }

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function ProcedimentoTable({
  procedimentos,
}: ProcedimentoTableProps) {
  const [search, setSearch] = useState("");

  const filteredProcedimentos = useMemo(() => {
    const normalizedSearch = search.toLowerCase().trim();

    if (!normalizedSearch) {
      return procedimentos;
    }

    return procedimentos.filter((procedimento) => {
      return (
        procedimento.nome.toLowerCase().includes(normalizedSearch) ||
        procedimento.descricao.toLowerCase().includes(normalizedSearch)
      );
    });
  }, [procedimentos, search]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Lista de procedimentos
          </h2>
          <p className="text-sm text-slate-500">
            Consulte os procedimentos disponíveis para atendimento.
          </p>
        </div>

        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Buscar por nome ou descrição"
          className="lummeni-search-input"
        />
      </div>

      <div className="lummeni-table-container">
  <table className="lummeni-table">
          <thead className="border-b bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-slate-600">
                Procedimento
              </th>
              <th className="px-4 py-3 text-left font-medium text-slate-600">
                Duração
              </th>
              <th className="px-4 py-3 text-left font-medium text-slate-600">
                Valor
              </th>
              <th className="px-4 py-3 text-left font-medium text-slate-600">
                Retorno
              </th>
              <th className="px-4 py-3 text-left font-medium text-slate-600">
                Status
              </th>
              <th className="px-4 py-3 text-left font-medium text-slate-600">
                Cuidados
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredProcedimentos.map((procedimento) => (
              <tr key={procedimento.id} className="border-b last:border-b-0">
                <td className="px-4 py-3">
                  <div>
                    <p className="font-medium text-slate-900">
                      {procedimento.nome}
                    </p>
                    <p className="text-xs text-slate-500">
                      {procedimento.descricao}
                    </p>
                  </div>
                </td>

                <td className="px-4 py-3 text-slate-600">
                  {procedimento.duracaoMinutos} min
                </td>

                <td className="px-4 py-3 text-slate-600">
                  {formatCurrency(procedimento.valor)}
                </td>

                <td className="px-4 py-3 text-slate-600">
                  {procedimento.necessitaRetorno
                    ? `${procedimento.diasParaRetorno} dias`
                    : "Não necessita"}
                </td>

                <td className="px-4 py-3">
                  <ProcedimentoStatusBadge status={procedimento.status} />
                </td>

                <td className="px-4 py-3 text-slate-600">
                  <p className="max-w-md text-xs">
                    {procedimento.cuidadosPosProcedimento}
                  </p>
                </td>
              </tr>
            ))}

            {filteredProcedimentos.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-8 text-center text-sm text-slate-500"
                >
                  Nenhum procedimento encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}