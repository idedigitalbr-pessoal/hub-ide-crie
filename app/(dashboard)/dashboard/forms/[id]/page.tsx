import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { formsService } from "@/services/forms.service";
import { notFound } from "next/navigation";
import { Save, Settings, BarChart2, Edit, CheckCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function FormDetailsPage({ params }: Props) {
  const { id } = await params;
  const form  = (await formsService.getFormById(id)).data;
  
  if (!form) notFound();

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <Breadcrumbs items={[
            { label: "Formulários", href: "/dashboard/forms" }, 
            { label: form.title }
          ]} />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">{form.title}</h1>
        </div>
        <div className="flex items-center gap-3">
          <Link href={`/dashboard/forms/${form.id}/responses`} className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-2">
            <BarChart2 className="w-4 h-4" /> Ver Respostas
          </Link>
          <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm flex items-center gap-2">
            <Save className="w-4 h-4" /> Salvar Alterações
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 overflow-x-auto pb-px">
         <Link href={`/dashboard/forms/${form.id}`} className="px-4 py-2 border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2 whitespace-nowrap">
            <Edit className="w-4 h-4" />
            Editar Editor
         </Link>
         <Link href={`/dashboard/forms/${form.id}/responses`} className="px-4 py-2 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium flex items-center gap-2 whitespace-nowrap">
            <BarChart2 className="w-4 h-4" />
            Respostas ({form.responsesCount})
         </Link>
         <button className="px-4 py-2 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium flex items-center gap-2 whitespace-nowrap">
            <Settings className="w-4 h-4" />
            Configurações
         </button>
      </div>

      <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8 max-w-3xl mx-auto shadow-sm">
         <div className="text-center mb-8 pb-8 border-b border-slate-200 dark:border-slate-800">
            <span className={cn(
               "px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md border mb-4 inline-block",
               form.status === 'Publicado' ? "bg-emerald-50 text-emerald-700 border-emerald-200/50" :
               form.status === 'Rascunho' ? "bg-slate-100 text-slate-700 border-slate-200/50" :
               "bg-amber-50 text-amber-700 border-amber-200/50"
            )}>
              {form.status}
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">{form.title}</h2>
            <p className="text-slate-500 dark:text-slate-400">{form.description}</p>
         </div>

         <div className="space-y-8">
            {form.fields.map((field, idx) => (
               <div key={field.id} className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50/50 dark:bg-slate-900/50 group relative">
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                     <button className="p-1 text-slate-400 hover:text-slate-600 bg-white dark:bg-slate-950 rounded shadow-sm border border-slate-200 dark:border-slate-800"><Edit className="w-4 h-4" /></button>
                  </div>
                  <label className="block text-sm font-bold text-slate-800 dark:text-slate-200 mb-3">
                     {idx + 1}. {field.label} {field.required && <span className="text-red-500">*</span>}
                  </label>
                  
                  {field.type === 'text' && (
                     <input type="text" disabled placeholder="Sua resposta" className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 opacity-60" />
                  )}
                  {field.type === 'textarea' && (
                     <textarea disabled placeholder="Sua resposta detalhada" className="w-full min-h-[100px] p-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 opacity-60" />
                  )}
                  {field.type === 'radio' && field.options && (
                     <div className="space-y-2">
                        {field.options.map(opt => (
                           <label key={opt} className="flex items-center gap-2">
                              <input type="radio" disabled className="w-4 h-4 text-indigo-600" />
                              <span className="text-slate-600 dark:text-slate-400 text-sm">{opt}</span>
                           </label>
                        ))}
                     </div>
                  )}
                   {field.type === 'select' && field.options && (
                     <select disabled className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 opacity-60 text-slate-600">
                        <option>Selecione uma opção</option>
                        {field.options.map(opt => (
                           <option key={opt}>{opt}</option>
                        ))}
                     </select>
                  )}
               </div>
            ))}
            
            {form.fields.length === 0 && (
               <div className="text-center py-12 text-slate-500">
                  <p>Este formulário ainda não tem perguntas.</p>
               </div>
            )}
         </div>
      </div>
    </div>
  );
}
