"use client";

import { useMemo, useState } from "react";
import { Cliente } from "@/types/cliente";
import { buildWhatsAppUrl } from "@/lib/whatsapp/build-whatsapp-url";
import { ClienteStatusBadge } from "./ClienteStatusBadge";
import { WhatsAppActionButton } from "@/components/common/WhatsAppActionButton";
type ClienteTableProps = {
  clientes: Cliente[];
};

export function ClienteTable({ clientes }: ClienteTableProps) {
  const [search, setSearch] = useState("");

  const filteredClientes = useMemo(() => {
    const normalizedSearch = search.toLowerCase().trim();

    if (!normalizedSearch) {
      return clientes;
    }

    return clientes.filter((cliente) => {
      return (
        cliente.nome.toLowerCase().includes(normalizedSearch) ||
        cliente.whatsapp.includes(normalizedSearch) ||
        cliente.procedimentoInteresse.toLowerCase().includes(normalizedSearch)
      );
    });
  }, [clientes, search]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Lista de clientes
          </h2>
          <p className="text-sm text-slate-500">
            Consulte clientes cadastradas e abra o contato pelo WhatsApp.
          </p>
        </div>

        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Buscar por nome, WhatsApp ou procedimento"
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
                WhatsApp
              </th>
              <th className="px-4 py-3 text-left font-medium text-slate-600">
                Interesse
              </th>
              <th className="px-4 py-3 text-left font-medium text-slate-600">
                Último atendimento
              </th>
              <th className="px-4 py-3 text-left font-medium text-slate-600">
                Retorno
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
            {filteredClientes.map((cliente) => {
              const whatsappUrl = buildWhatsAppUrl({
                phone: cliente.whatsapp,
                message: `Olá, ${cliente.nome}! Tudo bem? Estou entrando em contato pelo Lummeni para falar sobre seu interesse em ${cliente.procedimentoInteresse}.`,
              });

              return (
                <tr key={cliente.id} className="border-b last:border-b-0">
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium text-slate-900">
                        {cliente.nome}
                      </p>

                      {cliente.email && (
                        <p className="text-xs text-slate-500">
                          {cliente.email}
                        </p>
                      )}
                    </div>
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    {cliente.whatsapp}
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    {cliente.procedimentoInteresse}
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    {cliente.ultimoAtendimento ?? "Sem atendimento"}
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    {cliente.proximoRetorno ?? "Sem retorno"}
                  </td>

                  <td className="px-4 py-3">
                    <ClienteStatusBadge status={cliente.status} />
                  </td>

                  <td className="px-4 py-3 text-right">
                    <WhatsAppActionButton
                      phone={cliente.whatsapp}
                      message={`Olá, ${cliente.nome}! Tudo bem? Estou entrando em contato pelo Lummeni para falar sobre seu interesse em ${cliente.procedimentoInteresse}.`}
                    />
                  </td>
                </tr>
              );
            })}

            {filteredClientes.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-8 text-center text-sm text-slate-500"
                >
                  Nenhum cliente encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}