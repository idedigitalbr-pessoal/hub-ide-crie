import {
  BookOpen,
  Users,
  Briefcase,
  Award,
  Zap,
  ShieldCheck,
} from "lucide-react";

export function LandingBenefits() {
  const benefits = [
    {
      title: "Cursos e Capacitação",
      description:
        "Acesse centenas de cursos focados no que o mercado realmente exige no momento.",
      icon: BookOpen,
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-500/10",
    },
    {
      title: "Eventos e Networking",
      description:
        "Participe de palestras, workshops e feiras para criar conexões valiosas.",
      icon: Users,
      color: "text-indigo-500",
      bg: "bg-indigo-50 dark:bg-indigo-500/10",
    },
    {
      title: "Vagas Direcionadas",
      description:
        "Encontre oportunidades de estágio, júnior e sênior direto com empresas parceiras.",
      icon: Briefcase,
      color: "text-emerald-500",
      bg: "bg-emerald-50 dark:bg-emerald-500/10",
    },
    {
      title: "Certificados Validados",
      description:
        "Obtenha certificados digitais autenticados para enriquecer seu currículo.",
      icon: Award,
      color: "text-purple-500",
      bg: "bg-purple-50 dark:bg-purple-500/10",
    },
    {
      title: "Processos Seletivos Ágeis",
      description:
        "Empresas contratam mais rápido utilizando nossa inteligência de matching.",
      icon: Zap,
      color: "text-amber-500",
      bg: "bg-amber-50 dark:bg-amber-500/10",
    },
    {
      title: "Ambiente Seguro",
      description:
        "Dados protegidos e perfis verificados para total segurança na plataforma.",
      icon: ShieldCheck,
      color: "text-slate-500",
      bg: "bg-slate-50 dark:bg-slate-500/10",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Tudo o que você precisa em um só lugar
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Nossa plataforma foi desenhada para resolver os maiores desafios do
            desenvolvimento profissional e recrutamento empresarial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-950 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
            >
              <div
                className={`w-14 h-14 rounded-xl ${benefit.bg} flex items-center justify-center mb-6`}
              >
                <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
