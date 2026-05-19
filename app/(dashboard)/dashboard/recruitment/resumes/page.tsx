import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { recruitmentService } from "@/services/recruitment.service";
import { CandidateCard } from "@/components/recruitment/candidate-card";
import { Search, Filter } from "lucide-react";

export default async function ResumeBankPage() {
  const candidates  = (await recruitmentService.getCandidates()).data;

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8">
      <div className="space-y-1">
        <Breadcrumbs items={[{ label: "Recrutamento", href: "/dashboard/recruitment" }, { label: "Banco de Talentos" }]} />
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Banco de Talentos</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Busque ativamente por profissionais na plataforma.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
         <div className="w-full lg:w-64 shrink-0 space-y-6">
            <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm space-y-6">
              <div>
                 <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-3">
                   <Filter className="w-4 h-4" /> Filtros
                 </h3>
                 <div className="relative">
                   <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                   <input type="text" placeholder="Habilidades, cargos..." className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-indigo-500" />
                 </div>
              </div>

              <div className="space-y-3">
                 <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300">Nível Mínimo</h4>
                 <select className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                    <option>Qualquer nível</option>
                    <option>Júnior</option>
                    <option>Pleno</option>
                    <option>Sênior</option>
                 </select>
              </div>

              <button className="w-full py-2 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 text-sm font-medium rounded-lg transition-colors">
                Buscar Candidatos
              </button>
            </div>
         </div>

         <div className="flex-1 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-slate-500">{candidates.length} perfis encontrados</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {candidates.map(candidate => (
                 <CandidateCard key={candidate.id} candidate={candidate} />
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
