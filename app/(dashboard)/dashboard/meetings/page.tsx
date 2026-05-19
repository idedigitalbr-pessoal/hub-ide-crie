import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EmptyState } from "@/components/ui/empty-state";
import { ClipboardList } from "lucide-react";

export default function MeetingsPage() {
  return (
    <div className="p-8 max-w-[1200px] mx-auto space-y-8">
      <div className="space-y-1">
        <Breadcrumbs items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Atas e Frequência", href: "/dashboard/meetings" }]} />
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Atas e Frequência</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Atas de reuniões, check-ins e frequências.</p>
      </div>
      <EmptyState
        icon={ClipboardList}
        title="Nenhum registro encontrado"
        description="Ainda não existem atas ou listas de frequência cadastradas."
      />
    </div>
  );
}
