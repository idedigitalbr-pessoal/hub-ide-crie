import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { eventsService } from "@/services/events.service";
import { notFound } from "next/navigation";
import { Users, Layout, FileText, Award, Search, Download, QrCode, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EventRegistrationsPage({ params }: Props) {
  const { id } = await params;
  const event  = (await eventsService.getEventById(id)).data;
  
  if (!event) notFound();

  const registrations  = (await eventsService.getRegistrationsByEvent(event.id)).data;

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8">
      <div className="space-y-1">
        <Breadcrumbs items={[
          { label: "Eventos", href: "/dashboard/events" }, 
          { label: event.title, href: `/dashboard/events/${event.id}` },
          { label: "Inscritos" }
        ]} />
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">{event.title} - Inscritos</h1>
      </div>

      <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 overflow-x-auto pb-px">
         <Link href={`/dashboard/events/${event.id}`} className="px-4 py-2 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium flex items-center gap-2 whitespace-nowrap">
            <Layout className="w-4 h-4" />
            Visão Geral
         </Link>
         <Link href={`/dashboard/events/${event.id}/registrations`} className="px-4 py-2 border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2 whitespace-nowrap">
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

      <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm flex flex-col">
         <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-4 items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
            <div className="relative w-full sm:w-64 shrink-0">
               <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
               <input type="text" placeholder="Buscar por nome ou email..." className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-indigo-500" />
            </div>
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
               <button className="flex-1 flex justify-center items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shrink-0">
                 <QrCode className="w-4 h-4" /> Validar Check-in
               </button>
               <button className="flex-1 flex justify-center items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shrink-0">
                 <Download className="w-4 h-4" /> Exportar Planilha
               </button>
            </div>
         </div>
         
         <div className="overflow-x-auto">
           <table className="w-full text-left text-sm whitespace-nowrap">
             <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400">
               <tr>
                 <th className="px-6 py-3 font-semibold">Inscrito</th>
                 <th className="px-6 py-3 font-semibold">Data da Inscrição</th>
                 <th className="px-6 py-3 font-semibold">Status</th>
                 <th className="px-6 py-3 font-semibold">Check-in</th>
                 <th className="px-6 py-3 font-semibold text-right">Ação</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
               {registrations.map(reg => (
                 <tr key={reg.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors">
                   <td className="px-6 py-4">
                     <div className="font-bold text-slate-900 dark:text-slate-100">{reg.userName}</div>
                     <div className="text-slate-500 text-xs">{reg.userEmail}</div>
                   </td>
                   <td className="px-6 py-4 text-slate-500 dark:text-slate-400">
                      {new Date(reg.registeredAt).toLocaleDateString('pt-BR')} às {new Date(reg.registeredAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                   </td>
                   <td className="px-6 py-4">
                      <span className={cn(
                        "px-2 py-1 rounded text-xs font-bold uppercase tracking-wider",
                        reg.status === 'Confirmada' ? "bg-emerald-50 text-emerald-700 border-emerald-200/50" :
                        reg.status === 'Pendente' ? "bg-amber-50 text-amber-700 border-amber-200/50" :
                        "bg-slate-100 text-slate-600 border-slate-200/50"
                      )}>
                         {reg.status}
                      </span>
                   </td>
                   <td className="px-6 py-4">
                      {reg.checkedInAt ? (
                         <div className="flex items-center gap-1.5 text-emerald-600 font-medium">
                            <CheckCircle2 className="w-4 h-4" /> 
                            <span>{new Date(reg.checkedInAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
                         </div>
                      ) : (
                         <span className="text-slate-400">-</span>
                      )}
                   </td>
                   <td className="px-6 py-4 text-right">
                      {!reg.checkedInAt && (
                         <button className="text-indigo-600 hover:text-indigo-700 font-medium">Fazer Check-in</button>
                      )}
                      {reg.checkedInAt && (
                         <button className="text-slate-400 hover:text-slate-600 font-medium">Desfazer Check-in</button>
                      )}
                   </td>
                 </tr>
               ))}
               {registrations.length === 0 && (
                 <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                       Nenhuma inscrição encontrada para este evento.
                    </td>
                 </tr>
               )}
             </tbody>
           </table>
         </div>
         
         <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between text-sm text-slate-500">
            <span>Exibindo {registrations.length} inscritos</span>
            {registrations.length > 0 && (
               <div className="flex gap-1">
                 <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 disabled:opacity-50">1</button>
               </div>
            )}
         </div>
      </div>
    </div>
  );
}
