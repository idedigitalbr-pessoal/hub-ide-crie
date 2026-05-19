import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { memberService } from "@/services/member.service";
import { MemberList } from "@/components/members/member-list";

export default async function MembersPage() {
  const members  = (await memberService.getMembers()).data;

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-6">
      <div className="space-y-1">
        <Breadcrumbs items={[{ label: "Membros" }]} />
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Cadastro de Membros</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Gerencie os alunos, membros e usuários da plataforma.</p>
      </div>

      <MemberList initialData={members} />
    </div>
  );
}
