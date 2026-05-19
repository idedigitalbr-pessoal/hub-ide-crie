import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EmptyState } from "@/components/ui/empty-state";
import { Briefcase } from "lucide-react";

export default function RolesPage() {
  return (
    <div className="p-8 max-w-[1200px] mx-auto space-y-8">
      <div className="space-y-1">
        <Breadcrumbs items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Cargos", href: "/dashboard/roles" }]} />
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Cargos</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Gerencie os cargos da estrutura organizacional.</p>
      </div>
      <EmptyState
        icon={Briefcase}
        title="Nenhum cargo encontrado"
        description="Ainda não existem cargos cadastrados."
      />
    </div>
  );
}
