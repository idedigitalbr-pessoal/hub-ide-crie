import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EmptyState } from "@/components/ui/empty-state";
import { Network } from "lucide-react";

export default function DepartmentsPage() {
  return (
    <div className="p-8 max-w-[1200px] mx-auto space-y-8">
      <div className="space-y-1">
        <Breadcrumbs items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Coordenações", href: "/dashboard/departments" }]} />
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Coordenações</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Gerencie as coordenações e áreas da organização.</p>
      </div>
      <EmptyState
        icon={Network}
        title="Nenhuma coordenação encontrada"
        description="Ainda não existem coordenações cadastradas."
      />
    </div>
  );
}
