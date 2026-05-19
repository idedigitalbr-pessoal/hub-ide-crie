import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { projectsService } from "@/services/projects.service";
import { ProjectCard } from "@/components/projects/project-card";
import { StatCard } from "@/components/ui/stat-card";
import { Kanban, CheckCircle2, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";

export default async function ProjectsDashboard() {
  const projects  = (await projectsService.getProjects()).data;
  
  const activeProjects = projects.filter(p => p.status === 'Em execução' || p.status === 'Planejamento');
  const completedProjects = projects.filter(p => p.status === 'Concluído');

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <Breadcrumbs items={[{ label: "Gestão de Projetos" }]} />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Meus Projetos</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Acompanhe o andamento de projetos e tarefas da sua equipe.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/dashboard/projects/new" className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm flex items-center gap-2">
            Novo Projeto
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Projetos Ativos" value={activeProjects.length} icon={Kanban} />
        <StatCard title="Projetos Concluídos" value={completedProjects.length} icon={CheckCircle2} />
        <StatCard title="Tarefas Pendentes" value="12" icon={Clock} />
        <StatCard title="Produtividade" value="85%" icon={TrendingUp} />
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Projetos em Andamento</h2>
          <select className="bg-transparent border border-slate-200 dark:border-slate-800 rounded-lg text-sm px-3 py-1.5 font-medium text-slate-700 dark:text-slate-300">
             <option>Mais recentes</option>
             <option>Ordem alfabética</option>
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
