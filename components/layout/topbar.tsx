import Link from "next/link";
import { Search, Bell, Menu, CircleUser, LogOut } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Topbar() {
  return (
    <header className="h-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 shrink-0 transition-colors">
      <div className="flex items-center gap-4 flex-1">
        <button className="md:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md">
          <Menu className="w-5 h-5" />
        </button>

        <div className="hidden md:flex relative items-center max-w-md w-full">
          <Search className="absolute left-3 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Buscar em módulos..."
            className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:text-slate-100 transition-shadow"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
         <ThemeToggle />
         <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full relative transition-colors">
           <Bell className="w-5 h-5" />
           <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 border-2 border-white dark:border-slate-950 rounded-full"></span>
         </button>
         <button className="p-1 text-slate-500 hover:text-indigo-600 transition-colors">
            <CircleUser className="w-6 h-6" />
         </button>
         <Link href="/" className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-full transition-colors" title="Sair">
            <LogOut className="w-5 h-5" />
         </Link>
      </div>
    </header>
  );
}
