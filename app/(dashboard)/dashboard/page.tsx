import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { StatCard } from "@/components/ui/stat-card";
import { Users, GraduationCap, Briefcase, Building, ClipboardList, Target } from "lucide-react";
import { 
  MemberGrowthChart, 
  CourseEnrollmentsChart, 
  RecruitmentFunnelChart 
} from "@/components/dashboard/overview-charts";
import { 
  PendingCompaniesList, 
  UpcomingEventsList, 
  ActiveProjectsList, 
  RecentFormsList, 
  AlertsList,
  RecentActivitiesList
} from "@/components/dashboard/dashboard-lists";

export default function DashboardPage() {
  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <Breadcrumbs items={[]} />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Dashboard Administrativo</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Visão geral e indicadores da plataforma IDE Hub.</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            Baixar Relatório
          </button>
          <button className="px-4 py-2 bg-indigo-600 border border-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
            Nova Ação
          </button>
        </div>
      </div>

      {/* KPI Cards Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatCard title="Total Membros" value="2,450" trend="up" trendValue="+15%" icon={Users} className="xl:col-span-2" />
        <StatCard title="Novos (Mês)" value="350" trend="up" trendValue="+22%" />
        <StatCard title="Cursos Ativos" value="12" icon={GraduationCap} />
        <StatCard title="Em Treinamento" value="890" trend="up" trendValue="+5%" className="xl:col-span-2" />
      </div>

      {/* KPI Cards Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatCard title="Vagas Abertas" value="45" trend="up" trendValue="+10" icon={Briefcase} className="xl:col-span-2" />
        <StatCard title="Candidatos" value="1,200" trend="up" trendValue="+150" />
        <StatCard title="Empresas" value="84" icon={Building} />
        <StatCard title="Proj. Ativos" value="15" trend="down" trendValue="-2" icon={Target} className="xl:col-span-2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Charts Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Crescimento de Membros</h3>
                <p className="text-sm text-slate-500">Últimos 6 meses</p>
              </div>
              <select className="text-sm border-slate-200 dark:border-slate-800 rounded-md bg-transparent dark:bg-slate-900 text-slate-700 dark:text-slate-300">
                <option>Últimos 6 meses</option>
                <option>Este ano</option>
              </select>
            </div>
            <MemberGrowthChart />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="mb-6">
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Inscrições em Cursos</h3>
                <p className="text-sm text-slate-500">Alunos ativos por curso</p>
              </div>
              <CourseEnrollmentsChart />
            </div>
            
            <div className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="mb-6">
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Funil de Recrutamento</h3>
                <p className="text-sm text-slate-500">Conversão de candidatos</p>
              </div>
              <RecruitmentFunnelChart />
            </div>
          </div>
        </div>

        {/* Action Column */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Alertas e Pendências</h3>
              <span className="bg-rose-100 text-rose-700 text-xs font-bold px-2 py-0.5 rounded-full">3 Novo</span>
            </div>
            <AlertsList />
          </div>

          <div className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Empresas Aguardando</h3>
                <p className="text-xs text-slate-500">Aprovação de cadastro</p>
              </div>
              <button className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">Ver todas</button>
            </div>
            <PendingCompaniesList />
          </div>

          <div className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Projetos em Andamento</h3>
            </div>
            <ActiveProjectsList />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Próximos Eventos</h3>
          </div>
          <UpcomingEventsList />
        </div>
        
        <div className="lg:col-span-1 bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Últimos Formulários</h3>
          </div>
          <RecentFormsList />
        </div>

        <div className="lg:col-span-2 bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Atividade Recente</h3>
            <button className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">Histórico completo</button>
          </div>
          <RecentActivitiesList />
        </div>
      </div>
    </div>
  );
}

