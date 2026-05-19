import Link from "next/link";
import { ArrowRight, UserCircle, GraduationCap, ShieldAlert, Key } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="space-y-8 font-sans">
      <div className="text-center">
        <div className="mx-auto w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-sm">
          <div className="w-6 h-6 border-2 border-white rounded-md rotate-45"></div>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Bem-vindo de volta</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
          Escolha o seu perfil para acessar a plataforma.
        </p>
      </div>

      <div className="space-y-3">
        <Link 
          href="/portal" 
          className="flex items-center p-3 sm:p-4 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all group"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 rounded-lg flex items-center justify-center shrink-0 text-blue-600 dark:text-blue-400 mr-3 sm:mr-4">
            <UserCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-slate-100">Portal do Aluno & Membro</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">Acesse seus cursos, projetos e eventos.</p>
          </div>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 dark:text-slate-700 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors transform group-hover:translate-x-1" />
        </Link>

        <Link 
          href="/dashboard"
          className="flex items-center p-3 sm:p-4 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 transition-all group"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 rounded-lg flex items-center justify-center shrink-0 text-indigo-600 dark:text-indigo-400 mr-3 sm:mr-4">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-slate-100">Portal do Professor</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">Gerencie suas disciplinas e turmas.</p>
          </div>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 dark:text-slate-700 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors transform group-hover:translate-x-1" />
        </Link>

        <Link 
          href="/dashboard"
          className="flex items-center p-3 sm:p-4 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 transition-all group"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 rounded-lg flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400 mr-3 sm:mr-4">
            <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-slate-100">Painel Administrativo</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">Gestão completa da plataforma.</p>
          </div>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 dark:text-slate-700 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-slate-200 dark:border-slate-800" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white dark:bg-slate-900 px-3 text-slate-400 font-medium tracking-wider">Ou acesse com e-mail</span>
        </div>
      </div>

      <form className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">E-mail</label>
          <input type="email" placeholder="nome@exemplo.com" className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Senha</label>
            <Link href="#" className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline">Esqueci a senha</Link>
          </div>
          <input type="password" placeholder="••••••••" className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
        </div>
        <button type="button" className="flex items-center justify-center w-full py-2.5 px-4 mt-2 bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
          <Key className="w-4 h-4 mr-2" />
          Entrar com Senha
        </button>
      </form>
    </div>
  );
}
