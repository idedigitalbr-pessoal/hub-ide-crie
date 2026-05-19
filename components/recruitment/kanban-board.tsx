"use client";

import { Application, CandidateProfile, ApplicationStage } from "@/types/recruitment";
import { useState } from "react";
import Image from "next/image";
import { Clock, MessageSquare, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppData {
  app: Application;
  candidate: CandidateProfile;
}

interface Props {
  applicationsData: AppData[];
}

const STAGES: ApplicationStage[] = [
  'Inscrito', 
  'Triagem', 
  'Pré-selecionado', 
  'Entrevista', 
  'Teste técnico', 
  'Aprovado', 
  'Contratado', 
  'Reprovado', 
  'Banco de talentos'
];

export function KanbanBoard({ applicationsData }: Props) {
  const [data, setData] = useState<AppData[]>(applicationsData);

  // Simple column group
  const grouped = STAGES.map(stage => {
    return {
      stage,
      items: data.filter(d => d.app.stage === stage)
    };
  });

  return (
    <div className="w-full h-[600px] overflow-x-auto pb-4 flex gap-4 snap-x">
       {grouped.map(col => (
         <div key={col.stage} className="w-80 shrink-0 flex flex-col bg-slate-50/50 dark:bg-slate-900/30 rounded-xl border border-slate-200 dark:border-slate-800 snap-center">
            <div className="p-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-100/50 dark:bg-slate-900/50 rounded-t-xl">
               <h3 className="font-bold text-sm tracking-tight text-slate-800 dark:text-slate-200 uppercase">{col.stage}</h3>
               <span className="bg-white dark:bg-slate-800 px-2 py-0.5 rounded-full text-xs font-bold text-slate-500 border border-slate-200 dark:border-slate-700 shadow-sm">
                 {col.items.length}
               </span>
            </div>
            
            <div className="p-3 flex-1 overflow-y-auto space-y-3 min-h-[100px]">
               {col.items.map(item => (
                 <div key={item.app.id} className="bg-white dark:bg-slate-950 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors cursor-grab active:cursor-grabbing">
                    <div className="flex items-start justify-between mb-3">
                       <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden shrink-0">
                           {item.candidate.avatarUrl ? (
                             <Image src={item.candidate.avatarUrl} alt={item.candidate.fullName} width={40} height={40} className="object-cover" />
                           ) : (
                             <div className="w-full h-full flex items-center justify-center font-bold text-xs text-slate-500">
                               {item.candidate.fullName.substring(0,2)}
                             </div>
                           )}
                         </div>
                         <div>
                           <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-1">
                             {item.candidate.fullName.split(' ')[0]}
                           </h4>
                           <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 line-clamp-1">{item.candidate.headline}</p>
                         </div>
                       </div>
                       <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                         <MoreHorizontal className="w-4 h-4" />
                       </button>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                       {item.candidate.skills.slice(0, 3).map(skill => (
                         <span key={skill} className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-[10px] font-medium text-slate-600 dark:text-slate-300 rounded">
                           {skill}
                         </span>
                       ))}
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800/50">
                       <div className="flex items-center gap-1">
                         <Clock className="w-3.5 h-3.5" />
                         <span>{new Date(item.app.appliedAt).toLocaleDateString('pt-BR')}</span>
                       </div>
                       {item.app.notes && (
                         <div className="flex items-center gap-1">
                           <MessageSquare className="w-3.5 h-3.5" />
                           <span>Sim</span>
                         </div>
                       )}
                    </div>
                 </div>
               ))}
               
               {col.items.length === 0 && (
                 <div className="h-20 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg flex items-center justify-center text-xs text-slate-400 font-medium">
                   Solte os cards aqui
                 </div>
               )}
            </div>
         </div>
       ))}
    </div>
  );
}
