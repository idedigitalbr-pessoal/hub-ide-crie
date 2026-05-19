import { MemberTimelineEvent } from "@/types/member";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { User, BookOpen, Calendar, FileText, Settings } from "lucide-react";

interface Props {
  events: MemberTimelineEvent[];
}

export function MemberTimeline({ events }: Props) {
  if (!events.length) {
    return <div className="text-center p-6 text-slate-500">Nenhum evento registrado.</div>;
  }

  return (
    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-800 before:to-transparent">
      {events.map((event) => {
        let Icon = Settings;
        let colorClass = "bg-slate-100 text-slate-500 border-slate-200";
        
        switch (event.type) {
          case 'general': Icon = User; colorClass = "bg-blue-100 text-blue-600 border-blue-200 dark:bg-blue-900/30 dark:border-blue-800"; break;
          case 'course': Icon = BookOpen; colorClass = "bg-purple-100 text-purple-600 border-purple-200 dark:bg-purple-900/30 dark:border-purple-800"; break;
          case 'event': Icon = Calendar; colorClass = "bg-emerald-100 text-emerald-600 border-emerald-200 dark:bg-emerald-900/30 dark:border-emerald-800"; break;
          case 'document': Icon = FileText; colorClass = "bg-amber-100 text-amber-600 border-amber-200 dark:bg-amber-900/30 dark:border-amber-800"; break;
        }

        return (
          <div key={event.id} className="relative flex flex-col md:flex-row items-center justify-between md:odd:flex-row-reverse group">
            <div className={cn("flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10", colorClass)}>
              <Icon className="w-4 h-4" />
            </div>
            
            <div className="w-full md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm mt-4 md:mt-0">
              <div className="flex justify-between items-start mb-1">
                <span className="font-bold text-sm text-slate-900 dark:text-slate-100">{event.title}</span>
                <span className="text-xs text-slate-500 font-medium">
                  {format(new Date(event.date), "dd MMM yyyy, HH:mm", { locale: ptBR })}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">
                {event.description}
              </p>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Por: {event.user}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
