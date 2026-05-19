import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { MemberForm } from "@/components/members/member-form";

export default function NewMemberPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      <div className="space-y-1">
        <Breadcrumbs items={[{ label: "Membros", href: "/dashboard/members" }, { label: "Novo Cadastro" }]} />
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Adicionar Membro</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Preencha os dados para criar um novo registro na plataforma.</p>
      </div>

      <MemberForm />
    </div>
  );
}
