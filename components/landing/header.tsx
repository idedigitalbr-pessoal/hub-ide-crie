"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export function LandingHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-indigo-600 flex items-center justify-center font-bold text-white">
            IDE
          </div>
          <span className="font-bold text-xl text-slate-900 dark:text-white tracking-tight">
            Hub
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#cursos"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Cursos
          </Link>
          <Link
            href="#eventos"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Eventos
          </Link>
          <Link
            href="#vagas"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Vagas
          </Link>
          <Link
            href="#empresas"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Para Empresas
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/login"
            className="text-sm font-medium text-slate-900 dark:text-white hover:text-indigo-600 px-4 py-2"
          >
            Entrar
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium bg-indigo-600 text-white px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
          >
            Cadastre-se
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-4 space-y-4">
          <Link
            href="#cursos"
            className="block text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Cursos
          </Link>
          <Link
            href="#eventos"
            className="block text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Eventos
          </Link>
          <Link
            href="#vagas"
            className="block text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Vagas
          </Link>
          <Link
            href="/login"
            className="block text-sm font-bold text-indigo-600 dark:text-indigo-400 mt-4"
          >
            Entrar na Plataforma
          </Link>
        </div>
      )}
    </header>
  );
}
