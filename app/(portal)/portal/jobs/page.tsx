import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { mockJobs } from "@/lib/mock-recruitment";
import { Building, MapPin, DollarSign, Clock } from "lucide-react";
import Link from "next/link";

export default function PortalJobsPage() {
  const breadcrumbItems = [
    { label: "Portal", href: "/portal" },
    { label: "Vagas", href: "/portal/jobs" },
  ];

  return (
    <div className="p-8 max-w-[1200px] mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Vagas e Oportunidades</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Encontre a sua próxima oportunidade de carreira.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockJobs.map((job) => (
          <div key={job.id} className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-6 flex flex-col hover:shadow-md transition-shadow">
             <div className="flex justify-between items-start mb-4">
               <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0">
                  <Building className="w-6 h-6 text-slate-400" />
               </div>
               <span className="text-xs font-semibold px-2 py-1 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full">
                 Ativa
               </span>
             </div>
             
             <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-1">{job.title}</h3>
             <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-1 line-clamp-2">{job.description}</p>
             
             <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-slate-500">
                  <Building className="w-4 h-4 mr-3 shrink-0 text-slate-400" />
                  <span className="truncate">{job.companyName}</span>
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  <MapPin className="w-4 h-4 mr-3 shrink-0 text-slate-400" />
                  <span>{job.location} ({job.locationType})</span>
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  <DollarSign className="w-4 h-4 mr-3 shrink-0 text-slate-400" />
                  <span>{job.salaryRange || 'A combinar'}</span>
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  <Clock className="w-4 h-4 mr-3 shrink-0 text-slate-400" />
                  <span>{job.employmentType}</span>
                </div>
             </div>

             <button className="w-full py-2 bg-slate-900 text-white dark:bg-blue-600 dark:hover:bg-blue-700 hover:bg-slate-800 rounded-lg font-medium text-sm transition-colors">
               Candidatar-se
             </button>
          </div>
        ))}
      </div>
    </div>
  );
}
