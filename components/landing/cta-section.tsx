import Link from "next/link";
import { BriefcaseBusiness, LogIn } from "lucide-react";

export function LandingCtaSections() {
  return (
    <section
      id="empresas"
      className="py-20 lg:py-32 bg-indigo-600 dark:bg-indigo-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Para Empresas */}
          <div className="bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 p-10 md:p-12 rounded-3xl text-white">
            <h2 className="text-3xl font-bold mb-4">Para Empresas</h2>
            <p className="text-indigo-100 mb-8 text-lg">
              Publique vagas, descubra os melhores talentos formados em nossos
              cursos e crie eventos corporativos exclusivos para sua marca
              empregadora.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400" /> Acesso ao
                banco de talentos
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400" /> Gestão de
                processos seletivos
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400" /> Patrocínio
                de eventos
              </li>
            </ul>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-colors w-full sm:w-auto"
            >
              <BriefcaseBusiness className="w-5 h-5" /> Cadastrar Empresa
            </Link>
          </div>

          {/* Para Indivíduos */}
          <div className="bg-indigo-900/40 dark:bg-indigo-900/60 backdrop-blur-md border border-indigo-500/30 p-10 md:p-12 rounded-3xl text-white">
            <h2 className="text-3xl font-bold mb-4">
              Para Candidatos e Alunos
            </h2>
            <p className="text-indigo-100 mb-8 text-lg">
              Evolua suas habilidades, conecte-se com recrutadores e acompanhe
              seu progresso profissional em um único dashboard.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400" /> Acesso a
                cursos exclusivos
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />{" "}
                Certificações verificáveis
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400" /> Vagas e
                processos seletivos
              </li>
            </ul>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-500 text-white font-bold border border-indigo-400 rounded-xl hover:bg-indigo-400 transition-colors w-full sm:w-auto"
            >
              <LogIn className="w-5 h-5" /> Criar Perfil Profissional
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
