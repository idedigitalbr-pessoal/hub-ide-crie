"use client";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Save, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NewProjectPage() {
  const router = useRouter();

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <Breadcrumbs items={[
            { label: "Gestão de Projetos", href: "/dashboard/projects" }, 
            { label: "Novo Projeto" }
          ]} />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Criar Novo Projeto</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Configure um novo projeto para sua equipe.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/dashboard/projects" className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
            <X className="w-4 h-4" />
            Cancelar
          </Link>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
            <Save className="w-4 h-4" />
            Salvar Projeto
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="md:col-span-2 space-y-6">
            <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm p-6 space-y-4">
               <h3 className="font-bold text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">Informações Básicas</h3>
               
               <div className="space-y-4">
                 <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nome do Projeto</label>
                   <input type="text" className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Ex: Redesign do App Mobile" />
                 </div>
                 
                 <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Descrição</label>
                   <textarea className="w-full p-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-h-[100px]" placeholder="Objetivos e detalhes do projeto..." />
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
                     <option>Planejamento</option>
                     <option>Em execução</option>
                   </select>
                 </div>
                 
                 <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Data de Início</label>
                   <input type="date" className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                 </div>

                 <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Data de Conclusão (Opcional)</label>
                   <input type="date" className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                 </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
