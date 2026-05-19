import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-indigo-600 flex items-center justify-center font-bold text-white">
                IDE
              </div>
              <span className="font-bold text-xl text-slate-900 dark:text-white tracking-tight">
                Hub
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm leading-relaxed">
              Conectando o talento certo às oportunidades certas. Educação
              contínua, Networking e Empregabilidade no mesmo ecossistema.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-colors"
              >
                <Github className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-sm">
              Plataforma
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#cursos"
                  className="text-sm text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  Cursos Livres
                </Link>
              </li>
              <li>
                <Link
                  href="#eventos"
                  className="text-sm text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  Eventos e Workshops
                </Link>
              </li>
              <li>
                <Link
                  href="#vagas"
                  className="text-sm text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  Vagas e Oportunidades
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-sm text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  Dashboard do Aluno
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-sm">
              Para Empresas
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-sm text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  Recrutamento Integrado
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  Gestão de Vagas
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  Patrocínio de Eventos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  Treinamentos In-company
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-sm">
              Legal & Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-sm text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contato@idehub.com"
                  className="text-sm text-slate-500 hover:text-indigo-600 transition-colors flex items-center gap-2 mt-4"
                >
                  <Mail className="w-4 h-4" /> contato@idehub.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} IDE Hub. Todos os direitos
            reservados.
          </p>
          <div className="mt-4 md:mt-0">Feito com tecnologias abertas.</div>
        </div>
      </div>
    </footer>
  );
}
