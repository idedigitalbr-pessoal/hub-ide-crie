import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { memberService } from "@/services/member.service";
import { MemberProfile } from "@/components/members/member-profile";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function MemberDetailsPage({ params }: PageProps) {
  const { id } = await params;
  
  const member  = (await memberService.getMemberById(id)).data;
  
  if (!member) {
    notFound();
  }

  const [timelineRes, documentsRes, coursesRes, eventsRes] = await Promise.all([
    memberService.getMemberTimeline(id),
    memberService.getMemberDocuments(id),
    memberService.getMemberCourses(id),
    memberService.getMemberEvents(id)
  ]);
  
  const timeline = timelineRes.data;
  const documents = documentsRes.data;
  const courses = coursesRes.data;
  const events = eventsRes.data;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      <div className="space-y-1">
        <Breadcrumbs items={[{ label: "Membros", href: "/dashboard/members" }, { label: "Perfil do Membro" }]} />
      </div>

      <MemberProfile 
        member={member} 
        timeline={timeline}
        documents={documents}
        courses={courses}
        events={events}
      />
    </div>
  );
}
