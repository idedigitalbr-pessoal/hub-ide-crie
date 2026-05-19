"use client";

import { useState } from "react";
import { OnboardingTrack } from "@/types/onboarding";
import { Plus, GripVertical, Settings, Video, FileText, HelpCircle, FileDown, Trash2 } from "lucide-react";

interface Props {
  initialTrack?: OnboardingTrack;
}

export function OnboardingTrackEditor({ initialTrack }: Props) {
  const [trackTitle, setTrackTitle] = useState(initialTrack?.title || "");
  const [trackDesc, setTrackDesc] = useState(initialTrack?.description || "");

  // Minimal state for demonstration
  const [modules, setModules] = useState(initialTrack?.modules || []);

  const addModule = () => {
    setModules([
      ...modules,
      {
        id: `m-new-${Date.now()}`,
        title: "Novo Módulo",
        description: "",
        lessons: [],
      },
    ]);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Título da Trilha</label>
              <input 
                type="text" 
                value={trackTitle}
                onChange={(e) => setTrackTitle(e.target.value)}
                className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Ex: Trilha de Integração 2026"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Descrição</label>
              <textarea 
                value={trackDesc}
                onChange={(e) => setTrackDesc(e.target.value)}
                rows={3}
                className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                placeholder="Descreva o propósito desta trilha..."
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Conteúdo programático</h3>
            <button onClick={addModule} className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <Plus className="w-4 h-4" /> Adicionar Módulo
            </button>
          </div>

          <div className="space-y-4">
            {modules.map((mod, index) => (
              <div key={mod.id} className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                  <div className="cursor-grab text-slate-400 hover:text-slate-600">
                    <GripVertical className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">Módulo {index + 1}</div>
                    <input 
                      type="text" 
                      value={mod.title}
                      className="w-full bg-transparent font-semibold border-none p-0 outline-none text-slate-900 dark:text-slate-100 focus:ring-0" 
                      readOnly
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="p-4 space-y-2">
                  {mod.lessons.map((lesson) => (
                    <div key={lesson.id} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-slate-300 group transition-colors">
                      <div className="cursor-grab text-slate-300 group-hover:text-slate-400">
                        <GripVertical className="w-4 h-4" />
                      </div>
                      <div className="w-8 h-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 shrink-0">
                        {lesson.type === 'video' && <Video className="w-4 h-4" />}
                        {lesson.type === 'text' && <FileText className="w-4 h-4" />}
                        {lesson.type === 'quiz' && <HelpCircle className="w-4 h-4" />}
                        {lesson.type === 'document' && <FileDown className="w-4 h-4" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{lesson.title}</p>
                      </div>
                      <span className="text-xs font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                        {lesson.duration}
                      </span>
                      <button className="p-1.5 text-slate-400 hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-all">
                        <Settings className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  
                  <button className="w-full mt-2 py-3 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium text-slate-500 hover:text-indigo-600 hover:border-indigo-300 dark:hover:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all flex items-center justify-center gap-2">
                    <Plus className="w-4 h-4" /> Adicionar Aula
                  </button>
                </div>
              </div>
            ))}
            
            {modules.length === 0 && (
              <div className="text-center p-12 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                <p className="text-slate-500 text-sm">Nenhum módulo adicionado. Comece criando o primeiro módulo da trilha.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="lg:col-span-1">
         <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm sticky top-6">
           <div className="p-4 border-b border-slate-200 dark:border-slate-800">
             <h3 className="font-semibold text-slate-900 dark:text-slate-100">Configurações da Trilha</h3>
           </div>
           <div className="p-4 space-y-4">
             <div>
               <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Status</label>
               <select className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-slate-100 outline-none focus:ring-2 focus:ring-indigo-500">
                 <option value="draft">Rascunho</option>
                 <option value="published">Publicado</option>
                 <option value="archived">Arquivado</option>
               </select>
             </div>
             <div>
               <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Público-alvo</label>
               <select className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-slate-100 outline-none focus:ring-2 focus:ring-indigo-500">
                 <option value="all">Todos os novos membros</option>
                 <option value="instructors">Apenas Instrutores</option>
                 <option value="companies">Apenas Empresas</option>
               </select>
             </div>
             
             <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
               <label className="flex items-start gap-3 cursor-pointer">
                 <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" defaultChecked />
                 <div>
                   <span className="block text-sm font-medium text-slate-900 dark:text-slate-100">Exigir checklist/termos</span>
                   <span className="block text-xs text-slate-500">Membro deve aceitar os termos da plataforma.</span>
                 </div>
               </label>
             </div>

             <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
               <label className="flex items-start gap-3 cursor-pointer">
                 <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" defaultChecked />
                 <div>
                   <span className="block text-sm font-medium text-slate-900 dark:text-slate-100">Emitir certificado</span>
                   <span className="block text-xs text-slate-500">Ao concluir 100% da trilha.</span>
                 </div>
               </label>
             </div>
           </div>
           <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2 rounded-b-xl">
             <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
               Salvar e Publicar
             </button>
             <button className="w-full py-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
               Salvar como Rascunho
             </button>
           </div>
         </div>
      </div>
    </div>
  );
}
