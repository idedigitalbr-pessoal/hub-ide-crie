import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { eventsService } from "@/services/events.service";
import { EventCard } from "@/components/events/event-card";
import { StatCard } from "@/components/ui/stat-card";
import { Calendar, UserCheck, Video, Ticket } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default async function EventsDashboard() {
  const events  = (await eventsService.getEvents()).data;
  
  const publishedEvents = events.filter(e => e.status === 'Publicado');
  const upcomingEvents = events.filter(e => e.status === 'Publicado' && new Date(e.startDate) > new Date());
  
  const totalRegistrations = events.reduce((acc, current) => acc + current.registeredCount, 0);

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <Breadcrumbs items={[{ label: "Eventos" }]} />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Sistema de Eventos</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Gerencie palestras, workshops, processos seletivos e mais.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/dashboard/events/new" className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Novo Evento
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Eventos Publicados" value={publishedEvents.length} icon={Calendar} />
        <StatCard title="Próximos Eventos" value={upcomingEvents.length} icon={Ticket} />
        <StatCard title="Total de Inscritos" value={totalRegistrations} icon={UserCheck} />
        <StatCard title="Eventos Online" value={events.filter(e => e.format === 'Online').length} icon={Video} />
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Próximos Eventos</h2>
          <select className="bg-transparent border border-slate-200 dark:border-slate-800 rounded-lg text-sm px-3 py-1.5 font-medium text-slate-700 dark:text-slate-300">
             <option>Mais recentes</option>
             <option>Maior público</option>
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
