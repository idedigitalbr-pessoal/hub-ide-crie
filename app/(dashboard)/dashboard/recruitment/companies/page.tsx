import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { recruitmentService } from "@/services/recruitment.service";
import { Building, MapPin, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default async function RecruitmentCompaniesPage() {
  const companies  = (await recruitmentService.getCompanies()).data;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <Breadcrumbs items={[{ label: "Recrutamento", href: "/dashboard/recruitment" }, { label: "Empresas Parceiras" }]} />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Empresas Parceiras</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Gerencie as empresas com acesso ao portal de recrutamento.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
             <div className="relative w-64">
               <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
               <input type="text" placeholder="Buscar empresas..." className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-indigo-500" />
             </div>
             
             <div className="flex items-center gap-2 text-sm font-medium">
                <span className="text-slate-500">{companies.length} empresas</span>
             </div>
          </div>
          
          <div className="divide-y divide-slate-200 dark:divide-slate-800">
             {companies.map(company => (
               <div key={company.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <div className="flex items-center gap-4">
                     {company.logoUrl ? (
                        <Image src={company.logoUrl} alt={company.name} width={48} height={48} className="rounded-lg object-cover border border-slate-200 dark:border-slate-800" />
                     ) : (
                        <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                           <Building className="w-6 h-6 text-slate-400" />
                        </div>
                     )}
                     <div>
                        <h3 className="font-bold text-slate-900 dark:text-slate-100 line-clamp-1">{company.name}</h3>
                        <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {company.location}</span>
                          <span>•</span>
                          <span>{company.industry}</span>
                        </div>
                     </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                     <span className={cn(
                        "px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-md border",
                        company.status === 'Aprovada' 
                           ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-800/50" 
                           : company.status === 'Aguardando Aprovação'
                              ? "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-amber-200/50 dark:border-amber-800/50"
                              : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700"
                     )}>
                        {company.status}
                     </span>
                     
                     {company.status === 'Aguardando Aprovação' ? (
                       <div className="flex gap-2">
                         <button className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded transition-colors">
                           Aprovar
                         </button>
                         <button className="px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold rounded transition-colors">
                           Analisar
                         </button>
                       </div>
                     ) : (
                       <button className="px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold rounded transition-colors">
                         Ver Perfil
                       </button>
                     )}
                  </div>
               </div>
             ))}
          </div>
      </div>
    </div>
  );
}
