import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { User, Mail, Phone, MapPin, Briefcase } from "lucide-react";

export default function PortalProfilePage() {
  const breadcrumbItems = [
    { label: "Portal", href: "/portal" },
    { label: "Meu Perfil", href: "/portal/profile" },
  ];

  return (
    <div className="p-8 max-w-[800px] mx-auto space-y-8">
      <div className="space-y-1">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Meu Perfil</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Gerencie suas informações pessoais e preferências.</p>
      </div>

      <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
        <div className="h-32 bg-blue-600 w-full relative"></div>
        <div className="px-6 pb-6 relative">
           <div className="w-24 h-24 bg-white dark:bg-slate-900 rounded-full border-4 border-white dark:border-slate-950 -mt-12 overflow-hidden flex items-center justify-center relative mb-4">
              <img src="https://i.pravatar.cc/150?u=a" alt="User Avatar" className="w-full h-full object-cover" />
           </div>
           
           <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Ana Souza</h2>
           <p className="text-sm text-slate-500 mb-6">Desenvolvedora Frontend Pleno • Aluno & Membro IDE</p>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100 dark:border-slate-800">
              <div className="space-y-4">
                 <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider">Contato</h3>
                 <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <Mail className="w-4 h-4 mr-3 text-slate-400" />
                    ana.souza@example.com
                 </div>
                 <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <Phone className="w-4 h-4 mr-3 text-slate-400" />
                    +55 11 99999-9999
                 </div>
                 <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <MapPin className="w-4 h-4 mr-3 text-slate-400" />
                    São Paulo, SP - Brasil
                 </div>
              </div>
              <div className="space-y-4">
                 <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider">Profissional</h3>
                 <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <Briefcase className="w-4 h-4 mr-3 text-slate-400" />
                    Google (Atual)
                 </div>
                 <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <User className="w-4 h-4 mr-3 text-slate-400" />
                    Github: @anasouza
                 </div>
              </div>
           </div>

           <div className="mt-8 flex justify-end">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors shadow-sm">
                Editar Perfil
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
