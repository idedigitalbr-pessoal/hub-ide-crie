import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ThemeToggle } from "@/components/theme-toggle";
import { User, Bell, Shield, Database, Global, Code, Palette, Laptop } from "lucide-react";

export default function SettingsPage() {
  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Configurações", href: "/dashboard/settings" },
  ];

  return (
    <div className="p-8 max-w-[1200px] mx-auto space-y-8">
      <div className="space-y-1">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Configurações Base</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Configure preferências do sistema e as integrações.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1 border-r border-slate-200 dark:border-slate-800 pr-4">
           <nav className="flex flex-col space-y-1">
             <a href="#" className="flex items-center px-3 py-2 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-lg text-sm font-medium transition-colors">
               <Laptop className="w-4 h-4 mr-3" />
               Aparência
             </a>
             <a href="#" className="flex items-center px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg text-sm font-medium transition-colors">
               <Shield className="w-4 h-4 mr-3 text-slate-400" />
               Permissões e Acessos
             </a>
             <a href="#" className="flex items-center px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg text-sm font-medium transition-colors">
               <Bell className="w-4 h-4 mr-3 text-slate-400" />
               Notificações SMS/E-mail
             </a>
             <a href="#" className="flex items-center px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg text-sm font-medium transition-colors">
               <Database className="w-4 h-4 mr-3 text-slate-400" />
               Base de Dados
             </a>
           </nav>
        </aside>

        <main className="lg:col-span-3 space-y-8">
           <section className="space-y-4">
             <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tema do Sistema</h2>
             <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-6 rounded-xl flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-slate-900 dark:text-slate-100">Modo Escuro / Claro</h3>
                  <p className="text-sm text-slate-500 mt-1">Alterne o esquema de cores para sua visualização (admin).</p>
                </div>
                <div className="flex border border-slate-200 dark:border-slate-800 rounded-lg p-1 bg-slate-50 dark:bg-slate-900">
                  <ThemeToggle />
                </div>
             </div>
           </section>

           <section className="space-y-4">
             <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Customização Visual da Plataforma</h2>
             <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-6 rounded-xl space-y-6">
                <div>
                   <label className="text-sm font-medium text-slate-900 dark:text-slate-100 block mb-2">Cor Primária (Hexadecimal)</label>
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded shrink-0 bg-blue-600"></div>
                      <input type="text" defaultValue="#2563EB" className="w-full sm:w-48 px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
                   </div>
                   <p className="text-xs text-slate-500 mt-2">Esta cor será aplicada a botões e elementos chave nos portais.</p>
                </div>

                <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                   <label className="text-sm font-medium text-slate-900 dark:text-slate-100 block mb-2">Logomarca do Sistema</label>
                   <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg p-8 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900/50">
                      <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                       <div className="w-8 h-8 border-[3px] border-white rounded-md rotate-45"></div>
                      </div>
                      <span className="text-sm font-medium text-slate-900 dark:text-slate-100">Arraste e solte ou clique para trocar as logos</span>
                      <span className="text-xs text-slate-500 mt-1">SVG, PNG corporativo transparentes apenas</span>
                   </div>
                </div>

                <div className="flex justify-end pt-4">
                   <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
                      Salvar Alterações
                   </button>
                </div>
             </div>
           </section>
        </main>
      </div>
    </div>
  );
}
