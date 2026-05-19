"use client";

import { Member, MemberTimelineEvent, MemberDocument, MemberCourse, MemberEvent } from "@/types/member";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { MapPin, Phone, Mail, GraduationCap, Briefcase, Calendar, CheckSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { MemberTimeline } from "./member-timeline";
import { MemberDocuments } from "./member-documents";

interface MemberProfileProps {
  member: Member;
  timeline: MemberTimelineEvent[];
  documents: MemberDocument[];
  courses: MemberCourse[];
  events: MemberEvent[];
}

export function MemberProfile({ member, timeline, documents, courses, events }: MemberProfileProps) {
  const [activeTab, setActiveTab] = useState<'timeline' | 'courses' | 'events' | 'documents'>('timeline');

  return (
    <div className="space-y-6">
      {/* Header Profile Card */}
      <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row">
        <div className="p-6 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-900/20 md:w-1/3 shrink-0">
          <div className="w-24 h-24 rounded-full bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-slate-950 flex items-center justify-center font-bold text-3xl text-slate-400 shadow-sm mb-4">
             {member.fullName.substring(0, 2).toUpperCase()}
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 text-center">{member.fullName}</h2>
          <span className={cn(
            "mt-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
            member.status === 'Ativo' && "bg-emerald-100 text-emerald-700",
            member.status === 'Novo cadastro' && "bg-blue-100 text-blue-700",
            member.status === 'Aguardando documentação' && "bg-orange-100 text-orange-700",
            member.status === 'Inativo' && "bg-slate-100 text-slate-700"
          )}>
            {member.status}
          </span>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {member.tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded text-[10px] font-bold">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 flex-1">
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-2">Contato</h3>
            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
              <Mail className="w-4 h-4 text-slate-400" />
              {member.email}
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
              <Phone className="w-4 h-4 text-slate-400" />
              {member.phone} {member.whatsapp && "(WhatsApp)"}
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
              <MapPin className="w-4 h-4 text-slate-400" />
              {member.city}/{member.state}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-2">Perfil</h3>
            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
              <GraduationCap className="w-4 h-4 text-slate-400" />
              {member.educationLevel}
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
              <Briefcase className="w-4 h-4 text-slate-400" />
              {member.professionalSituation} (${member.interestArea})
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
              <Calendar className="w-4 h-4 text-slate-400" />
              Entrou em: {format(new Date(member.createdAt), "dd/MM/yyyy")}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Layout */}
      <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
        <div className="flex overflow-x-auto border-b border-slate-200 dark:border-slate-800">
          {[
            { id: 'timeline', label: 'Linha do Tempo' },
            { id: 'courses', label: 'Cursos (LMS)' },
            { id: 'events', label: 'Eventos' },
            { id: 'documents', label: 'Documentos' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "px-6 py-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors",
                activeTab === tab.id 
                  ? "border-indigo-600 text-indigo-600 dark:text-indigo-400" 
                  : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="p-6">
          {activeTab === 'timeline' && <MemberTimeline events={timeline} />}
          {activeTab === 'documents' && <MemberDocuments documents={documents} />}
          {activeTab === 'courses' && (
            <div className="space-y-4">
              {courses.length ? courses.map(course => (
                 <div key={course.id} className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg flex items-center justify-between">
                   <div>
                     <h4 className="font-medium text-slate-900 dark:text-slate-100">{course.courseName}</h4>
                     <p className="text-xs text-slate-500 mt-1">Inscrito em {format(new Date(course.enrollmentDate), 'dd/MM/yyyy')}</p>
                   </div>
                   <div className="flex items-center gap-4">
                     <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{course.progress}%</span>
                     <span className={cn(
                       "px-2 py-1 rounded text-[10px] font-bold uppercase",
                       course.status === 'Concluído' ? "bg-emerald-100 text-emerald-700" : "bg-indigo-100 text-indigo-700"
                     )}>{course.status}</span>
                   </div>
                 </div>
              )) : <p className="text-slate-500">Nenhum curso inscrito.</p>}
            </div>
          )}
          {activeTab === 'events' && (
            <div className="space-y-4">
              {events.length ? events.map(event => (
                 <div key={event.id} className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg flex items-center justify-between">
                   <div>
                     <h4 className="font-medium text-slate-900 dark:text-slate-100">{event.eventName}</h4>
                     <p className="text-xs text-slate-500 mt-1">{format(new Date(event.date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</p>
                   </div>
                   <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-[10px] font-bold uppercase">{event.status}</span>
                 </div>
              )) : <p className="text-slate-500">Nenhuma participação em eventos.</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
