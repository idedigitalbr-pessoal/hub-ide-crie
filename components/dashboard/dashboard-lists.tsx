"use client";

import { 
  Building2, 
  CalendarDays, 
  Target, 
  ClipboardCheck, 
  AlertTriangle,
  Info,
  XCircle,
  MoreVertical,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  pendingCompanies, 
  upcomingEvents, 
  activeProjects, 
  recentForms, 
  alerts,
  recentActivities
} from '@/lib/mock-data';

export function PendingCompaniesList() {
  return (
    <div className="space-y-4">
      {pendingCompanies.map(company => (
        <div key={company.id} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-100/50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{company.name}</p>
              <p className="text-xs text-slate-500 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {company.requestedAt}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1.5 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-md transition-colors title='Aprovar'">
              <CheckCircle2 className="w-4 h-4" />
            </button>
            <button className="p-1.5 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-md transition-colors title='Rejeitar'">
              <XCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export function UpcomingEventsList() {
  return (
    <div className="space-y-4">
      {upcomingEvents.map(event => (
        <div key={event.id} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100/50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
              <CalendarDays className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{event.title}</p>
              <p className="text-xs text-slate-500 font-medium">{event.date}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{event.attendees}</p>
            <p className="text-[10px] uppercase tracking-wider text-slate-400">Inscritos</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ActiveProjectsList() {
  return (
    <div className="space-y-4">
      {activeProjects.map(project => (
        <div key={project.id} className="flex flex-col gap-2 p-4 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-slate-500" />
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{project.name}</p>
            </div>
            <span className={cn(
              "text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider",
              project.status === 'on_track' && "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
              project.status === 'delayed' && "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
              project.status === 'at_risk' && "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
            )}>
              {project.status === 'on_track' ? 'No Prazo' : project.status === 'delayed' ? 'Atrasado' : 'Em Risco'}
            </span>
          </div>
          <div className="flex items-center gap-3 mt-1">
            <div className="h-1.5 flex-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div 
                className={cn(
                  "h-full rounded-full",
                  project.status === 'on_track' ? "bg-emerald-500" : project.status === 'delayed' ? "bg-rose-500" : "bg-amber-500"
                )} 
                style={{ width: `${project.progress}%` }} 
              />
            </div>
            <span className="text-xs font-medium text-slate-500 w-8">{project.progress}%</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function RecentFormsList() {
  return (
    <div className="space-y-4">
      {recentForms.map(form => (
        <div key={form.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center shrink-0">
              <ClipboardCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{form.title}</p>
              <p className="text-xs text-slate-500">por {form.submittedBy}</p>
            </div>
          </div>
          <span className="text-xs text-slate-400">{form.submittedAt}</span>
        </div>
      ))}
    </div>
  );
}

export function AlertsList() {
  return (
    <div className="space-y-3">
      {alerts.map(alert => (
        <div key={alert.id} className={cn(
          "flex items-start gap-3 p-3 rounded-lg border-l-4",
          alert.type === 'error' && "border-rose-500 bg-rose-50/50 dark:bg-rose-900/10",
          alert.type === 'warning' && "border-amber-500 bg-amber-50/50 dark:bg-amber-900/10",
          alert.type === 'info' && "border-blue-500 bg-blue-50/50 dark:bg-blue-900/10"
        )}>
          {alert.type === 'error' && <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />}
          {alert.type === 'warning' && <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />}
          {alert.type === 'info' && <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />}
          
          <div className="flex-1">
            <p className="text-sm text-slate-800 dark:text-slate-200 leading-snug">{alert.message}</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1 font-medium">{alert.time}</p>
          </div>
          <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}

export function RecentActivitiesList() {
  return (
    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-800 before:to-transparent">
      {recentActivities.map(activity => (
        <div key={activity.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-slate-100 dark:bg-slate-800 text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 text-xs font-bold font-mono">
            {activity.userInitials}
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-sm text-slate-900 dark:text-slate-100">{activity.user}</span>
              <span className="text-xs text-slate-500 font-medium">{activity.time}</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {activity.action} <span className="font-medium text-slate-900 dark:text-slate-200">{activity.target}</span>.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
