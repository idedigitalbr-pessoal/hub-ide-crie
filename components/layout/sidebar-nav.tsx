"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Building,
  Calendar,
  FileText,
  Kanban,
  ClipboardList,
  BarChart3,
  Settings,
  Menu,
  ChevronDown,
  ChevronRight,
  Gift,
  Network,
  Briefcase,
  BookOpen,
  Bell,
  GraduationCap,
  Award,
  FolderOpen,
  CheckSquare,
  Truck,
  FileBadge
} from "lucide-react";

type NavItem = {
  name: string;
  href: string;
  icon: any;
  subItems?: { name: string; href: string }[];
};

type NavGroup = {
  group: string;
  items: NavItem[];
};

const navigation: NavGroup[] = [
  {
    group: "Visão Geral",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    ]
  },
  {
    group: "Estrutura Organizacional",
    items: [
      { name: "Membros", href: "/dashboard/members", icon: Users },
      { name: "Aniversariantes", href: "/dashboard/birthdays", icon: Gift },
      { name: "Coordenações", href: "/dashboard/departments", icon: Network },
      { name: "Cargos", href: "/dashboard/roles", icon: Briefcase },
      { name: "Procedimentos", href: "/dashboard/procedures", icon: BookOpen },
      { name: "Avisos", href: "/dashboard/notices", icon: Bell },
      { name: "Atas e Frequência", href: "/dashboard/meetings", icon: ClipboardList },
      { name: "Empresas", href: "/dashboard/companies", icon: Building },
      { name: "Eventos", href: "/dashboard/events", icon: Calendar },
    ]
  },
  {
    group: "Treinamento e Desenvolvimento",
    items: [
      { name: "Dashboard Treinamentos", href: "/dashboard/lms/admin", icon: BarChart3 },
      { name: "Treinamentos", href: "/dashboard/lms/courses", icon: GraduationCap },
      { name: "Certificados", href: "/dashboard/lms/certificates", icon: Award },
    ]
  },
  {
    group: "Documentações",
    items: [
      { name: "Central de Documentos", href: "/dashboard/documents", icon: FolderOpen },
    ]
  },
  {
    group: "Gerenciamento de Projetos",
    items: [
      { name: "Gestão de Projetos", href: "/dashboard/projects", icon: Kanban },
    ]
  },
  {
    group: "Gestão e Relatórios",
    items: [
      { name: "Formulários", href: "/dashboard/forms", icon: FileText },
      { name: "Checklist de Eventos", href: "/dashboard/event-checklists", icon: CheckSquare },
      { name: "Fornecedores", href: "/dashboard/suppliers", icon: Truck },
      { name: "Editais", href: "/dashboard/public-notices", icon: FileBadge },
    ]
  },
];

export function SidebarNav() {
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
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shrink-0">
              <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45"></div>
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-800 dark:text-slate-100 whitespace-nowrap">
              IDE Hub
            </span>
          </div>
        )}
        {collapsed && (
           <div className="mx-auto w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shrink-0">
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

      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
        {navigation.map((navGroup, idx) => (
          <div key={idx} className="space-y-1">
            {!collapsed && (
              <h4 className="px-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                {navGroup.group}
              </h4>
            )}
            {navGroup.items.map((item) => {
              // Verifica se a rota atual é exatamente o href ou começa com href/ (para subrotas)
              // exceção: se href for /dashboard, só ativa se for exatamente /dashboard
              const isActive = (item.href === "/dashboard" && pathname === "/dashboard") ||
                               (item.href !== "/dashboard" && pathname?.startsWith(item.href));
              
              return (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors group relative",
                      isActive
                        ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-400"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                    )}
                    title={collapsed ? item.name : undefined}
                  >
                    <item.icon className={cn("w-5 h-5 shrink-0", isActive ? "text-indigo-700 dark:text-indigo-400" : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300")} />
                    {!collapsed && <span className="truncate">{item.name}</span>}
                  </Link>
                </div>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-100 dark:border-slate-800">
        <div className={cn("flex items-center gap-3", collapsed ? "justify-center" : "")}>
          <div className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-800 shrink-0" />
          {!collapsed && (
            <div className="overflow-hidden">
              <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">Ricardo Silva</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 truncate">Super Admin</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
