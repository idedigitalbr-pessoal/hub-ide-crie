import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { recruitmentService } from "@/services/recruitment.service";
import { StatCard } from "@/components/ui/stat-card";
import { Briefcase, Building, Users, Activity } from "lucide-react";
import Link from "next/link";
import { JobCard } from "@/components/recruitment/job-card";

export default async function RecruitmentDashboard() {
  const jobs  = (await recruitmentService.getJobs()).data;
  const candidates  = (await recruitmentService.getCandidates()).data;
  const companies  = (await recruitmentService.getCompanies()).data;

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <Breadcrumbs items={[{ label: "Recrutamento" }]} />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Portal de Vagas</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Gerencie processos seletivos, bancos de talentos e vagas.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/dashboard/recruitment/jobs/new" className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">
            Nova Vaga
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Vagas Abertas" value={jobs.filter(j => j.status === 'Aberta').length} icon={Briefcase} />
        <StatCard title="Total de Talentos" value={candidates.length} icon={Users} />
        <StatCard title="Empresas" value={companies.length} icon={Building} />
        <StatCard title="Interações Totais" value="457" icon={Activity} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
         <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Vagas Recentes</h2>
              <Link href="/dashboard/recruitment/jobs" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                Ver todas
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {jobs.slice(0, 4).map(job => (
                 <JobCard key={job.id} job={job} isAdminOrRecruiter />
               ))}
            </div>
         </div>

         <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Ações Rápidas</h2>
            </div>
            
            <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm divide-y divide-slate-100 dark:divide-slate-800">
               <Link href="/dashboard/recruitment/jobs" className="flex items-center gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors group">
                 <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                   <Briefcase className="w-5 h-5" />
                 </div>
                 <div>
                   <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Gerenciar Vagas</h3>
                   <p className="text-xs text-slate-500">Acesse e edite as vagas abertas.</p>
                 </div>
               </Link>
               <Link href="/dashboard/recruitment/resumes" className="flex items-center gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors group">
                 <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                   <Users className="w-5 h-5" />
                 </div>
                 <div>
                   <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Banco de Talentos</h3>
                   <p className="text-xs text-slate-500">Busque currículos ativamente.</p>
                 </div>
               </Link>
               <Link href="/dashboard/recruitment/companies" className="flex items-center gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors group">
                 <div className="w-10 h-10 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                   <Building className="w-5 h-5" />
                 </div>
                 <div>
                   <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Aprovar Empresas</h3>
                   <p className="text-xs text-slate-500">Analise cadastros pendentes.</p>
                 </div>
               </Link>
            </div>
         </div>
      </div>
    </div>
  );
}
