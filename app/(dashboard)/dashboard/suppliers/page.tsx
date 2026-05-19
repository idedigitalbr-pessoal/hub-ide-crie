import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EmptyState } from "@/components/ui/empty-state";
import { Truck } from "lucide-react";

export default function SuppliersPage() {
  return (
    <div className="p-8 max-w-[1200px] mx-auto space-y-8">
      <div className="space-y-1">
        <Breadcrumbs items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Fornecedores", href: "/dashboard/suppliers" }]} />
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Fornecedores</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Banco de fornecedores homologados para a empresa.</p>
      </div>
      <EmptyState
        icon={Truck}
        title="Nenhum fornecedor encontrado"
        description="Ainda não existem fornecedores cadastrados."
      />
    </div>
  );
}
