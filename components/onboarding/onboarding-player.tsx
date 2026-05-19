"use client";

import { OnboardingTrack } from "@/types/onboarding";
import { PlayCircle, CheckCircle2, ChevronRight, FileText, Video, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Props {
  track: OnboardingTrack;
}

export function OnboardingPlayer({ track }: Props) {
  const [activeLesson, setActiveLesson] = useState(track.modules[0]?.lessons[0]);
  const [activeModule, setActiveModule] = useState<string | null>(track.modules[0]?.id || null);

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-140px)] min-h-[600px]">
      
      {/* Player Section */}
      <div className="flex-1 flex flex-col bg-slate-950 rounded-xl overflow-hidden shadow-xl border border-slate-800">
         {/* Fake Video Player area */}
         <div className="flex-1 relative bg-black flex items-center justify-center">
            {activeLesson?.type === 'video' ? (
              <div className="text-center group cursor-pointer">
                <PlayCircle className="w-20 h-20 text-white/50 group-hover:text-indigo-500 transition-colors mx-auto mb-4" />
                <p className="text-white/50 font-medium">Player Simulado: {activeLesson.title}</p>
              </div>
            ) : (
              <div className="w-full h-full bg-white dark:bg-slate-900 p-12 overflow-y-auto prose dark:prose-invert max-w-none">
                 <h2>{activeLesson?.title}</h2>
                 <p>Conteúdo em texto simulado para a aula. Aqui poderia ter richtext, pdf ou um formulário de quiz.</p>
              </div>
            )}
         </div>
         {/* Player Controls / Info */}
         <div className="p-6 bg-slate-900 text-white flex items-center justify-between shrink-0">
           <div>
             <h2 className="font-bold text-lg">{activeLesson?.title}</h2>
             <p className="text-slate-400 text-sm mt-1">{track.title}</p>
           </div>
           <button className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-bold transition-colors">
             Marcar como Concluída
             <CheckCircle2 className="w-4 h-4" />
           </button>
         </div>
      </div>

      {/* Sidebar: Modules and Lessons */}
      <div className="w-full lg:w-96 flex flex-col bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm shrink-0">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 line-clamp-1">{track.title}</h3>
          
          <div className="mt-4 flex items-center gap-3">
            <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">45% Completo</span>
            <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
               <div className="h-full bg-indigo-600 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {track.modules.map((mod, index) => (
             <div key={mod.id} className="border-b border-slate-200 dark:border-slate-800 last:border-0">
               <button 
                 onClick={() => setActiveModule(activeModule === mod.id ? null : mod.id)}
                 className="w-full flex items-center justify-between p-4 bg-slate-50/50 dark:bg-slate-900/30 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
               >
                 <div className="text-left">
                   <div className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">Módulo {index + 1}</div>
                   <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{mod.title}</div>
                 </div>
                 <ChevronRight className={cn("w-4 h-4 text-slate-400 transition-transform", activeModule === mod.id && "rotate-90")} />
               </button>
               
               {activeModule === mod.id && (
                 <div className="p-2 space-y-1 bg-white dark:bg-slate-950">
                    {mod.lessons.map(lesson => {
                      const isActive = activeLesson?.id === lesson.id;
                      const isCompleted = lesson.id === 'l1' || lesson.id === 'l2'; // Mock completed state

                      return (
                        <button 
                          key={lesson.id}
                          onClick={() => setActiveLesson(lesson)}
                          className={cn(
                            "w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors",
                            isActive 
                              ? "bg-indigo-50 dark:bg-indigo-900/30 ring-1 ring-indigo-200 dark:ring-indigo-800/50" 
                              : "hover:bg-slate-50 dark:hover:bg-slate-900/50"
                          )}
                        >
                          <div className={cn(
                            "w-6 h-6 rounded-full flex items-center justify-center shrink-0 border-2",
                            isCompleted 
                              ? "bg-emerald-500 border-emerald-500 text-white" 
                              : isActive 
                                ? "border-indigo-600 text-indigo-600 dark:text-indigo-400" 
                                : "border-slate-300 dark:border-slate-700 text-slate-400"
                          )}>
                            {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : (
                              lesson.type === 'video' ? <PlayCircle className="w-3 h-3 ml-0.5" /> : 
                              lesson.type === 'quiz' ? <HelpCircle className="w-3 h-3" /> :
                              <FileText className="w-3 h-3" />
                            )}
                          </div>
                          <div className="flex-1">
                             <div className={cn(
                               "text-sm font-medium",
                               isActive ? "text-indigo-900 dark:text-indigo-300" : "text-slate-700 dark:text-slate-300"
                             )}>{lesson.title}</div>
                             <div className="text-[10px] text-slate-500 font-medium font-mono mt-0.5">{lesson.duration}</div>
                          </div>
                        </button>
                      );
                    })}
                 </div>
               )}
             </div>
          ))}
        </div>
      </div>

    </div>
  );
}
