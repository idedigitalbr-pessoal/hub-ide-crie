import { Course } from "@/types/lms";
import { Clock, BookOpen, Star, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: Course;
  progress?: number;
  featured?: boolean;
}

export function CourseCard({ course, progress, featured = false }: CourseCardProps) {
  const totalLessons = course.modules.reduce((acc, mod) => acc + mod.lessons.length, 0);

  return (
    <div className={cn(
      "group bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col",
      featured && "md:flex-row md:col-span-2 lg:col-span-3 lg:min-h-[300px]"
    )}>
      <div className={cn(
        "relative overflow-hidden shrink-0",
        featured ? "w-full md:w-2/5" : "w-full aspect-video"
      )}>
        <Image 
          src={course.thumbnailUrl} 
          alt={course.title} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-105" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        
        {progress !== undefined && (
          <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold shadow-sm">
             {progress === 100 ? (
               <span className="text-emerald-600 dark:text-emerald-400">Concluído</span>
             ) : progress > 0 ? (
               <span className="text-indigo-600 dark:text-indigo-400">{progress}% Completo</span>
             ) : (
               <span className="text-slate-600 dark:text-slate-400">Não iniciado</span>
             )}
          </div>
        )}
        
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 text-[10px] uppercase font-bold tracking-wider">
           <span className="bg-indigo-600 text-white px-2 py-1 rounded-md">{course.level}</span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className={cn(
              "font-bold text-slate-900 dark:text-slate-100 hover:text-indigo-600 transition-colors line-clamp-2",
              featured ? "text-2xl" : "text-lg"
            )}>
              <Link href={`/dashboard/lms/courses/${course.slug}`}>{course.title}</Link>
            </h3>
          </div>
          <p className="text-sm text-slate-500 line-clamp-2 mb-4">{featured ? course.description : course.shortDescription}</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {course.durationInHours}h
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" />
              {totalLessons} aulas
            </div>
            {course.instructor && (
              <div className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                 {course.instructor.name}
              </div>
            )}
          </div>
          
          {progress !== undefined && (
             <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
               <div 
                 className={cn(
                   "h-full rounded-full transition-all duration-500",
                   progress === 100 ? "bg-emerald-500" : "bg-indigo-600"
                 )} 
                 style={{ width: `${progress}%` }} 
               />
             </div>
          )}

          <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
             {progress !== undefined ? (
               <Link href={`/dashboard/lms/player/${course.slug}`} className="flex items-center justify-center gap-2 w-full py-2 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 rounded-lg text-sm font-bold transition-colors">
                 <PlayCircle className="w-4 h-4" />
                 {progress > 0 ? (progress === 100 ? 'Revisar Conteúdo' : 'Continuar Aula') : 'Iniciar Curso'}
               </Link>
             ) : (
               <Link href={`/dashboard/lms/courses/${course.slug}`} className="block text-center w-full py-2 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-bold transition-colors">
                 Ver Detalhes
               </Link>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}
