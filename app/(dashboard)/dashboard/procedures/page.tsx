import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EmptyState } from "@/components/ui/empty-state";
import { BookOpen } from "lucide-react";

export default function ProceduresPage() {
  return (
    <div className="p-8 max-w-[1200px] mx-auto space-y-8">
      <div className="space-y-1">
        <Breadcrumbs items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Procedimentos", href: "/dashboard/procedures" }]} />
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Procedimentos</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Padrões e procedimentos operacionais.</p>
      </div>
      <EmptyState
        icon={BookOpen}
        title="Nenhum procedimento encontrado"
        description="Ainda não existem procedimentos cadastrados."
      />
    </div>
  );
}
