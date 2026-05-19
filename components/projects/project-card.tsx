import { Project } from "@/types/projects";
import { Calendar, CheckCircle2, Clock, MoreHorizontal, Users } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const isDelayed = project.status === 'Em execução' && project.endDate && new Date(project.endDate) < new Date();

  return (
    <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:shadow-md transition-shadow flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 hover:text-indigo-600 transition-colors">
            <Link href={`/dashboard/projects/${project.id}`}>{project.name}</Link>
          </h3>
          <p className="text-sm text-slate-500 line-clamp-1 mt-1">{project.description}</p>
        </div>
        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 p-1 rounded hover:bg-slate-50 dark:hover:bg-slate-900">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className={cn(
          "px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-md border",
          project.status === 'Concluído' ? "bg-emerald-50 text-emerald-700 border-emerald-200/50" :
          project.status === 'Em execução' ? "bg-indigo-50 text-indigo-700 border-indigo-200/50" :
          project.status === 'Em pausa' ? "bg-amber-50 text-amber-700 border-amber-200/50" :
          "bg-slate-100 text-slate-700 border-slate-200/50"
        )}>
           {project.status}
        </span>
        {isDelayed && (
          <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-md border bg-red-50 text-red-700 border-red-200/50">
             Atrasado
          </span>
        )}
      </div>

      <div className="space-y-4 mb-4 flex-1">
        <div>
          <div className="flex items-center justify-between text-sm font-medium mb-1.5">
            <span className="text-slate-700 dark:text-slate-300">Progresso</span>
            <span className={cn(
              project.progressPercentage === 100 ? "text-emerald-600" : "text-indigo-600"
            )}>{project.progressPercentage}%</span>
          </div>
          <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div 
              className={cn(
                "h-full rounded-full transition-all duration-500",
                project.progressPercentage === 100 ? "bg-emerald-500" : "bg-indigo-600"
              )} 
              style={{ width: `${project.progressPercentage}%` }} 
            />
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
           <div className="flex items-center gap-1.5">
             <Calendar className="w-4 h-4" />
             {new Date(project.startDate).toLocaleDateString('pt-BR', { month: 'short', day: 'numeric' })}
             {project.endDate && ` - ${new Date(project.endDate).toLocaleDateString('pt-BR', { month: 'short', day: 'numeric' })}`}
           </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center -space-x-2">
           {project.members.slice(0, 3).map(member => (
              <div key={member.id} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-800 overflow-hidden relative" title={member.name}>
                 {member.avatarUrl ? (
                   <Image src={member.avatarUrl} alt={member.name} fill className="object-cover" />
                 ) : (
                   <div className="w-full h-full flex items-center justify-center text-xs font-bold text-slate-500">{member.name.substring(0, 2)}</div>
                 )}
              </div>
           ))}
           {project.members.length > 3 && (
             <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-950 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-500 relative z-10">
               +{project.members.length - 3}
             </div>
           )}
        </div>

        <Link href={`/dashboard/projects/${project.id}`} className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition-colors">
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
}
