import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { eventsService } from "@/services/events.service";
import { notFound } from "next/navigation";
import { Calendar, Users, MapPin, Video, Layout, Info, Award, FileText, Speaker, Clock, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EventDetailsPage({ params }: Props) {
  const { id } = await params;
  const event  = (await eventsService.getEventById(id)).data;
  
  if (!event) notFound();

  const isFull = event.registeredCount >= event.capacity;

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8">
      <div className="space-y-1">
        <Breadcrumbs items={[
          { label: "Eventos", href: "/dashboard/events" }, 
          { label: event.title }
        ]} />
      </div>

      {/* Header Card */}
      <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row relative">
         <div className="relative w-full md:w-96 h-64 md:h-auto shrink-0">
           <Image src={event.coverUrl} alt={event.title} fill className="object-cover" />
           <div className="absolute top-4 left-4 flex gap-2">
              <span className={cn(
                "px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded border shadow-sm backdrop-blur-md",
                event.status === 'Publicado' ? "bg-emerald-500/90 text-white border-emerald-400" :
                event.status === 'Rascunho' ? "bg-slate-800/90 text-white border-slate-700" :
                "bg-indigo-500/90 text-white border-indigo-400"
              )}>
                {event.status}
              </span>
           </div>
         </div>
         
         <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
            <div>
               <div className="flex items-center gap-2 mb-2">
                 <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded border bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700">
                   {event.type}
                 </span>
               </div>
               <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">{event.title}</h1>
               <p className="text-slate-600 dark:text-slate-400 max-w-3xl mb-6">{event.shortDescription}</p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-700 dark:text-slate-300">
               <div className="flex items-center gap-2">
                 <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-indigo-500">
                   <Calendar className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 uppercase tracking-wider">Data e Hora</p>
                   <p>{new Date(event.startDate).toLocaleDateString('pt-BR')} às {new Date(event.startDate).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</p>
                 </div>
               </div>
               
               <div className="flex items-center gap-2">
                 <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-indigo-500">
                   {event.format === 'Online' ? <Video className="w-5 h-5" /> : <MapPin className="w-5 h-5" />}
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 uppercase tracking-wider">Local / Formato</p>
                   <p>{event.format === 'Online' ? 'Online' : event.format === 'Híbrido' ? `Híbrido (${event.location})` : event.location}</p>
                 </div>
               </div>

               <div className="flex items-center gap-2">
                 <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-indigo-500">
                   <Users className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 uppercase tracking-wider">Inscrições</p>
                   <p>{event.registeredCount} de {event.capacity}</p>
                 </div>
               </div>
            </div>
         </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 overflow-x-auto pb-px">
         <Link href={`/dashboard/events/${event.id}`} className="px-4 py-2 border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2 whitespace-nowrap">
            <Layout className="w-4 h-4" />
            Visão Geral
         </Link>
         <Link href={`/dashboard/events/${event.id}/registrations`} className="px-4 py-2 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium flex items-center gap-2 whitespace-nowrap">
            <Users className="w-4 h-4" />
            Inscritos e Check-in
         </Link>
         <button className="px-4 py-2 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium flex items-center gap-2 whitespace-nowrap">
            <FileText className="w-4 h-4" />
            Programação
         </button>
         <button className="px-4 py-2 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium flex items-center gap-2 whitespace-nowrap">
            <Award className="w-4 h-4" />
            Certificados
         </button>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
               <h2 className="font-bold text-lg text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
                 <Info className="w-5 h-5 text-indigo-500" />
                 Sobre o Evento
               </h2>
               <div className="prose dark:prose-invert prose-indigo max-w-none">
                  {event.description.split('\n').map((para, i) => (
                    <p key={i} className="text-slate-600 dark:text-slate-400">{para}</p>
                  ))}
               </div>
            </div>

            {event.speakers.length > 0 && (
              <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                 <h2 className="font-bold text-lg text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
                   <Users className="w-5 h-5 text-indigo-500" />
                   Palestrantes
                 </h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {event.speakers.map(speaker => (
                      <div key={speaker.id} className="flex gap-4 p-4 border border-slate-100 dark:border-slate-800 rounded-xl hover:shadow-sm transition-shadow">
                         <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-800 shrink-0 overflow-hidden relative">
                            {speaker.avatarUrl && <Image src={speaker.avatarUrl} alt={speaker.name} fill className="object-cover" />}
                         </div>
                         <div>
                            <h4 className="font-bold text-slate-900 dark:text-slate-100">{speaker.name}</h4>
                            <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">{speaker.role} @ {speaker.company}</p>
                            <p className="text-sm text-slate-500 mt-2 line-clamp-2">{speaker.bio}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
            )}
         </div>

         <div className="space-y-6">
            <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
               <h2 className="font-bold text-lg text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
                 <Clock className="w-5 h-5 text-indigo-500" />
                 Programação Resumida
               </h2>
               
               <div className="space-y-4">
                  {event.schedule.length > 0 ? event.schedule.map(item => (
                    <div key={item.id} className="flex gap-4 group">
                       <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300 z-10 border-2 border-white dark:border-slate-950 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                            {item.time}
                          </div>
                          <div className="w-0.5 h-full bg-slate-100 dark:bg-slate-800 -mt-2 group-last:hidden"></div>
                       </div>
                       <div className="pb-4 pt-1 flex-1">
                          <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">{item.title}</h4>
                          <p className="text-xs text-slate-500 mt-1">{item.description}</p>
                       </div>
                    </div>
                  )) : (
                    <p className="text-sm text-slate-500 text-center py-4">Nenhuma programação definida.</p>
                  )}
               </div>
               
               {event.schedule.length > 0 && (
                 <button className="w-full mt-2 py-2 text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors">
                    Ver programação completa
                 </button>
               )}
            </div>
         </div>
      </div>
    </div>
  );
}
