import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EmptyState } from "@/components/ui/empty-state";
import { FolderOpen } from "lucide-react";

export default function DocumentsPage() {
  return (
    <div className="p-8 max-w-[1200px] mx-auto space-y-8">
      <div className="space-y-1">
        <Breadcrumbs items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Documentos", href: "/dashboard/documents" }]} />
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Central de Documentos</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Organize os arquivos por categorias.</p>
      </div>
      <EmptyState
        icon={FolderOpen}
        title="Pasta vazia"
        description="Não há documentos nesta pasta por enquanto."
      />
    </div>
  );
}
