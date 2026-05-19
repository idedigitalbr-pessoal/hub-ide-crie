import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { lmsService } from "@/services/lms.service";
import Link from "next/link";
import { Plus, Edit2, Archive, Activity, Users, MoreHorizontal, Video } from "lucide-react";

export default async function LMSAdminPage() {
  const courses  = (await lmsService.getCourses()).data;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <Breadcrumbs items={[{ label: "Treinamentos", href: "/dashboard/lms" }, { label: "Gestão Edu" }]} />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Gestão de Treinamentos</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Gerencie cursos, aulas, turmas e acompanhe o engajamento.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/dashboard/lms/admin/courses/new" className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
            <Plus className="w-4 h-4" />
            Novo Curso
          </Link>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
             <h2 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
               <Video className="w-5 h-5 text-indigo-500" />
               Catálogo de Cursos
             </h2>
          </div>
          
          <div className="overflow-x-auto">
             <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 bg-slate-50 dark:bg-slate-900 uppercase">
                   <tr>
                      <th className="px-6 py-4 font-semibold">Curso</th>
                      <th className="px-6 py-4 font-semibold">Status</th>
                      <th className="px-6 py-4 font-semibold">Instrutor</th>
                      <th className="px-6 py-4 font-semibold">Nível / Duração</th>
                      <th className="px-6 py-4 font-semibold text-right">Ações</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                   {courses.map(course => (
                      <tr key={course.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                         <td className="px-6 py-4">
                            <div className="font-semibold text-slate-900 dark:text-slate-100">{course.title}</div>
                            <div className="text-slate-500 text-xs mt-0.5">{course.modules.length} módulos</div>
                         </td>
                         <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                               {course.status}
                            </span>
                         </td>
                         <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                            {course.instructor?.name || 'N/A'}
                         </td>
                         <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                            {course.level} / {course.durationInHours}h
                         </td>
                         <td className="px-6 py-4">
                            <div className="flex items-center justify-end gap-2">
                               <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-md transition-colors" title="Editar Curso">
                                  <Edit2 className="w-4 h-4" />
                               </button>
                               <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-md transition-colors" title="Gestão de Turmas">
                                  <Users className="w-4 h-4" />
                               </button>
                               <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors" title="Mais Ações">
                                  <MoreHorizontal className="w-4 h-4" />
                               </button>
                            </div>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
      </div>
    </div>
  );
}
