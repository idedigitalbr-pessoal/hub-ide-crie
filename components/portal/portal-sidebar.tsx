"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  GraduationCap,
  Briefcase,
  Kanban,
  Calendar,
  User,
  Settings,
  Menu
} from "lucide-react";

const navigation = [
  { name: "Início", href: "/portal", icon: LayoutDashboard },
  { name: "Meus Cursos", href: "/portal/courses", icon: GraduationCap },
  { name: "Meus Projetos", href: "/portal/projects", icon: Kanban },
  { name: "Eventos", href: "/portal/events", icon: Calendar },
  { name: "Vagas e Oportunidades", href: "/portal/jobs", icon: Briefcase },
  { name: "Meu Perfil", href: "/portal/profile", icon: User },
];

export function PortalSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0 transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
              <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45"></div>
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-800 dark:text-slate-100 whitespace-nowrap">
              Meu Portal
            </span>
          </div>
        )}
        {collapsed && (
           <div className="mx-auto w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
             <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45"></div>
           </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn("p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500", collapsed && "hidden md:flex")}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {navigation.map((item) => {
          // Exact match up to subroutes
          const isActive = pathname === item.href || (pathname?.startsWith(item.href + '/') && item.href !== '/portal');
          const isHomeActive = pathname === '/portal' && item.href === '/portal';
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors group relative",
                (isActive || isHomeActive)
                  ? "bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
              )}
              title={collapsed ? item.name : undefined}
            >
              <item.icon className={cn("w-5 h-5 shrink-0", (isActive || isHomeActive) ? "text-blue-700 dark:text-blue-400" : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300")} />
              {!collapsed && <span className="truncate">{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-100 dark:border-slate-800">
        <div className={cn("flex items-center gap-3", collapsed ? "justify-center" : "")}>
          <div className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-800 shrink-0 overflow-hidden">
            {/* Placeholder avatar */}
            <img src="https://i.pravatar.cc/150?u=a" alt="User Avatar" />
          </div>
          {!collapsed && (
            <div className="overflow-hidden flex flex-col items-start gap-1">
              <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">Ana Souza</div>
              <div className="flex flex-wrap gap-1 mt-0.5">
                <span className="px-1.5 py-0.5 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-400 rounded text-[10px] font-medium whitespace-nowrap">
                  Membro IDE
                </span>
                <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400 rounded text-[10px] font-medium whitespace-nowrap">
                  Aluno
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
