import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { recruitmentService } from "@/services/recruitment.service";
import { notFound } from "next/navigation";
import { Briefcase, MapPin, DollarSign, Building, Clock, GraduationCap, Layout, Trello, Users } from "lucide-react";
import Image from "next/image";
import { KanbanBoard } from "@/components/recruitment/kanban-board";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function JobDetailsPage({ params }: Props) {
  const { id } = await params;
  const job  = (await recruitmentService.getJobById(id)).data;
  
  if (!job) {
    notFound();
  }

  const rawApplications = (await recruitmentService.getApplicationsByJob(job.id)).data;
  const candidatesData = (await recruitmentService.getCandidates()).data;
  
  const applicationsData = rawApplications.map(app => ({
     app,
     candidate: candidatesData.find(c => c.id === app.candidateId)!
  })).filter(a => a.candidate);

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8">
      <div className="space-y-1">
        <Breadcrumbs items={[
          { label: "Recrutamento", href: "/dashboard/recruitment" }, 
          { label: "Vagas", href: "/dashboard/recruitment/jobs" },
          { label: job.title }
        ]} />
      </div>

      <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm flex flex-col md:flex-row md:items-start justify-between gap-6">
         <div className="flex items-start gap-6">
            {job.companyLogoUrl && (
               <Image src={job.companyLogoUrl} alt={job.companyName} width={80} height={80} className="rounded-xl border border-slate-200 dark:border-slate-800 object-cover" />
            )}
            <div>
               <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">{job.title}</h1>
               <div className="text-lg font-medium text-slate-500 mb-4">{job.companyName}</div>
               
               <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.locationType} • {job.location}</div>
                  <div className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {job.employmentType}</div>
                  {job.salaryRange && <div className="flex items-center gap-1.5"><DollarSign className="w-4 h-4" /> {job.salaryRange}</div>}
               </div>
            </div>
         </div>
         
         <div className="flex flex-col items-end gap-3 shrink-0">
            <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider text-sm rounded-md border border-emerald-200/50 dark:border-emerald-800/50">
              {job.status}
            </span>
            <div className="text-sm font-medium text-slate-500">
               Criada em {new Date(job.createdAt).toLocaleDateString('pt-BR')}
            </div>
            <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors mt-2">
               Editar Vaga
            </button>
         </div>
      </div>

      {/* Kanban / Overview Tabs (Simplified to just Kanban and overview) */}
      <div className="space-y-6">
         <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-px">
            <button className="px-4 py-2 border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2">
               <Trello className="w-4 h-4" />
               Kanban (Processo Seletivo)
            </button>
            <button className="px-4 py-2 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium flex items-center gap-2">
               <Layout className="w-4 h-4" />
               Detalhes da Vaga
            </button>
         </div>

         <KanbanBoard applicationsData={applicationsData} />
      </div>

    </div>
  );
}
