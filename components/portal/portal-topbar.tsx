"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Search, Menu, LogOut } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function PortalTopbar() {
  const pathname = usePathname();

  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm flex items-center justify-between px-4 sm:px-6 sticky top-0 z-10 w-full">
      <div className="flex items-center flex-1 gap-4">
        {/* Mobile menu button could go here */}
        <div className="relative w-full max-w-md hidden sm:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar cursos, projetos, eventos..."
            className="w-full bg-slate-100 dark:bg-slate-900 border-transparent focus:bg-white dark:focus:bg-slate-950 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 rounded-lg pl-9 pr-4 py-2 text-sm transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-500 outline-none"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-3 shrink-0">
        <button className="relative p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white dark:ring-slate-950"></span>
        </button>
        <ThemeToggle />
        <Link href="/" className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-full transition-colors" title="Sair">
          <LogOut className="w-5 h-5" />
        </Link>
      </div>
    </header>
  );
}
