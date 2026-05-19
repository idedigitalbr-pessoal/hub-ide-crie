import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EmptyState } from "@/components/ui/empty-state";
import { Building } from "lucide-react";

export default function CompaniesPage() {
  return (
    <div className="p-8 max-w-[1200px] mx-auto space-y-8">
      <div className="space-y-1">
        <Breadcrumbs items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Empresas", href: "/dashboard/companies" }]} />
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Empresas Parceiras</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Gerencie o relacionamento com empresas e instituições.</p>
      </div>
      <EmptyState
        icon={Building}
        title="Nenhuma empresa encontrada"
        description="Ainda não existem empresas parceiras cadastradas."
      />
    </div>
  );
}
