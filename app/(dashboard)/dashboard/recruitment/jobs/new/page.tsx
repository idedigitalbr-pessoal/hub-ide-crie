"use client";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Link2, Save, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NewJobPage() {
  const router = useRouter();
  
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <Breadcrumbs items={[
            { label: "Recrutamento", href: "/dashboard/recruitment" }, 
            { label: "Vagas", href: "/dashboard/recruitment/jobs" },
            { label: "Nova Vaga" }
          ]} />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Criar Nova Vaga</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Preencha as informações para anunciar a oportunidade.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/dashboard/recruitment" className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
            <X className="w-4 h-4" />
            Cancelar
          </Link>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
            <Save className="w-4 h-4" />
            Publicar Vaga
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm p-6 space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">Informações Básicas</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Título da Vaga</label>
                <input type="text" className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Ex: Desenvolvedor Front-end Senior" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Modelo de Trabalho</label>
                   <select className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                     <option>Remoto</option>
                     <option>Híbrido</option>
                     <option>Presencial</option>
                   </select>
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Tipo de Contratação</label>
                   <select className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                     <option>CLT</option>
                     <option>PJ</option>
                     <option>Estágio</option>
                     <option>Freelance</option>
                   </select>
                 </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Localização (Se aplicável)</label>
                <input type="text" className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Ex: São Paulo, SP" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Descrição Detalhada</label>
                <textarea className="w-full p-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-h-[160px]" placeholder="Descreva as responsabilidades, o dia a dia e os diferenciais da vaga..." />
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm p-6 space-y-4">
             <h3 className="font-bold text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">Requisitos e Habilidades</h3>
             
             <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Skills Principais (Tags)</label>
                  <input type="text" className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Aperte Enter para adicionar tags" />
                  <div className="flex flex-wrap gap-2 mt-2">
                     <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded flex items-center gap-1">React <button className="text-slate-400 hover:text-red-500"><X className="w-3 h-3" /></button></span>
                     <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded flex items-center gap-1">Typescript <button className="text-slate-400 hover:text-red-500"><X className="w-3 h-3" /></button></span>
                  </div>
                </div>

                <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Requisitos Obrigatórios</label>
                   <textarea className="w-full p-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-h-[100px]" placeholder="- 3 anos de experiência com..." />
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
                  <option value="published">Aberta</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Faixa Salarial</label>
                <input type="text" className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Ex: R$ 8.000 - R$ 12.000" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
