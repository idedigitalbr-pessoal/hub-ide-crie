import Image from "next/image";
import Link from "next/link";
import { lmsService } from "@/services/lms.service";
import { BookOpen, Clock, Star } from "lucide-react";

export async function LandingFeaturedCourses() {
  const courses  = (await lmsService.getCourses()).data;
  const featured = courses.slice(0, 3); // Take top 3

  return (
    <section id="cursos" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Desenvolva novas habilidades
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Cursos práticos ministrados por profissionais que vivem o dia a
              dia do mercado.
            </p>
          </div>
          <Link
            href="/dashboard"
            className="shrink-0 text-indigo-600 dark:text-indigo-400 font-medium hover:underline flex items-center gap-2"
          >
            Ver todos os cursos &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((course) => (
            <div
              key={course.id}
              className="group bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={course.thumbnailUrl}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm">
                    {course.level}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                  {course.shortDescription}
                </p>

                <div className="flex items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-400 mb-6 border-t border-slate-100 dark:border-slate-800 pt-4">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> {course.durationInHours}h
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" /> {course.modules.length}{" "}
                    Módulos
                  </div>
                </div>

                <Link
                  href="/dashboard"
                  className="block w-full py-2.5 text-center bg-slate-50 dark:bg-slate-900 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 text-indigo-600 border border-slate-200 dark:border-slate-800 font-bold rounded-lg transition-colors"
                >
                  Detalhes do Curso
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
