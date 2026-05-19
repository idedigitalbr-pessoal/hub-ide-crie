import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { recruitmentService } from "@/services/recruitment.service";
import { JobCard } from "@/components/recruitment/job-card";
import { Search, Filter, Briefcase, MapPin } from "lucide-react";
import Link from "next/link";

export default async function JobsListingPage() {
  const jobs  = (await recruitmentService.getJobs()).data;

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <Breadcrumbs items={[{ label: "Recrutamento", href: "/dashboard/recruitment" }, { label: "Vagas" }]} />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Explorar Vagas</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Encontre a próxima oportunidade para alavancar sua carreira.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
         {/* Filters Sidebar */}
         <div className="w-full lg:w-64 shrink-0 space-y-6">
            <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm space-y-6">
              <div>
                 <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-3">
                   <Filter className="w-4 h-4" /> Filtros
                 </h3>
                 <div className="relative">
                   <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                   <input type="text" placeholder="Buscar cargo..." className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-indigo-500" />
                 </div>
              </div>

              <div className="space-y-3">
                 <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300">Tipo de Trabalho</h4>
                 <div className="space-y-2">
                   {['Remoto', 'Híbrido', 'Presencial'].map(type => (
                     <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{type}</span>
                     </label>
                   ))}
                 </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                 <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300">Contratação</h4>
                 <div className="space-y-2">
                   {['CLT', 'PJ', 'Estágio', 'Freelance'].map(type => (
                     <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{type}</span>
                     </label>
                   ))}
                 </div>
              </div>

              <button className="w-full py-2 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 text-sm font-medium rounded-lg transition-colors">
                Aplicar Filtros
              </button>
            </div>
         </div>

         {/* Job List */}
         <div className="flex-1 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-slate-500">{jobs.length} vagas encontradas</span>
              <select className="bg-transparent border border-slate-200 dark:border-slate-800 rounded-lg text-sm px-3 py-1.5 font-medium text-slate-700 dark:text-slate-300">
                 <option>Mais recentes</option>
                 <option>Relevância</option>
                 <option>Maior salário</option>
              </select>
            </div>
            
            <div className="space-y-4">
               {jobs.map(job => (
                 <JobCard key={job.id} job={job} />
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
