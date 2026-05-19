import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { mockProjects } from "@/lib/mock-projects";
import { ProjectCard } from "@/components/projects/project-card";
import Link from "next/link";
import { FileText, MessageSquare, Briefcase } from "lucide-react";

export default function PortalProjectsPage() {
  const breadcrumbItems = [
    { label: "Portal", href: "/portal" },
    { label: "Meus Projetos", href: "/portal/projects" },
  ];

  return (
    <div className="p-8 max-w-[1200px] mx-auto space-y-8">
      <div className="space-y-1">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Meus Projetos</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Projetos em que você está participando no momento.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProjects.filter(p => p.status === 'Em execução' || p.status === 'Planejamento').map((project) => (
          <div key={project.id} className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition-colors flex flex-col">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                   <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">{project.name}</h3>
                   <span className="text-xs font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded mt-2 inline-block">Ativo</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4">{project.description}</p>
              
              <div className="flex -space-x-2 overflow-hidden mt-4">
                  {project.members.slice(0, 4).map((member) => (
                    <img
                      key={member.id}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-950 shrink-0"
                      src={member.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}`}
                      alt={member.name}
                    />
                  ))}
                  {project.members.length > 4 && (
                    <div className="flex items-center justify-center w-8 h-8 rounded-full ring-2 ring-white dark:ring-slate-950 bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">
                      +{project.members.length - 4}
                    </div>
                  )}
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 grid grid-cols-3 gap-2 divide-x divide-slate-200 dark:divide-slate-800 text-center">
               <button className="flex flex-col items-center justify-center text-slate-600 hover:text-blue-600 transition-colors">
                  <Briefcase className="w-5 h-5 mb-1" />
                  <span className="text-[10px] font-medium uppercase tracking-wider">Kanban</span>
               </button>
               <button className="flex flex-col items-center justify-center text-slate-600 hover:text-blue-600 transition-colors">
                  <MessageSquare className="w-5 h-5 mb-1" />
                  <span className="text-[10px] font-medium uppercase tracking-wider">Discussão</span>
               </button>
               <button className="flex flex-col items-center justify-center text-slate-600 hover:text-blue-600 transition-colors">
                  <FileText className="w-5 h-5 mb-1" />
                  <span className="text-[10px] font-medium uppercase tracking-wider">Arquivos</span>
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
