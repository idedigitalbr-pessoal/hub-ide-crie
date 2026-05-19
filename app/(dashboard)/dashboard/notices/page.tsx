import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EmptyState } from "@/components/ui/empty-state";
import { Bell } from "lucide-react";

export default function NoticesPage() {
  return (
    <div className="p-8 max-w-[1200px] mx-auto space-y-8">
      <div className="space-y-1">
        <Breadcrumbs items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Avisos", href: "/dashboard/notices" }]} />
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Avisos e Comunicados</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Mural de avisos gerais da equipe.</p>
      </div>
      <EmptyState
        icon={Bell}
        title="Nenhum aviso encontrado"
        description="Ainda não existem avisos cadastrados."
      />
    </div>
  );
}
