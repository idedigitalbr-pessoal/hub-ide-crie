"use client";

import { Task, TaskStatus } from "@/types/projects";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, CheckCircle2, Clock, AlignLeft, MessageSquare, MoreHorizontal, X, User, AlertCircle, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";

interface Props {
  tasksData: Task[];
}

const STAGES: TaskStatus[] = [
  'A fazer',
  'Em andamento',
  'Em revisão',
  'Concluída',
  'Bloqueada'
];

export function ProjectKanbanBoard({ tasksData }: Props) {
  const [data, setData] = useState<Task[]>(tasksData);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const draggedTask = data.find((t) => t.id === draggableId);
    if (!draggedTask) return;

    const newStatus = destination.droppableId as TaskStatus;

    // Filter out the dragged task
    const filteredTasks = data.filter((t) => t.id !== draggableId);

    // Get the destination column tasks safely
    const destColumnTasks = filteredTasks.filter((t) => t.status === newStatus);

    // Get tasks from other columns
    const otherTasks = filteredTasks.filter((t) => t.status !== newStatus);

    // Reconstruct destination column with dragged task at specific index
    // Note: this is a simple approximation if we don't have explicit order fields
    destColumnTasks.splice(destination.index, 0, { ...draggedTask, status: newStatus });

    // Combine all
    setData([...otherTasks, ...destColumnTasks]);
  };

  const grouped = STAGES.map(stage => {
    return {
      stage,
      items: data.filter(d => d.status === stage)
    };
  });

  if (!isMounted) return null;

  return (
    <div className="relative">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="w-full h-auto min-h-[600px] overflow-x-auto pb-4 flex gap-4 snap-x relative items-start">
           {grouped.map(col => (
             <div key={col.stage} className="w-80 shrink-0 flex flex-col bg-slate-50/50 dark:bg-slate-900/30 rounded-xl border border-slate-200 dark:border-slate-800 snap-center self-stretch">
                <div className="p-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-100/50 dark:bg-slate-900/50 rounded-t-xl">
                   <h3 className="font-bold text-sm tracking-tight text-slate-800 dark:text-slate-200 uppercase flex items-center gap-2">
                     <div className={cn(
                       "w-2 h-2 rounded-full",
                       col.stage === 'Concluída' ? "bg-emerald-500" :
                       col.stage === 'Em andamento' ? "bg-indigo-500" :
                       col.stage === 'Bloqueada' ? "bg-red-500" :
                       "bg-slate-400"
                     )}></div>
                     {col.stage}
                   </h3>
                   <span className="bg-white dark:bg-slate-800 px-2 py-0.5 rounded-full text-xs font-bold text-slate-500 border border-slate-200 dark:border-slate-700 shadow-sm">
                     {col.items.length}
                   </span>
                </div>
                
                <Droppable droppableId={col.stage}>
                  {(provided, snapshot) => (
                    <div 
                      ref={provided.innerRef} 
                      {...provided.droppableProps}
                      className={cn(
                        "p-3 flex-1 overflow-y-auto min-h-[150px] transition-colors space-y-3",
                        snapshot.isDraggingOver && "bg-slate-100/80 dark:bg-slate-800/80"
                      )}
                    >
                       {col.items.map((task, index) => (
                         <Draggable key={task.id} draggableId={task.id} index={index}>
                           {(provided, snapshot) => (
                             <div 
                               ref={provided.innerRef}
                               {...provided.draggableProps}
                               {...provided.dragHandleProps}
                               onClick={() => setSelectedTask(task)}
                               className={cn(
                                 "bg-white dark:bg-slate-950 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors cursor-pointer",
                                 snapshot.isDragging && "shadow-lg rotate-2 scale-105 border-indigo-400"
                               )}
                               style={{...provided.draggableProps.style}}
                             >
                                <div className="flex items-start justify-between mb-2">
                                   <div className="flex items-center gap-2 mb-2">
                                      <span className={cn(
                                        "px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider",
                                        task.priority === 'Crítica' ? "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400" :
                                        task.priority === 'Alta' ? "bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" :
                                        "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                                      )}>
                                        {task.priority}
                                      </span>
                                   </div>
                                   <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300" onClick={(e) => { e.stopPropagation(); /* logic for more options */ }}>
                                     <MoreHorizontal className="w-4 h-4" />
                                   </button>
                                </div>
                                
                                <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-3 line-clamp-2">
                                  {task.title}
                                </h4>

                                <div className="flex items-center justify-between mt-4">
                                   {task.assigneeName ? (
                                      <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700 relative" title={task.assigneeName}>
                                        {task.assigneeAvatarUrl ? (
                                          <Image src={task.assigneeAvatarUrl} alt={task.assigneeName} fill className="object-cover" />
                                        ) : (
                                          <div className="w-full h-full flex items-center justify-center font-bold text-[10px] text-slate-500">
                                            {task.assigneeName.substring(0,2)}
                                          </div>
                                        )}
                                      </div>
                                   ) : (
                                      <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-400" title="Unassigned">
                                         <CheckCircle2 className="w-3 h-3" />
                                      </div>
                                   )}

                                   {task.dueDate && (
                                     <div className={cn(
                                       "flex items-center gap-1 text-xs font-medium",
                                       new Date(task.dueDate) < new Date() && task.status !== 'Concluída' ? "text-red-500" : "text-slate-500"
                                     )}>
                                       <Calendar className="w-3.5 h-3.5" />
                                       <span>{new Date(task.dueDate).toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' })}</span>
                                     </div>
                                   )}
                                </div>
                             </div>
                           )}
                         </Draggable>
                       ))}
                       {provided.placeholder}
                       {col.items.length === 0 && (
                         <div className="h-20 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg flex items-center justify-center text-xs text-slate-400 font-medium">
                           Solte as tarefas aqui
                         </div>
                       )}
                    </div>
                  )}
                </Droppable>
             </div>
           ))}
        </div>
      </DragDropContext>

      {/* Task Details Side Panel */}
      {selectedTask && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/20 backdrop-blur-sm">
           <div className="w-full max-w-md h-full bg-white dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col transform transition-transform animate-in slide-in-from-right">
              <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
                 <div className="font-bold text-sm text-slate-500 flex items-center gap-2">
                    <div className={cn(
                       "w-2 h-2 rounded-full",
                       selectedTask.status === 'Concluída' ? "bg-emerald-500" :
                       selectedTask.status === 'Em andamento' ? "bg-indigo-500" :
                       selectedTask.status === 'Bloqueada' ? "bg-red-500" :
                       "bg-slate-400"
                     )}></div>
                    {selectedTask.status}
                 </div>
                 <div className="flex items-center gap-2">
                    <button className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500">
                       <MoreHorizontal className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500" onClick={() => setSelectedTask(null)}>
                       <X className="w-5 h-5" />
                    </button>
                 </div>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                 <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{selectedTask.title}</h2>
                    <div className="flex flex-col gap-4">
                       <div className="flex items-center gap-4 text-sm">
                          <div className="w-24 text-slate-500 font-medium flex items-center gap-2"><User className="w-4 h-4"/> Responsável</div>
                          <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-medium">
                            {selectedTask.assigneeName ? (
                              <>
                                <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden border border-slate-200 dark:border-slate-700 relative">
                                  {selectedTask.assigneeAvatarUrl ? (
                                    <Image src={selectedTask.assigneeAvatarUrl} alt={selectedTask.assigneeName} fill className="object-cover" />
                                  ) : (
                                    <div className="w-full h-full flex items-center justify-center font-bold text-[10px] text-slate-500">
                                      {selectedTask.assigneeName.substring(0,2)}
                                    </div>
                                  )}
                                </div>
                                {selectedTask.assigneeName}
                              </>
                            ) : (
                              <span className="text-slate-400 italic">Não atribuído</span>
                            )}
                          </div>
                       </div>
                       <div className="flex items-center gap-4 text-sm">
                          <div className="w-24 text-slate-500 font-medium flex items-center gap-2"><Calendar className="w-4 h-4"/> Data</div>
                          <div className="text-slate-900 dark:text-slate-100 font-medium">
                            {selectedTask.dueDate ? new Date(selectedTask.dueDate).toLocaleDateString('pt-BR') : <span className="text-slate-400 italic">Sem data</span>}
                          </div>
                       </div>
                       <div className="flex items-center gap-4 text-sm">
                          <div className="w-24 text-slate-500 font-medium flex items-center gap-2"><AlertCircle className="w-4 h-4"/> Prioridade</div>
                          <div>
                            <span className={cn(
                              "px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider",
                              selectedTask.priority === 'Crítica' ? "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400" :
                              selectedTask.priority === 'Alta' ? "bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" :
                              "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                            )}>
                              {selectedTask.priority}
                            </span>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="space-y-3">
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2"><AlignLeft className="w-5 h-5"/> Descrição</h3>
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 min-h-[100px]">
                      {selectedTask.description || <span className="text-slate-500 italic">Nenhuma descrição fornecida para esta tarefa.</span>}
                    </div>
                 </div>
                 
                 <div className="space-y-4">
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2"><CheckCircle2 className="w-5 h-5"/> Subtarefas</h3>
                    <div className="space-y-2">
                       <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-2 rounded border border-slate-200 dark:border-slate-800">
                          <input type="checkbox" className="rounded w-4 h-4 text-indigo-600 focus:ring-indigo-500" />
                          <span>Mapear requisitos da nova tela</span>
                       </div>
                       <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-2 rounded border border-slate-200 dark:border-slate-800 line-through opacity-60">
                          <input type="checkbox" defaultChecked className="rounded w-4 h-4 text-indigo-600 focus:ring-indigo-500" />
                          <span>Reunião de alinhamento com a equipe</span>
                       </div>
                       <button className="text-sm font-medium text-slate-500 hover:text-indigo-600 flex items-center gap-1 mt-2">
                          <Plus className="w-4 h-4" /> Adicionar item
                       </button>
                    </div>
                 </div>
              </div>
              <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex gap-3">
                  <button className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
                     Salvar
                  </button>
                  <button className="flex-1 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium rounded-lg transition-colors">
                     Arquivar
                  </button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}
