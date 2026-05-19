"use client";

import { useState } from "react";
import Link from "next/link";
import { Member } from "@/types/member";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Eye, 
  Edit, 
  Trash2,
  ChevronLeft,
  ChevronRight,
  Plus
} from "lucide-react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
  ColumnDef,
} from "@tanstack/react-table";

interface MemberListProps {
  initialData: Member[];
}

export function MemberList({ initialData }: MemberListProps) {
  const [data, setData] = useState<Member[]>(initialData);
  const [globalFilter, setGlobalFilter] = useState("");

  const columns: ColumnDef<Member>[] = [
    {
      accessorKey: "fullName",
      header: "Membro",
      cell: ({ row }) => {
        const member = row.original;
        return (
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300">
               {member.fullName.substring(0, 2).toUpperCase()}
             </div>
             <div>
               <div className="font-medium text-slate-900 dark:text-slate-100">{member.fullName}</div>
               <div className="text-xs text-slate-500">{member.email}</div>
             </div>
          </div>
        );
      },
      filterFn: "includesString",
    },
    {
      accessorKey: "cpf",
      header: "CPF",
    },
    {
      accessorKey: "phone",
      header: "Telefone",
    },
    {
      accessorKey: "city",
      header: "Cidade/UF",
      cell: ({ row }) => <span>{row.original.city}/{row.original.state}</span>
    },
    {
      accessorKey: "memberType",
      header: "Tipo/Papel",
      cell: ({ row }) => {
        const type = row.original.memberType || "Indefinido";
        const roles = row.original.roles || [];
        return (
          <div className="flex flex-col gap-1.5">
            <span className="font-medium text-slate-800 dark:text-slate-200 text-xs">{type}</span>
            {roles.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {roles.slice(0, 2).map((role) => (
                  <span key={role} className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 capitalize tracking-wide">
                    {role.replace('_', ' ')}
                  </span>
                ))}
                {roles.length > 2 && (
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                    +{roles.length - 2}
                  </span>
                )}
              </div>
            )}
          </div>
        );
      }
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.original.status;
        return (
          <span className={cn(
            "px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
            status === 'Ativo' && "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
            status === 'Novo cadastro' && "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
            status === 'Inativo' && "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400",
            status === 'Em análise' && "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
            status === 'Aguardando documentação' && "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400",
            status === 'Bloqueado' && "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-400"
          )}>
            {status}
          </span>
        );
      }
    },
    {
      id: "actions",
      cell: ({ row }) => {
        return (
          <div className="flex justify-end gap-2">
            <Link href={`/dashboard/members/${row.original.id}`} className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors">
              <Eye className="w-4 h-4" />
            </Link>
            <button className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors">
              <Edit className="w-4 h-4" />
            </button>
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex items-center gap-2 flex-1">
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por nome, email ou CPF..."
              value={globalFilter ?? ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
            <Filter className="w-4 h-4 text-slate-500" />
            Filtros
          </button>
        </div>
        <Link href="/dashboard/members/new" className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors">
          <Plus className="w-4 h-4" />
          Novo Membro
        </Link>
      </div>

      <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 dark:bg-slate-900 text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="px-6 py-4">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors">
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-6 py-4">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length} className="px-6 py-12 text-center text-slate-500">
                    Nenhum membro encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* Paginação */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-t border-slate-200 dark:border-slate-800 text-sm text-slate-500">
          <div>
            Mostrando {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} até {Math.min((table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize, data.length)} de {data.length} membros
          </div>
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="p-1 border border-slate-200 dark:border-slate-800 rounded-md disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="p-1 border border-slate-200 dark:border-slate-800 rounded-md disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
