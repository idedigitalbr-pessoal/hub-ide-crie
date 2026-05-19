"use client";

import { Course } from "@/types/lms";
import { PlayCircle, CheckCircle2, ChevronRight, FileText, Video, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  course: Course;
}

export function LessonPlayer({ course }: Props) {
  const defaultLesson = course.modules[0]?.lessons[0];
  const [activeLesson, setActiveLesson] = useState(defaultLesson);
  const [activeModule, setActiveModule] = useState<string | null>(course.modules[0]?.id || null);

  if (!course.modules.length) {
    return (
      <div className="h-[600px] flex items-center justify-center text-slate-500">
        Nenhum módulo cadastrado neste curso.
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-140px)] min-h-[600px]">
      {/* Sidebar: Modules and Lessons */}
      <div className="w-full lg:w-96 flex flex-col bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm shrink-0 order-2 lg:order-1">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 shrink-0">
          <Link href="/dashboard/lms" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors mb-4">
             <ArrowLeft className="w-4 h-4" />
             Voltar ao painel
          </Link>
          <h3 className="font-bold text-slate-900 dark:text-slate-100 line-clamp-2 leading-tight">{course.title}</h3>
          
          <div className="mt-4 flex items-center gap-3">
            <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">45% Completo</span>
            <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
               <div className="h-full bg-indigo-600 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {course.modules.map((mod, index) => (
             <div key={mod.id} className="border-b border-slate-200 dark:border-slate-800 last:border-0">
               <button 
                 onClick={() => setActiveModule(activeModule === mod.id ? null : mod.id)}
                 className="w-full flex items-center justify-between p-4 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
               >
                 <div className="text-left pr-4">
                   <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Módulo {index + 1}</div>
                   <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 line-clamp-2">{mod.title}</div>
                 </div>
                 <ChevronRight className={cn("w-4 h-4 text-slate-400 transition-transform shrink-0", activeModule === mod.id && "rotate-90")} />
               </button>
               
               {activeModule === mod.id && (
                 <div className="p-2 space-y-1 bg-slate-50/50 dark:bg-slate-900/30">
                    {mod.lessons.map(lesson => {
                      const isActive = activeLesson?.id === lesson.id;
                      const isCompleted = lesson.id === 'les_1'; // Mock completed state

                      return (
                        <button 
                          key={lesson.id}
                          onClick={() => setActiveLesson(lesson)}
                          className={cn(
                            "w-full flex items-start gap-3 p-3 rounded-lg text-left transition-colors",
                            isActive 
                              ? "bg-indigo-50 dark:bg-indigo-900/30 ring-1 ring-indigo-200 dark:ring-indigo-800/50" 
                              : "hover:bg-slate-100 dark:hover:bg-slate-800/50"
                          )}
                        >
                          <div className={cn(
                            "w-6 h-6 rounded-full flex items-center justify-center shrink-0 border-2 mt-0.5",
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
                               "text-sm font-medium line-clamp-2 leading-tight",
                               isActive ? "text-indigo-900 dark:text-indigo-300" : "text-slate-700 dark:text-slate-300"
                             )}>{lesson.title}</div>
                             <div className="text-[10px] text-slate-500 font-medium font-mono mt-1">{lesson.durationInMinutes} min</div>
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

      {/* Player Section */}
      <div className="flex-1 flex flex-col bg-slate-950 rounded-xl overflow-hidden shadow-xl border border-slate-800 order-1 lg:order-2">
         {/* Fake Video Player area */}
         <div className="flex-1 relative bg-black flex items-center justify-center">
            {activeLesson?.type === 'video' ? (
              <div className="text-center group cursor-pointer p-8">
                <PlayCircle className="w-20 h-20 text-white/50 group-hover:text-indigo-500 transition-colors mx-auto mb-4" />
                <p className="text-white/80 font-medium text-lg">Player Simulado</p>
                <p className="text-white/50 text-sm mt-2">Vídeo: {activeLesson.title}</p>
              </div>
            ) : activeLesson?.type === 'quiz' ? (
              <div className="w-full h-full bg-slate-50 dark:bg-slate-900 p-8 md:p-12 overflow-y-auto">
                 <div className="max-w-2xl mx-auto space-y-8">
                   <div className="text-center">
                     <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4">
                       <HelpCircle className="w-8 h-8" />
                     </div>
                     <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Quiz de Avaliação</h2>
                     <p className="text-slate-500 mt-2">Responda as questões para testar seus conhecimentos.</p>
                   </div>
                   
                   {activeLesson.quizQuestions?.map((q, idx) => (
                     <div key={q.id} className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm">
                       <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-4">{idx + 1}. {q.question}</h3>
                       <div className="space-y-3">
                         {q.options.map((opt, oIdx) => (
                           <label key={oIdx} className="flex items-center gap-3 p-4 border border-slate-200 dark:border-slate-800 rounded-lg cursor-pointer hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                             <input type="radio" name={`q_${q.id}`} className="w-5 h-5 text-indigo-600 focus:ring-indigo-500 border-slate-300" />
                             <span className="font-medium text-slate-700 dark:text-slate-300">{opt}</span>
                           </label>
                         ))}
                       </div>
                     </div>
                   ))}
                   
                   <div className="flex justify-end">
                     <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold transition-colors shadow-sm">
                       Finalizar Quiz
                     </button>
                   </div>
                 </div>
              </div>
            ) : (
              <div className="w-full h-full bg-white dark:bg-slate-900 p-8 md:p-12 overflow-y-auto prose dark:prose-invert max-w-none">
                 <h2>{activeLesson?.title}</h2>
                 <p>Conteúdo em texto simulado para a aula. Aqui poderia ter richtext, pdf ou um formulário de quiz.</p>
              </div>
            )}
         </div>
         {/* Player Controls / Info */}
         <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0 border-t border-slate-800">
           <div>
             <div className="flex items-center gap-2 mb-1">
               <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 rounded text-[10px] font-bold uppercase tracking-wider border border-indigo-500/30">
                 {activeLesson?.type}
               </span>
               <span className="text-slate-400 text-sm font-mono">{activeLesson?.durationInMinutes} min</span>
             </div>
             <h2 className="font-bold text-lg leading-tight mt-2">{activeLesson?.title}</h2>
           </div>
           
           <div className="flex items-center gap-3">
             <button className="flex-1 sm:flex-none justify-center flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-bold transition-colors">
               Marcar como Concluída
               <CheckCircle2 className="w-4 h-4" />
             </button>
           </div>
         </div>
      </div>

    </div>
  );
}
