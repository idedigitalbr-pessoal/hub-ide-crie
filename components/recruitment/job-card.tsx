import { Job } from "@/types/recruitment";
import { Briefcase, MapPin, DollarSign, Users, Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  job: Job;
  isAdminOrRecruiter?: boolean;
}

export function JobCard({ job, isAdminOrRecruiter = false }: Props) {
  return (
    <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          {job.companyLogoUrl ? (
            <Image src={job.companyLogoUrl} alt={job.companyName} width={48} height={48} className="rounded-lg object-cover" />
          ) : (
            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
               <Building className="w-6 h-6 text-slate-400" />
            </div>
          )}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg line-clamp-1">{job.title}</h3>
            <p className="text-sm font-medium text-slate-500">{job.companyName}</p>
          </div>
        </div>
        
        <span className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider rounded-md border border-emerald-200/50 dark:border-emerald-800/50 shrink-0">
          {job.status}
        </span>
      </div>

      <div className="flex flex-wrap gap-3 mb-4 text-xs font-medium text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-900 px-2.5 py-1 rounded-md">
          <MapPin className="w-3.5 h-3.5" />
          {job.locationType} • {job.location}
        </div>
        <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-900 px-2.5 py-1 rounded-md">
          <Briefcase className="w-3.5 h-3.5" />
          {job.employmentType}
        </div>
        {job.salaryRange && (
          <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-900 px-2.5 py-1 rounded-md">
            <DollarSign className="w-3.5 h-3.5" />
            {job.salaryRange}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {job.skills.slice(0, 4).map(skill => (
          <span key={skill} className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 text-xs font-medium rounded">
            {skill}
          </span>
        ))}
        {job.skills.length > 4 && (
          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium rounded">
            +{job.skills.length - 4}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
        {isAdminOrRecruiter ? (
           <div className="flex items-center gap-1.5 text-sm font-medium text-slate-500">
             <Users className="w-4 h-4" />
             {job.applicantCount} candidatos
           </div>
        ) : (
           <div className="text-xs text-slate-500">Publicada há 3 dias</div>
        )}
        
        <Link 
          href={`/dashboard/recruitment/jobs/${job.id}`} 
          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white text-sm font-medium rounded-lg transition-colors"
        >
          {isAdminOrRecruiter ? 'Gerenciar Vaga' : 'Ver Detalhes'}
        </Link>
      </div>
    </div>
  );
}
