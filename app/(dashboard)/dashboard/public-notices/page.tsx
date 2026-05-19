import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EmptyState } from "@/components/ui/empty-state";
import { FileBadge } from "lucide-react";

export default function PublicNoticesPage() {
  return (
    <div className="p-8 max-w-[1200px] mx-auto space-y-8">
      <div className="space-y-1">
        <Breadcrumbs items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Editais", href: "/dashboard/public-notices" }]} />
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Editais</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Gerenciamento de editais para contratações ou bolsas.</p>
      </div>
      <EmptyState
        icon={FileBadge}
        title="Nenhum edital encontrado"
        description="Ainda não existem editais registrados no sistema."
      />
    </div>
  );
}
