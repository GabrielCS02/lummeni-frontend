"use client";

import { useMemo, useState } from "react";
import { Agendamento } from "@/types/agendamento";
import { buildWhatsAppUrl } from "@/lib/whatsapp/build-whatsapp-url";
import { AgendamentoStatusBadge } from "./AgendamentoStatusBadge";
import { WhatsAppActionButton } from "@/components/common/WhatsAppActionButton";

type AgendamentoTableProps = {
  agendamentos: Agendamento[];
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    timeZone: "UTC",
  }).format(new Date(date));
}

export function AgendamentoTable({
  agendamentos,
}: AgendamentoTableProps) {
  const [search, setSearch] = useState("");

  const filteredAgendamentos = useMemo(() => {
    const normalizedSearch = search.toLowerCase().trim();

    if (!normalizedSearch) {
      return agendamentos;
    }

    return agendamentos.filter((agendamento) => {
      return (
        agendamento.clienteNome.toLowerCase().includes(normalizedSearch) ||
        agendamento.procedimentoNome.toLowerCase().includes(normalizedSearch) ||
        agendamento.status.toLowerCase().includes(normalizedSearch) ||
        agendamento.clienteWhatsapp.includes(normalizedSearch)
      );
    });
  }, [agendamentos, search]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Lista de agendamentos
          </h2>
          <p className="text-sm text-slate-500">
            Consulte horários, status e envie confirmações pelo WhatsApp.
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
                Horário
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
            {filteredAgendamentos.map((agendamento) => {
              const whatsappUrl = buildWhatsAppUrl({
                phone: agendamento.clienteWhatsapp,
                message: `Olá, ${agendamento.clienteNome}! Tudo bem? Passando para confirmar seu agendamento de ${agendamento.procedimentoNome} no dia ${formatDate(agendamento.data)} às ${agendamento.horario}.`,
              });

              return (
                <tr key={agendamento.id} className="border-b last:border-b-0">
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium text-slate-900">
                        {agendamento.clienteNome}
                      </p>
                      <p className="text-xs text-slate-500">
                        {agendamento.clienteWhatsapp}
                      </p>
                    </div>
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    {agendamento.procedimentoNome}
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    {formatDate(agendamento.data)}
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    {agendamento.horario}
                  </td>

                  <td className="px-4 py-3">
                    <AgendamentoStatusBadge status={agendamento.status} />
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    {agendamento.observacoes ?? "Sem observações"}
                  </td>

                  <td className="px-4 py-3 text-right">
                    <WhatsAppActionButton
                      phone={agendamento.clienteWhatsapp}
                      label="Confirmar"
                      message={`Olá, ${agendamento.clienteNome}! Tudo bem? Passando para confirmar seu agendamento de ${agendamento.procedimentoNome} no dia ${formatDate(agendamento.data)} às ${agendamento.horario}.`}
                    />
                  </td>
                </tr>
              );
            })}

            {filteredAgendamentos.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-8 text-center text-sm text-slate-500"
                >
                  Nenhum agendamento encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}