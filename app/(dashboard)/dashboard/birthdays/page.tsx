import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EmptyState } from "@/components/ui/empty-state";
import { Gift } from "lucide-react";

export default function BirthdaysPage() {
  return (
    <div className="p-8 max-w-[1200px] mx-auto space-y-8">
      <div className="space-y-1">
        <Breadcrumbs items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Aniversariantes", href: "/dashboard/birthdays" }]} />
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Aniversariantes</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Gerencie os aniversariantes do mês.</p>
      </div>
      <EmptyState
        icon={Gift}
        title="Nenhum aniversariante encontrado"
        description="Ainda não existem dados cadastrados nesta seção."
      />
    </div>
  );
}
