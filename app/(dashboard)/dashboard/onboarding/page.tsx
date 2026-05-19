import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { onboardingService } from "@/services/onboarding.service";
import { OnboardingDashboard } from "@/components/onboarding/onboarding-dashboard";
import Link from "next/link";
import { Settings, Settings2 } from "lucide-react";

export default async function OnboardingAdminPage() {
  const progressData  = (await onboardingService.getMembersProgress()).data;

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <Breadcrumbs items={[{ label: "Onboarding" }]} />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Onboarding e Integração</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Acompanhe a evolução dos novos membros em suas trilhas iniciais.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/onboarding/tracks" className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
            <Settings2 className="w-4 h-4" />
            Gerenciar Trilhas
          </Link>
        </div>
      </div>

      <OnboardingDashboard progressData={progressData} />
    </div>
  );
}
