"use client";

import { OnboardingTrack } from "@/types/onboarding";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { BookOpen, Edit, Plus, Eye, MoreVertical } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  tracks: OnboardingTrack[];
}

export function OnboardingTrackList({ tracks }: Props) {
  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Link href="/dashboard/onboarding/tracks/new" className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors">
          <Plus className="w-4 h-4" />
          Nova Trilha
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map(track => {
          const totalLessons = track.modules.reduce((acc, curr) => acc + curr.lessons.length, 0);

          return (
            <div key={track.id} className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm flex flex-col transition-shadow hover:shadow-md">
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className={cn(
                    "px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full",
                    track.status === 'published' ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-700"
                  )}>
                    {track.status === 'published' ? 'Publicado' : 'Rascunho'}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 leading-tight">{track.title}</h3>
                <p className="text-sm text-slate-500 line-clamp-2">{track.description}</p>
                
                <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1.5 font-medium">
                    <span className="text-slate-900 dark:text-slate-200 font-bold">{track.modules.length}</span> Módulos
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <span className="text-slate-900 dark:text-slate-200 font-bold">{totalLessons}</span> Aulas
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  Criado em {format(new Date(track.createdAt), "dd MMM yyyy", { locale: ptBR })}
                </div>
                <div className="flex items-center gap-2">
                  <Link href={`/dashboard/onboarding/tracks/${track.id}/edit`} className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">
                    <Edit className="w-4 h-4" />
                  </Link>
                  <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
