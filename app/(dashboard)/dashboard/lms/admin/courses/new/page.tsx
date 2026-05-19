"use client";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Link2, Save, X, PlusCircle, Trash2, GripVertical } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewCoursePage() {
  const router = useRouter();
  
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <Breadcrumbs items={[
            { label: "Treinamentos", href: "/dashboard/lms" }, 
            { label: "Gestão", href: "/dashboard/lms/admin" },
            { label: "Novo Curso" }
          ]} />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Criar Novo Curso</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Preencha as informações básicas do curso.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/dashboard/lms/admin" className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
            <X className="w-4 h-4" />
            Cancelar
          </Link>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
            <Save className="w-4 h-4" />
            Salvar Curso
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm p-6 space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">Informações Básicas</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Título do Curso</label>
                <input type="text" className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Ex: Fundamentos de React" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Descrição Curta</label>
                <input type="text" className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Uma frase sobre o curso" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Descrição Completa</label>
                <textarea className="w-full p-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-h-[120px]" placeholder="Visão detalhada do que o aluno irá aprender..." />
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm p-6 space-y-4">
             <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
               <h3 className="font-bold text-slate-900 dark:text-slate-100">Construtor de Currículo (Módulos)</h3>
               <button className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:text-indigo-700">
                 <PlusCircle className="w-4 h-4" />
                 Adicionar Módulo
               </button>
             </div>
             
             <div className="space-y-4 pt-2">
                <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-4 bg-slate-50 dark:bg-slate-900/50">
                    <div className="flex items-center justify-between mb-4">
                       <div className="flex items-center gap-3 w-full">
                          <GripVertical className="w-5 h-5 text-slate-400 cursor-move" />
                          <input type="text" className="flex-1 bg-transparent border-0 font-bold text-slate-900 dark:text-slate-100 focus:ring-0 p-0 text-lg" defaultValue="Módulo 1: Introdução" />
                       </div>
                       <button className="p-1 text-slate-400 hover:text-red-500 rounded"><Trash2 className="w-4 h-4" /></button>
                    </div>
                    
                    <div className="space-y-2 pl-8 border-l-2 border-indigo-100 dark:border-indigo-900 ml-2 mt-2">
                       <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded shadow-sm">
                          <div className="flex items-center gap-3">
                             <GripVertical className="w-4 h-4 text-slate-400 cursor-move" />
                             <span className="text-sm font-medium">1. O que é o React? (Vídeo)</span>
                          </div>
                          <button className="p-1 text-slate-400 hover:text-red-500 rounded"><Trash2 className="w-3.5 h-3.5" /></button>
                       </div>
                       <button className="text-xs font-semibold text-slate-500 hover:text-indigo-600 flex items-center gap-1 p-2">
                          <PlusCircle className="w-3.5 h-3.5" />
                          Adicionar Aula
                       </button>
                    </div>
                </div>
             </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm p-6 space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">Configurações</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Status</label>
                <select className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option value="draft">Rascunho</option>
                  <option value="published">Publicado</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nível</label>
                <select className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Iniciante</option>
                  <option>Intermediário</option>
                  <option>Avançado</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Instrutor</label>
                <select className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Carlos Azevedo</option>
                  <option>Julia Ramos</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm p-6 space-y-4">
             <h3 className="font-bold text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">Mídia</h3>
             
             <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Thumbnail (Capa)</label>
                <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-8 text-center hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors cursor-pointer text-slate-500">
                   <div className="mx-auto w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-2 text-indigo-500">
                      <Link2 className="w-6 h-6" />
                   </div>
                   <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Clique para fazer upload</p>
                   <p className="text-xs mt-1">PNG, JPG até 5MB. Recomendado 1280x720.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
