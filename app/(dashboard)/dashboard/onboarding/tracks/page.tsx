import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { onboardingService } from "@/services/onboarding.service";
import { OnboardingTrackList } from "@/components/onboarding/onboarding-track-list";

export default async function TracksPage() {
  const tracks  = (await onboardingService.getTracks()).data;

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-6">
      <div className="space-y-1">
         <Breadcrumbs items={[{ label: "Onboarding", href: "/dashboard/onboarding" }, { label: "Trilhas" }]} />
         <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Gestão de Trilhas</h1>
         <p className="text-sm text-slate-500 dark:text-slate-400">Crie e gerencie as trilhas de aprendizado e onboarding da plataforma.</p>
      </div>

      <OnboardingTrackList tracks={tracks} />
    </div>
  );
}
