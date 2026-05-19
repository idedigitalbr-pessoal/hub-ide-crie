import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { OnboardingPlayer } from "@/components/onboarding/onboarding-player";
import { onboardingService } from "@/services/onboarding.service";
import { notFound } from "next/navigation";

export default async function MemberPlayerPage() {
  // Using a mock track for the player demo
  const track  = (await onboardingService.getTrackById('1')).data;
  
  if (!track) {
    notFound();
  }

  return (
    <div className="p-4 md:p-8 max-w-[1600px] mx-auto space-y-4">
      <div className="flex items-center justify-between">
         <Breadcrumbs items={[{ label: "Meu Aprendizado", href: "#" }, { label: track.title }]} />
      </div>
      
      <OnboardingPlayer track={track} />
    </div>
  );
}
