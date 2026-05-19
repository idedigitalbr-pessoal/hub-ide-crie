import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { formsService } from "@/services/forms.service";
import { FormCard } from "@/components/forms/form-card";
import { StatCard } from "@/components/ui/stat-card";
import { FileText, CheckCircle2, BarChart2, Plus } from "lucide-react";
import Link from "next/link";

export default async function FormsDashboard() {
  const forms  = (await formsService.getForms()).data;
  
  const publishedForms = forms.filter(f => f.status === 'Publicado');
  const totalResponses = forms.reduce((acc, current) => acc + current.responsesCount, 0);

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <Breadcrumbs items={[{ label: "Formulários e Pesquisas" }]} />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Meus Formulários</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Crie pesquisas, avaliações e colete dados da sua equipe.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/dashboard/forms/new" className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm flex items-center gap-2">
            <Plus className="w-4 h-4" /> Novo Formulário
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard title="Formulários Ativos" value={publishedForms.length} icon={FileText} />
        <StatCard title="Total de Respostas" value={totalResponses} icon={BarChart2} />
        <StatCard title="Taxa de Conclusão Média" value="78%" icon={CheckCircle2} />
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Formulários Recentes</h2>
          <select className="bg-transparent border border-slate-200 dark:border-slate-800 rounded-lg text-sm px-3 py-1.5 font-medium text-slate-700 dark:text-slate-300">
             <option>Mais recentes</option>
             <option>Mais respostas</option>
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {forms.map(form => (
            <FormCard key={form.id} form={form} />
          ))}
        </div>
      </div>
    </div>
  );
}
