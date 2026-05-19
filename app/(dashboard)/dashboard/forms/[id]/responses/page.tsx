import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { formsService } from "@/services/forms.service";
import { notFound } from "next/navigation";
import { Edit, BarChart2, Settings, Download } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function FormResponsesPage({ params }: Props) {
  const { id } = await params;
  const form  = (await formsService.getFormById(id)).data;
  
  if (!form) notFound();

  const responses  = (await formsService.getResponsesByForm(form.id)).data;

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <Breadcrumbs items={[
            { label: "Formulários", href: "/dashboard/forms" }, 
            { label: form.title, href: `/dashboard/forms/${form.id}` },
            { label: "Respostas" }
          ]} />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">{form.title}</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm flex items-center gap-2">
            <Download className="w-4 h-4" /> Exportar CSV
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 overflow-x-auto pb-px">
         <Link href={`/dashboard/forms/${form.id}`} className="px-4 py-2 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium flex items-center gap-2 whitespace-nowrap">
            <Edit className="w-4 h-4" />
            Editar Editor
         </Link>
         <Link href={`/dashboard/forms/${form.id}/responses`} className="px-4 py-2 border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2 whitespace-nowrap">
            <BarChart2 className="w-4 h-4" />
            Respostas ({form.responsesCount})
         </Link>
         <button className="px-4 py-2 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium flex items-center gap-2 whitespace-nowrap">
            <Settings className="w-4 h-4" />
            Configurações
         </button>
      </div>

      <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
         <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
            <h2 className="font-bold text-slate-800 dark:text-slate-200">Respostas Recebidas</h2>
         </div>
         
         <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
               <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400">
                  <tr>
                     <th className="px-6 py-3 font-semibold">Data</th>
                     <th className="px-6 py-3 font-semibold">Respondente</th>
                     {form.fields.slice(0, 3).map(field => (
                        <th key={field.id} className="px-6 py-3 font-semibold max-w-[200px] truncate" title={field.label}>
                           {field.label}
                        </th>
                     ))}
                     <th className="px-6 py-3 font-semibold text-right">Ação</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                  {responses.map(resp => (
                     <tr key={resp.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors">
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400">
                           {new Date(resp.submittedAt).toLocaleDateString('pt-BR')} às {new Date(resp.submittedAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                        </td>
                        <td className="px-6 py-4">
                           <div className="font-bold text-slate-900 dark:text-slate-100">{resp.userName || 'Anônimo'}</div>
                           <div className="text-slate-500 text-xs">{resp.userEmail || '-'}</div>
                        </td>
                        {form.fields.slice(0, 3).map(field => (
                           <td key={field.id} className="px-6 py-4 text-slate-600 dark:text-slate-300 max-w-[200px] truncate">
                              {resp.answers[field.id] ? String(resp.answers[field.id]) : '-'}
                           </td>
                        ))}
                        <td className="px-6 py-4 text-right">
                           <button className="text-indigo-600 hover:text-indigo-700 font-medium">Ver Completa</button>
                        </td>
                     </tr>
                  ))}
                  {responses.length === 0 && (
                     <tr>
                        <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                           Ainda não há respostas para este formulário.
                        </td>
                     </tr>
                  )}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
}
