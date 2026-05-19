import { Form } from "@/types/forms";
import { Copy, Eye, BarChart2, MoreHorizontal, Settings } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  form: Form;
}

export function FormCard({ form }: Props) {
  return (
    <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:shadow-md transition-shadow flex flex-col group">
      <div className="flex items-start justify-between mb-3">
        <span className={cn(
           "px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-md border",
           form.status === 'Publicado' ? "bg-emerald-50 text-emerald-700 border-emerald-200/50" :
           form.status === 'Rascunho' ? "bg-slate-100 text-slate-700 border-slate-200/50" :
           "bg-amber-50 text-amber-700 border-amber-200/50"
        )}>
          {form.status}
        </span>
        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 p-1 rounded hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 mb-4">
        <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-1 line-clamp-2">
          <Link href={`/dashboard/forms/${form.id}`} className="hover:text-indigo-600 transition-colors">{form.title}</Link>
        </h3>
        <p className="text-sm text-slate-500 line-clamp-2">{form.description}</p>
      </div>

      <div className="flex items-center justify-between text-sm text-slate-500 mb-4 font-medium border-t border-slate-100 dark:border-slate-800 pt-3">
         <div className="flex items-center gap-1.5">
            <BarChart2 className="w-4 h-4 text-indigo-500" />
            <span className="text-slate-900 dark:text-slate-100 font-bold">{form.responsesCount}</span> respostas
         </div>
         <span className="text-xs">
            {new Date(form.updatedAt).toLocaleDateString('pt-BR')}
         </span>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-auto">
         <Link href={`/dashboard/forms/${form.id}`} className="flex items-center justify-center gap-2 py-1.5 text-xs font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors border border-transparent hover:border-indigo-100">
           <Settings className="w-3.5 h-3.5" /> Editar
         </Link>
         <Link href={`/dashboard/forms/${form.id}/responses`} className="flex items-center justify-center gap-2 py-1.5 text-xs font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors border border-transparent hover:border-indigo-100">
           <BarChart2 className="w-3.5 h-3.5" /> Dados
         </Link>
         <button className="flex items-center justify-center gap-2 py-1.5 text-xs font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors border border-transparent hover:border-indigo-100">
           <Copy className="w-3.5 h-3.5" /> Link
         </button>
      </div>
    </div>
  );
}
