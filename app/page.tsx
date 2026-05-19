import { LandingHeader } from "@/components/landing/header";
import { LandingHero } from "@/components/landing/hero";
import { LandingBenefits } from "@/components/landing/benefits";
import { LandingFeaturedCourses } from "@/components/landing/featured-courses";
import { LandingFeaturedEvents } from "@/components/landing/featured-events";
import { LandingFeaturedJobs } from "@/components/landing/featured-jobs";
import { LandingCtaSections } from "@/components/landing/cta-section";
import { LandingFooter } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <LandingHeader />
      <main>
        <LandingHero />
        <LandingBenefits />
        <LandingFeaturedCourses />
        <LandingFeaturedEvents />
        <LandingFeaturedJobs />
        <LandingCtaSections />
      </main>
      <LandingFooter />
    </div>
  );
}
