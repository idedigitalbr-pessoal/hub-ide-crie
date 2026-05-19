import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { mockEvents } from "@/lib/mock-events";
import { MapPin, Calendar as CalendarIcon, Clock, Users } from "lucide-react";
import Link from "next/link";

export default function PortalEventsPage() {
  const breadcrumbItems = [
    { label: "Portal", href: "/portal" },
    { label: "Eventos", href: "/portal/events" },
  ];

  return (
    <div className="p-8 max-w-[1200px] mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Eventos</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Inscreva-se e participe dos próximos eventos da comunidade.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockEvents.map((event) => (
          <div key={event.id} className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden flex flex-col group">
             {event.coverUrl ? (
                <div className="h-48 w-full overflow-hidden relative">
                   <img src={event.coverUrl} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                   <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-300">
                     {event.type}
                   </div>
                </div>
             ) : (
                <div className="h-48 w-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center relative">
                   <CalendarIcon className="w-12 h-12 text-slate-300 dark:text-slate-700" />
                   <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-300">
                     {event.type}
                   </div>
                </div>
             )}
             
             <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-2 truncate">{event.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 flex-1">{event.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <CalendarIcon className="w-4 h-4 mr-2 shrink-0" />
                    <span>{new Date(event.startDate).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <Clock className="w-4 h-4 mr-2 shrink-0" />
                    <span>{new Date(event.startDate).toLocaleTimeString('pt-BR', { hour: '2-digit', minute:'2-digit' })}</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <MapPin className="w-4 h-4 mr-2 shrink-0" />
                    <span className="truncate">{event.location || 'Local a definir'}</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <Users className="w-4 h-4 mr-2 shrink-0" />
                    <span>{event.registeredCount} / {event.capacity} inscritos</span>
                  </div>
                </div>

                <button className="w-full py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50 rounded-lg font-medium text-sm transition-colors">
                  Ver Detalhes e Inscrição
                </button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
