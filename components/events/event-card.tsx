import { Event } from "@/types/events";
import { Calendar, MapPin, Users, Video } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  event: Event;
}

export function EventCard({ event }: Props) {
  const isFull = event.registeredCount >= event.capacity;
  const isOnline = event.format === 'Online';
  const isHybrid = event.format === 'Híbrido';

  return (
    <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image 
          src={event.coverUrl} 
          alt={event.title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-3 left-3 flex gap-2">
           <span className={cn(
             "px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded border shadow-sm backdrop-blur-md",
             event.status === 'Publicado' ? "bg-emerald-500/90 text-white border-emerald-400" :
             event.status === 'Rascunho' ? "bg-slate-800/90 text-white border-slate-700" :
             "bg-indigo-500/90 text-white border-indigo-400"
           )}>
             {event.status}
           </span>
           <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded border shadow-sm backdrop-blur-md bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 border-white/20 dark:border-slate-700/50">
             {event.type}
           </span>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2 hover:text-indigo-600 transition-colors line-clamp-2">
          <Link href={`/dashboard/events/${event.id}`}>{event.title}</Link>
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4 flex-1">
          {event.shortDescription}
        </p>

        <div className="space-y-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 mb-5">
           <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>{new Date(event.startDate).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' })}</span>
           </div>
           
           <div className="flex items-center gap-2">
              {isOnline ? <Video className="w-4 h-4 text-slate-400" /> : <MapPin className="w-4 h-4 text-slate-400" />}
              <span className="line-clamp-1">{isOnline ? 'Online' : isHybrid ? `Híbrido • ${event.location}` : event.location}</span>
           </div>

           <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-slate-400" />
              <span>
                 {event.registeredCount} / {event.capacity} inscritos
                 {isFull && <span className="ml-2 text-xs text-red-500 font-bold uppercase">Esgotado</span>}
              </span>
           </div>
        </div>

        <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-4">
           <div 
             className={cn("h-full rounded-full transition-all", isFull ? "bg-red-500" : "bg-indigo-500")}
             style={{ width: `${Math.min((event.registeredCount / event.capacity) * 100, 100)}%` }}
           />
        </div>

        <Link href={`/dashboard/events/${event.id}`} className="w-full py-2 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg transition-colors text-center block">
          Gerenciar Evento
        </Link>
      </div>
    </div>
  );
}
