import { BarChart3, TrendingUp, Users, BookOpen } from "lucide-react";
import { StatCard } from "@/components/ui/stat-card";

export default async function ReportsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Relatórios e Análises</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Visão geral do desempenho da plataforma</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total de Alunos" value="1,240" icon={Users} trend="up" trendValue="+12%" />
        <StatCard title="Cursos Concluídos" value="845" icon={BookOpen} trend="up" trendValue="+5%" />
        <StatCard title="Taxa de Engajamento" value="68%" icon={TrendingUp} trend="down" trendValue="-2%" />
        <StatCard title="Projetos Entregues" value="312" icon={BarChart3} trend="up" trendValue="+18%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
           <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6">Acessos por Semana</h3>
           <div className="h-64 flex items-end gap-2 justify-between">
              {/* Mock Bar Chart */}
              {[40, 60, 45, 80, 55, 90, 75].map((val, i) => (
                <div key={i} className="w-full bg-indigo-100 dark:bg-indigo-900/30 rounded-t-sm relative group cursor-pointer hover:bg-indigo-200 dark:hover:bg-indigo-800/50 transition-colors" style={{ height: `${val}%` }}>
                   <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {val}k
                   </div>
                   <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-500 font-medium">
                      {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'][i]}
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
           <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6">Conclusão de Cursos</h3>
           <div className="h-64 flex flex-col justify-center gap-4">
              {/* Mock Horizontal Bar Chart */}
              {[
                { name: 'Desenvolvimento Web', val: 85 },
                { name: 'Design UX/UI', val: 65 },
                { name: 'Marketing Digital', val: 40 },
                { name: 'Gestão Ágil', val: 92 },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                   <div className="w-32 text-sm text-slate-600 dark:text-slate-400 font-medium truncate">{item.name}</div>
                   <div className="flex-1 h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${item.val}%` }}></div>
                   </div>
                   <div className="w-8 text-sm font-bold text-slate-700 dark:text-slate-300 text-right">{item.val}%</div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
