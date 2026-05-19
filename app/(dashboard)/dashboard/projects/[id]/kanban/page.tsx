import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { projectsService } from "@/services/projects.service";
import { notFound } from "next/navigation";
import { ProjectKanbanBoard } from "@/components/projects/kanban-board";
import { Kanban, Layout, Users, FileText, BarChart2, Plus } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProjectKanbanPage({ params }: Props) {
  const { id } = await params;
  const project  = (await projectsService.getProjectById(id)).data;
  
  if (!project) notFound();

  const tasks  = (await projectsService.getTasksByProject(project.id)).data;

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <Breadcrumbs items={[
            { label: "Gestão de Projetos", href: "/dashboard/projects" }, 
            { label: project.name, href: `/dashboard/projects/${project.id}` },
            { label: "Quadro" }
          ]} />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">{project.name}</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm flex items-center gap-2">
            <Plus className="w-4 h-4" /> Nova Tarefa
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 overflow-x-auto pb-px shrink-0">
         <Link href={`/dashboard/projects/${project.id}`} className="px-4 py-2 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium flex items-center gap-2 whitespace-nowrap">
            <Layout className="w-4 h-4" />
            Visão Geral
         </Link>
         <Link href={`/dashboard/projects/${project.id}/kanban`} className="px-4 py-2 border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2 whitespace-nowrap">
            <Kanban className="w-4 h-4" />
            Quadro (Kanban)
         </Link>
         <button className="px-4 py-2 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium flex items-center gap-2 whitespace-nowrap">
            <Users className="w-4 h-4" />
            Equipe
         </button>
      </div>

      <div className="flex-1 min-h-[600px]">
         <ProjectKanbanBoard tasksData={tasks} />
      </div>
    </div>
  );
}
