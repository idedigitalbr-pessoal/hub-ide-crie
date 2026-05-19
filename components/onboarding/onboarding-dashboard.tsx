"use client";

import { StatCard } from "@/components/ui/stat-card";
import { GraduationCap, Users, CheckCircle2, Clock } from "lucide-react";
import { MemberProgress } from "@/types/onboarding";
import { OnboardingProgressTable } from "./onboarding-progress-table";

interface Props {
  progressData: MemberProgress[];
}

export function OnboardingDashboard({ progressData }: Props) {
  const completed = progressData.filter(p => p.status === 'completed').length;
  const inProgress = progressData.filter(p => p.status === 'in_progress').length;
  const total = progressData.length;
  
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Membros em Onboarding" value={total} icon={Users} />
        <StatCard title="Em Andamento" value={inProgress} icon={Clock} />
        <StatCard title="Concluídos" value={completed} icon={CheckCircle2} />
        <StatCard title="Taxa de Conclusão" value={`${completionRate}%`} icon={GraduationCap} progress={completionRate} />
      </div>

      <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Progresso Recente</h2>
          <p className="text-sm text-slate-500">Acompanhe o status do onboarding dos últimos membros cadastrados.</p>
        </div>
        <div className="p-0">
          <OnboardingProgressTable data={progressData} />
        </div>
      </div>
    </div>
  );
}
