"use client";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Link2, Save, X, Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NewFormPage() {
  const router = useRouter();

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <Breadcrumbs items={[
            { label: "Formulários", href: "/dashboard/forms" }, 
            { label: "Novo Formulário" }
          ]} />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Criar Novo Formulário</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Configure as perguntas e opções da sua pesquisa.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/dashboard/forms" className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
            <X className="w-4 h-4" />
            Cancelar
          </Link>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
            <Save className="w-4 h-4" />
            Salvar e Publicar
          </button>
        </div>
      </div>

      <div className="space-y-6">
         <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm p-6 space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">Informações Básicas</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Título do Formulário</label>
                <input type="text" className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Ex: Pesquisa de Clima Organizacional" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Descrição</label>
                <textarea className="w-full p-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-h-[100px]" placeholder="Objetivos do formulário e instruções de preenchimento..." />
              </div>
            </div>
         </div>

         <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-8 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-white dark:bg-slate-950 rounded-full flex items-center justify-center text-indigo-500 mb-4 shadow-sm border border-slate-200 dark:border-slate-800">
               <Plus className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Adicionar Pergunta</h3>
            <p className="text-sm text-slate-500 max-w-sm mb-6">Comece a construir o seu formulário adicionando campos de texto, múltipla escolha, caixas de seleção, etc.</p>
            <button className="px-6 py-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-indigo-600 dark:text-indigo-400 font-bold rounded-lg shadow-sm hover:border-indigo-300 transition-colors">
               Novo Campo
            </button>
         </div>
      </div>
    </div>
  );
}
