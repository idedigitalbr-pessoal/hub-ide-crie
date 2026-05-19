import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EmptyState } from "@/components/ui/empty-state";
import { CheckSquare } from "lucide-react";

export default function EventChecklistsPage() {
  return (
    <div className="p-8 max-w-[1200px] mx-auto space-y-8">
      <div className="space-y-1">
        <Breadcrumbs items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Checklists", href: "/dashboard/event-checklists" }]} />
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Checklist de Eventos</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Listas de averiguação para garantir o sucesso dos eventos.</p>
      </div>
      <EmptyState
        icon={CheckSquare}
        title="Nenhum checklist"
        description="Ainda não existem checklists cadastrados."
      />
    </div>
  );
}
