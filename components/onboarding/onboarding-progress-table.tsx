"use client";

import { MemberProgress } from "@/types/onboarding";
import { 
  useReactTable, 
  getCoreRowModel, 
  flexRender, 
  getPaginationRowModel,
  ColumnDef 
} from "@tanstack/react-table";
import { useState } from "react";
import { Search, MoreHorizontal, ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";

export function OnboardingProgressTable({ data }: { data: MemberProgress[] }) {
  const [globalFilter, setGlobalFilter] = useState("");

  const columns: ColumnDef<MemberProgress>[] = [
    {
      accessorKey: "memberName",
      header: "Membro",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-xs text-slate-600 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-slate-700">
            {row.original.memberName.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="font-medium text-slate-900 dark:text-slate-100 text-sm">{row.original.memberName}</div>
            <div className="text-xs text-slate-500">{row.original.memberEmail}</div>
          </div>
        </div>
      ),
    },
    {
      accessorKey: "trackName",
      header: "Trilha",
      cell: ({ row }) => <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">{row.original.trackName}</span>
    },
    {
      accessorKey: "progressPercentage",
      header: "Progresso",
      cell: ({ row }) => {
        const p = row.original.progressPercentage;
        return (
          <div className="flex items-center gap-3 w-32">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 w-8">{p}%</span>
            <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div 
                className={cn(
                  "h-full rounded-full transition-all duration-500",
                  p === 100 ? "bg-emerald-500" : p > 0 ? "bg-indigo-500" : "bg-slate-300"
                )} 
                style={{ width: `${p}%` }}
              />
            </div>
          </div>
        );
      }
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const s = row.original.status;
        return (
          <span className={cn(
            "px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider",
            s === 'completed' && "bg-emerald-100 text-emerald-700",
            s === 'in_progress' && "bg-indigo-100 text-indigo-700",
            s === 'not_started' && "bg-slate-100 text-slate-700"
          )}>
            {s === 'completed' ? 'Concluído' : s === 'in_progress' ? 'Em andamento' : 'Não iniciado'}
          </span>
        );
      }
    },
    {
      accessorKey: "startedAt",
      header: "Início",
      cell: ({ row }) => (
        <span className="text-xs text-slate-500 font-medium">
          {row.original.startedAt ? format(new Date(row.original.startedAt), 'dd/MM/yyyy', { locale: ptBR }) : '-'}
        </span>
      )
    },
    {
      id: "actions",
      cell: () => (
        <div className="flex justify-end gap-2">
           <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-md transition-colors title='Enviar lembrete'">
             <Mail className="w-4 h-4" />
           </button>
           <button className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">
             <MoreHorizontal className="w-4 h-4" />
           </button>
        </div>
      )
    }
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: { globalFilter },
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <div>
      <div className="px-6 py-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20">
        <div className="relative max-w-sm w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar membro..."
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 dark:bg-slate-900 text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-6 py-4">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
             {table.getRowModel().rows.map((row) => (
               <tr key={row.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors">
                 {row.getVisibleCells().map((cell) => (
                   <td key={cell.id} className="px-6 py-4">
                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
                   </td>
                 ))}
               </tr>
             ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-800 text-sm text-slate-500 bg-slate-50/50 dark:bg-slate-900/20">
        <div>
           Mostrando pág. {table.getState().pagination.pageIndex + 1} de {table.getPageCount() || 1}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="p-1 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-md disabled:opacity-50 shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="p-1 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-md disabled:opacity-50 shadow-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
