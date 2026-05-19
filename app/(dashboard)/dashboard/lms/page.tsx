import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { lmsService } from "@/services/lms.service";
import { CourseCard } from "@/components/lms/course-card";
import { 
  BookOpen, 
  Compass, 
  Settings2,
  Award,
  Video
} from "lucide-react";
import Link from "next/link";
import { StatCard } from "@/components/ui/stat-card";

export default async function LMSHomePage() {
  const allCourses  = (await lmsService.getCourses()).data;
  const enrollmentsResponse = (await lmsService.getEnrollmentsByUser('current_user')).data;
  
  const myEnrollments = enrollmentsResponse.map(e => ({
     course: allCourses.find(c => c.id === e.courseId)!,
     enrollment: e
  })).filter(e => e.course);
  
  const completedCount = myEnrollments.filter(e => e.enrollment.status === 'Concluído').length;
  
  const featuredCourse = allCourses[0];
  const regularCourses = allCourses.slice(1);

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <Breadcrumbs items={[{ label: "Treinamentos" }]} />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Academia IDE Hub</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Desenvolva suas habilidades com cursos exclusivos.</p>
        </div>
        <div className="flex items-center gap-2">
           {/* Admin Link - Normally protected by RBAC */}
          <Link href="/dashboard/lms/admin" className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
            <Settings2 className="w-4 h-4" />
            Gestão Edu
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
         <StatCard title="Meus Cursos" value={myEnrollments.length} icon={BookOpen} />
         <StatCard title="Concluídos" value={completedCount} icon={Award} />
         <StatCard title="Cursos Disponíveis" value={allCourses.length} icon={Video} />
         <StatCard title="Horas de Estudo" value="34h" icon={Compass} />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
           <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
             Em andamento
           </h2>
        </div>
        
        {myEnrollments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {myEnrollments.map(({ course, enrollment }) => (
              <CourseCard key={course.id} course={course} progress={enrollment.progressPercentage} />
            ))}
          </div>
        ) : (
          <div className="p-8 text-center bg-slate-50 dark:bg-slate-900/50 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-800 text-slate-500">
             Você não está matriculado em nenhum curso no momento.
          </div>
        )}
      </div>

      <div className="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-6">
        <div className="flex items-center justify-between">
           <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
             Catálogo de Cursos
           </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {featuredCourse && (
             <CourseCard course={featuredCourse} featured />
           )}
           {regularCourses.map(course => {
              // check if already enrolled to not show 'subscribe' but 'progress'
              const eq = myEnrollments.find(e => e.course.id === course.id);
              return <CourseCard key={course.id} course={course} progress={eq?.enrollment.progressPercentage} />;
           })}
        </div>
      </div>
    </div>
  );
}
