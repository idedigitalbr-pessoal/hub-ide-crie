import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { StatCard } from "@/components/ui/stat-card";
import { GraduationCap, Kanban, Calendar, Briefcase, PlayCircle } from "lucide-react";
import Link from "next/link";
import { mockCourses } from "@/lib/mock-lms";
import { mockEvents } from "@/lib/mock-events";

export default function PortalOverviewPage() {
  // Dados mockados para a visão do aluno/membro
  const inProgressCourses = mockCourses.slice(0, 2);
  const upcomingEvents = mockEvents.filter(e => e.status === "Publicado").slice(0, 3);

  return (
    <div className="p-8 max-w-[1200px] mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <Breadcrumbs items={[]} />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Bem-vinda, Ana! 👋</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Aqui está o resumo das suas atividades e compromissos.</p>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Cursos em Andamento" value="2" icon={GraduationCap} />
        <StatCard title="Projetos Ativos" value="1" icon={Kanban} />
        <StatCard title="Próximos Eventos" value="3" icon={Calendar} />
        <StatCard title="Candidaturas" value="0" icon={Briefcase} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Cursos em Andamento */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Continue Aprendendo</h2>
            <Link href="/portal/courses" className="text-sm text-blue-600 hover:underline dark:text-blue-400">Ver todos</Link>
          </div>
          
          <div className="grid gap-4">
            {inProgressCourses.map((course) => (
              <div key={course.id} className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex gap-4 items-center">
                <div className="w-20 h-20 bg-slate-100 dark:bg-slate-900 rounded-lg overflow-hidden shrink-0">
                  <img src={course.thumbnailUrl} alt={course.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 truncate">{course.title}</h3>
                  <div className="flex justify-between items-end mt-2">
                    <div className="space-y-1 flex-1 mr-4">
                      <div className="flex justify-between text-xs text-slate-500">
                        <span>Progresso</span>
                        <span>35%</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="bg-blue-600 h-1.5 rounded-full" 
                          style={{ width: `35%` }}
                        />
                      </div>
                    </div>
                    <Link href={`/portal/courses/${course.slug}`} className="shrink-0 p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-colors">
                      <PlayCircle className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Próximos Eventos */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Próximos Eventos</h2>
            <Link href="/portal/events" className="text-sm text-blue-600 hover:underline dark:text-blue-400">Ver calendário</Link>
          </div>
          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl divide-y divide-slate-100 dark:divide-slate-800">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="p-4 flex gap-4">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg flex flex-col items-center justify-center shrink-0 text-indigo-700 dark:text-indigo-400">
                  <span className="text-xs font-semibold uppercase">{new Date(event.startDate).toLocaleDateString('pt-BR', { month: 'short' })}</span>
                  <span className="text-lg font-bold leading-none mt-0.5">{new Date(event.startDate).getDate()}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 truncate">{event.title}</h3>
                  <div className="flex items-center gap-2 mt-1 text-sm text-slate-500">
                    <span className="truncate">{event.location || event.type}</span>
                    <span>•</span>
                    <span>{new Date(event.startDate).toLocaleTimeString('pt-BR', { hour: '2-digit', minute:'2-digit' })}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

    </div>
  );
}
