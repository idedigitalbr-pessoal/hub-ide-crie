import Image from "next/image";
import Link from "next/link";
import { recruitmentService } from "@/services/recruitment.service";
import { MapPin, DollarSign, Building2, Briefcase } from "lucide-react";

export async function LandingFeaturedJobs() {
  const jobs  = (await recruitmentService.getJobs()).data;
  const companies  = (await recruitmentService.getCompanies()).data;
  const featured = jobs.filter((j) => j.status === "Aberta").slice(0, 4);

  return (
    <section id="vagas" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Seu próximo emprego está aqui
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Vagas exclusivas em empresas parceiras que valorizam a educação
            contínua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featured.map((job) => {
            const company = companies.find((c) => c.id === job.companyId);

            return (
              <div
                key={job.id}
                className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-lg transition-all group flex flex-col sm:flex-row gap-6"
              >
                <div className="w-16 h-16 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 overflow-hidden relative shrink-0">
                  {company?.logoUrl ? (
                    <Image
                      src={company.logoUrl}
                      alt={company.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                      <Building2 className="w-8 h-8" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 transition-colors">
                    {job.title}
                  </h3>
                  <p className="font-medium text-slate-600 dark:text-slate-400 mb-4">
                    {company?.name || "Confidencial"}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-xs font-semibold">
                      <MapPin className="w-3.5 h-3.5" />{" "}
                      {job.location || "Remoto"}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-xs font-semibold">
                      <Briefcase className="w-3.5 h-3.5" /> {job.employmentType}
                    </span>
                    {job.salaryRange && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                        <DollarSign className="w-3.5 h-3.5" /> {job.salaryRange}
                      </span>
                    )}
                  </div>

                  <Link
                    href="/dashboard"
                    className="inline-flex font-bold text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    Ver detalhes da vaga &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/dashboard"
            className="inline-flex px-8 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 font-bold rounded-lg transition-colors"
          >
            Explorar todas as vagas
          </Link>
        </div>
      </div>
    </section>
  );
}
