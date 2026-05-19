import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { projectsService } from "@/services/projects.service";
import { notFound } from "next/navigation";
import { Calendar, Layout, ListTodo, Users, FileText, BarChart2, Kanban } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailsPage({ params }: Props) {
  const { id } = await params;
  const project  = (await projectsService.getProjectById(id)).data;
  
  if (!project) notFound();

  const tasks  = (await projectsService.getTasksByProject(project.id)).data;
  const milestones  = (await projectsService.getMilestonesByProject(project.id)).data;

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8">
      <div className="space-y-1">
        <Breadcrumbs items={[
          { label: "Gestão de Projetos", href: "/dashboard/projects" }, 
          { label: project.name }
        ]} />
      </div>

      <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm flex flex-col md:flex-row md:items-start justify-between gap-6">
         <div>
            <div className="flex items-center gap-3 mb-2">
               <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{project.name}</h1>
               <span className={cn(
                  "px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-md border",
                  project.status === 'Concluído' ? "bg-emerald-50 text-emerald-700 border-emerald-200/50" :
                  project.status === 'Em execução' ? "bg-indigo-50 text-indigo-700 border-indigo-200/50" :
                  project.status === 'Em pausa' ? "bg-amber-50 text-amber-700 border-amber-200/50" :
                  "bg-slate-100 text-slate-700 border-slate-200/50"
               )}>
                 {project.status}
               </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mb-4">{project.description}</p>
            
            <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
               <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-900 px-2.5 py-1 rounded-md">
                 <Calendar className="w-4 h-4" />
                 {new Date(project.startDate).toLocaleDateString('pt-BR')} - {project.endDate ? new Date(project.endDate).toLocaleDateString('pt-BR') : 'Sem data fim'}
               </div>
               <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-900 px-2.5 py-1 rounded-md">
                 <ListTodo className="w-4 h-4" />
                 {tasks.length} tarefas
               </div>
            </div>
         </div>
         
         <div className="shrink-0 w-full md:w-64 space-y-4">
            <div>
               <div className="flex items-center justify-between text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">
                 <span>Progresso</span>
                 <span className="text-indigo-600 dark:text-indigo-400">{project.progressPercentage}%</span>
               </div>
               <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                 <div className="h-full bg-indigo-600 rounded-full shadow-[0_0_10px_rgba(79,70,229,0.4)]" style={{ width: `${project.progressPercentage}%` }}></div>
               </div>
            </div>
            
            <div>
               <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Equipe ({project.members.length})</span>
               <div className="flex items-center -space-x-2">
                 {project.members.slice(0, 5).map(member => (
                    <div key={member.id} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-800 overflow-hidden relative" title={member.name}>
                       {member.avatarUrl ? (
                         <Image src={member.avatarUrl} alt={member.name} fill className="object-cover" />
                       ) : (
                         <div className="w-full h-full flex items-center justify-center text-xs font-bold text-slate-500">{member.name.substring(0, 2)}</div>
                       )}
                    </div>
                 ))}
               </div>
            </div>
         </div>
      </div>

      <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 overflow-x-auto pb-px">
         <Link href={`/dashboard/projects/${project.id}`} className="px-4 py-2 border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2 whitespace-nowrap">
            <Layout className="w-4 h-4" />
            Visão Geral
         </Link>
         <Link href={`/dashboard/projects/${project.id}/kanban`} className="px-4 py-2 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium flex items-center gap-2 whitespace-nowrap">
            <Kanban className="w-4 h-4" />
            Quadro (Kanban)
         </Link>
         <button className="px-4 py-2 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium flex items-center gap-2 whitespace-nowrap">
            <Users className="w-4 h-4" />
            Equipe
         </button>
         <button className="px-4 py-2 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium flex items-center gap-2 whitespace-nowrap">
            <FileText className="w-4 h-4" />
            Documentos
         </button>
         <button className="px-4 py-2 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium flex items-center gap-2 whitespace-nowrap">
            <BarChart2 className="w-4 h-4" />
            Relatórios
         </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
               <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
                  <h2 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                    <ListTodo className="w-5 h-5 text-indigo-500" />
                    Últimas Tarefas
                  </h2>
                  <Link href={`/dashboard/projects/${project.id}/kanban`} className="text-sm font-medium text-indigo-600 hover:text-indigo-700">Ver todas</Link>
               </div>
               <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {tasks.slice(0, 5).map(task => (
                    <div key={task.id} className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                       <div>
                          <p className="font-medium text-sm text-slate-900 dark:text-slate-100">{task.title}</p>
                          <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-500">
                             <span className={cn(
                               "px-1.5 py-0.5 rounded font-bold uppercase tracking-wider",
                               task.status === 'Concluída' ? "bg-emerald-50 text-emerald-700" :
                               task.status === 'Em andamento' ? "bg-indigo-50 text-indigo-700" :
                               "bg-slate-100 text-slate-600"
                             )}>{task.status}</span>
                             <span>•</span>
                             <span>Atribuído a: {task.assigneeName || 'Ninguém'}</span>
                          </div>
                       </div>
                       <button className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded text-xs font-semibold hover:bg-slate-50">
                          Detalhes
                       </button>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="space-y-6">
            <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
               <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
                  <h2 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-indigo-500" />
                    Marcos (Milestones)
                  </h2>
               </div>
               <div className="p-4 space-y-4">
                  {milestones.length > 0 ? milestones.map(m => (
                    <div key={m.id} className="flex gap-4">
                       <div className="flex flex-col items-center">
                          <div className={cn(
                            "w-4 h-4 rounded-full border-2 bg-white dark:bg-slate-950 z-10",
                            m.status === 'Alcançado' ? "border-emerald-500" : 
                            m.status === 'Atrasado' ? "border-red-500" : "border-slate-300 dark:border-slate-700"
                          )}></div>
                          <div className="w-0.5 h-full bg-slate-200 dark:bg-slate-800 -mt-1"></div>
                       </div>
                       <div className="pb-4">
                          <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{m.title}</p>
                          <p className="text-xs text-slate-500 mt-1">{new Date(m.dueDate).toLocaleDateString('pt-BR')}</p>
                       </div>
                    </div>
                  )) : (
                    <p className="text-sm text-slate-500 text-center py-4">Nenhum marco definido.</p>
                  )}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
