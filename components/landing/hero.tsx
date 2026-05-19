import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

export function LandingHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-white to-white dark:from-indigo-900/20 dark:via-slate-950 dark:to-slate-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-8 border border-indigo-100 dark:border-indigo-500/20">
          <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
          Plataforma IDE Hub 2026 lançada
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">
          A ponte entre o seu <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
            talento e o mercado
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
          Conectamos alunos, instituições e empresas em uma única plataforma.
          Cursos, eventos, vagas de emprego e networking para impulsionar a sua
          carreira ou o seu negócio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20 flex items-center justify-center gap-2 text-lg"
          >
            Quero me cadastrar <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#empresas"
            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-transparent border-2 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-lg"
          >
            <PlayCircle className="w-5 h-5" /> Para Empresas
          </Link>
        </div>

        {/* Mockup Preview */}
        <div className="mt-16 sm:mt-24 relative mx-auto max-w-5xl">
          <div className="rounded-2xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-2 sm:p-4 shadow-2xl">
            <div className="aspect-[16/9] rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-200/50 dark:from-slate-900/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-slate-400 font-medium">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
