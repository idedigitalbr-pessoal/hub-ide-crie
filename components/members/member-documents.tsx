import { MemberDocument } from "@/types/member";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { FileText, Download, CheckCircle, Clock, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function MemberDocuments({ documents }: { documents: MemberDocument[] }) {
  if (!documents.length) return <p className="text-slate-500 p-4">Nenhum documento anexado.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-2">
      {documents.map(doc => (
        <div key={doc.id} className="flex items-start justify-between p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 break-all">{doc.name}</p>
              <p className="text-xs text-slate-500 mt-1">
                Enviado em {format(new Date(doc.uploadDate), "dd MMM yyyy", { locale: ptBR })}
              </p>
              <div className="mt-2 flex items-center gap-1.5">
                {doc.status === 'Aprovado' && <CheckCircle className="w-3 h-3 text-emerald-500" />}
                {doc.status === 'Pendente' && <Clock className="w-3 h-3 text-amber-500" />}
                {doc.status === 'Rejeitado' && <XCircle className="w-3 h-3 text-rose-500" />}
                <span className={cn(
                  "text-[10px] font-bold uppercase tracking-wider",
                  doc.status === 'Aprovado' ? "text-emerald-600" : doc.status === 'Pendente' ? "text-amber-600" : "text-rose-600"
                )}>
                  {doc.status}
                </span>
              </div>
            </div>
          </div>
          <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors">
            <Download className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
