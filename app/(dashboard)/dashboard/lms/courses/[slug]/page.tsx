import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { lmsService } from "@/services/lms.service";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Clock, BookOpen, User, Star, PlayCircle, Layers, Award } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CourseDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const course  = (await lmsService.getCourseBySlug(slug)).data;

  if (!course) {
    notFound();
  }

  const isEnrolled = (await lmsService.getEnrollmentsByUser('current_user')).data
    .some(e => e.courseId === course.id);

  const totalLessons = course.modules.reduce((acc, mod) => acc + mod.lessons.length, 0);

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      <div className="space-y-1">
        <Breadcrumbs items={[{ label: "Treinamentos", href: "/dashboard/lms" }, { label: course.title }]} />
      </div>

      <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
        <div className="aspect-video relative w-full h-[300px] md:h-[400px]">
          <Image 
            src={course.thumbnailUrl} 
            alt={course.title} 
            fill 
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute top-6 left-6 flex gap-2">
            <span className="px-3 py-1 bg-indigo-600 text-white rounded-md text-xs font-bold uppercase tracking-wider shadow-sm">
              {course.level}
            </span>
          </div>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">{course.title}</h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {course.description}
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Conteúdo do Curso</h3>
              <div className="space-y-4">
                {course.modules.length > 0 ? course.modules.map((mod, i) => (
                  <div key={mod.id} className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                    <div className="p-4 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between">
                       <div>
                         <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">Módulo {i + 1}</div>
                         <h4 className="font-semibold text-slate-900 dark:text-slate-100">{mod.title}</h4>
                       </div>
                       <span className="text-sm font-medium text-slate-500">{mod.lessons.length} aulas</span>
                    </div>
                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                       {mod.lessons.map(lesson => (
                         <div key={lesson.id} className="p-4 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                           <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center shrink-0">
                             {lesson.type === 'video' ? <PlayCircle className="w-4 h-4 ml-0.5" /> : <BookOpen className="w-4 h-4" />}
                           </div>
                           <span className="flex-1 text-sm font-medium text-slate-700 dark:text-slate-300">{lesson.title}</span>
                           <span className="text-xs font-mono text-slate-400">{lesson.durationInMinutes} min</span>
                         </div>
                       ))}
                    </div>
                  </div>
                )) : (
                  <p className="text-slate-500">Módulos em breve.</p>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
               {isEnrolled ? (
                 <div className="space-y-4">
                   <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-lg text-sm font-bold border border-emerald-200 dark:border-emerald-800/50">
                     Você está matriculado
                   </div>
                   <Link href={`/dashboard/lms/player/${course.slug}`} className="flex items-center justify-center gap-2 w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-bold transition-colors shadow-sm">
                     <PlayCircle className="w-4 h-4" />
                     Continuar Estudando
                   </Link>
                 </div>
               ) : (
                 <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-bold transition-colors shadow-sm mb-4">
                   Matricular-se Agora
                 </button>
               )}
               
               <div className="space-y-4 mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Clock className="w-5 h-5 text-slate-400" />
                    <div className="flex-1 text-sm font-medium">Carga horária: {course.durationInHours}h</div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Layers className="w-5 h-5 text-slate-400" />
                    <div className="flex-1 text-sm font-medium">{totalLessons} Aulas em {course.modules.length} Módulos</div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Award className="w-5 h-5 text-slate-400" />
                    <div className="flex-1 text-sm font-medium">Certificado de Conclusão</div>
                  </div>
               </div>
            </div>

            {course.instructor && (
              <div className="bg-white dark:bg-slate-950 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
                 <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">Instrutor</h4>
                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 font-bold text-xl shrink-0">
                      {course.instructor.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-slate-100">{course.instructor.name}</p>
                    </div>
                 </div>
                 <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                   {course.instructor.bio}
                 </p>
                 <div className="flex flex-wrap gap-2">
                   {course.instructor.expertise.map(exp => (
                     <span key={exp} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded text-xs font-medium">
                       {exp}
                     </span>
                   ))}
                 </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Needed because the import above for Award is missing from lucide-react if not added
// Actually Award is exported.
