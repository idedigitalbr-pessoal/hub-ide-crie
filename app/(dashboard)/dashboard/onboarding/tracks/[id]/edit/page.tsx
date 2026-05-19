import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { OnboardingTrackEditor } from "@/components/onboarding/onboarding-track-editor";
import { onboardingService } from "@/services/onboarding.service";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditTrackPage({ params }: PageProps) {
  const { id } = await params;
  
  const track  = (await onboardingService.getTrackById(id)).data;
  
  if (!track) {
    notFound();
  }

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-6">
       <div className="space-y-1">
         <Breadcrumbs items={[
           { label: "Onboarding", href: "/dashboard/onboarding" }, 
           { label: "Trilhas", href: "/dashboard/onboarding/tracks" },
           { label: "Editar" }
         ]} />
         <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Editar Trilha</h1>
         <p className="text-sm text-slate-500 dark:text-slate-400">Organize os módulos, aulas e configurações desta trilha.</p>
      </div>

      <OnboardingTrackEditor initialTrack={track} />
    </div>
  );
}
