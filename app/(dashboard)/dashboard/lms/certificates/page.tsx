import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EmptyState } from "@/components/ui/empty-state";
import { Award } from "lucide-react";

export default function CertificatesPage() {
  return (
    <div className="p-8 max-w-[1200px] mx-auto space-y-8">
      <div className="space-y-1">
        <Breadcrumbs items={[{ label: "Dashboard", href: "/dashboard" }, { label: "LMS", href: "/dashboard/lms" }, { label: "Certificados", href: "/dashboard/lms/certificates" }]} />
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Certificados</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Emissão e controle de certificados de treinamentos.</p>
      </div>
      <EmptyState
        icon={Award}
        title="Nenhum certificado emitido"
        description="Ainda não existem certificados gerenciados no sistema."
      />
    </div>
  );
}
