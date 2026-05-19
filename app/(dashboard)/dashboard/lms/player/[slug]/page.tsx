import { lmsService } from "@/services/lms.service";
import { notFound } from "next/navigation";
import { LessonPlayer } from "@/components/lms/lesson-player";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function LMSPlayerPage({ params }: PageProps) {
  const { slug } = await params;
  const course  = (await lmsService.getCourseBySlug(slug)).data;

  if (!course) {
    notFound();
  }

  // Hide the usual padding from the dashboard layout for this specific page if desired, 
  // but let's keep it similar to onboarding player.
  
  return (
    <div className="p-4 md:p-8 max-w-[1600px] mx-auto h-[calc(100vh-64px)] flex flex-col">
      <LessonPlayer course={course} />
    </div>
  );
}
