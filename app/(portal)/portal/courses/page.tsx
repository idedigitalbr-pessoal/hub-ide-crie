import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { mockCourses } from "@/lib/mock-lms";
import { CourseCard } from "@/components/lms/course-card";
import Link from "next/link";

export default function PortalCoursesPage() {
  const breadcrumbItems = [
    { label: "Portal", href: "/portal" },
    { label: "Meus Cursos", href: "/portal/courses" },
  ];

  return (
    <div className="p-8 max-w-[1200px] mx-auto space-y-8">
      <div className="space-y-1">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Meus Cursos</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Acompanhe seu progresso e continue de onde parou.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockCourses.map((course) => (
          <div key={course.id} className="relative group">
             {/* Using CourseCard component but wrapping with Link to the portal course player */}
             <Link href={`/portal/courses/${course.slug}`} className="block h-full transition-transform hover:-translate-y-1">
               <CourseCard course={course} />
             </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
