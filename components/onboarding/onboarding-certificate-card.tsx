import { Download, Award } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Props {
  memberName: string;
  trackName: string;
  completionDate: string;
}

export function OnboardingCertificateCard({ memberName, trackName, completionDate }: Props) {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl overflow-hidden shadow-sm p-6 text-white relative">
       <div className="absolute top-0 right-0 p-8 opacity-10">
         <Award className="w-48 h-48" />
       </div>
       
       <div className="relative z-10 space-y-6">
         <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
           <Award className="w-6 h-6 text-white" />
         </div>
         
         <div>
           <h3 className="text-xl font-bold mb-1">Certificado de Conclusão</h3>
           <p className="text-white/80 text-sm">Você concluiu com sucesso a trilha de integração.</p>
         </div>

         <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
           <p className="text-xs text-indigo-100 uppercase tracking-wider mb-1">Membro</p>
           <p className="font-bold text-lg">{memberName}</p>
           
           <p className="text-xs text-indigo-100 uppercase tracking-wider mb-1 mt-4">Trilha</p>
           <p className="font-bold">{trackName}</p>
           
           <p className="text-xs text-indigo-100 uppercase tracking-wider mb-1 mt-4">Conclusão</p>
           <p className="font-medium text-sm">{format(new Date(completionDate), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</p>
         </div>

         <button className="flex items-center gap-2 px-4 py-2 bg-white text-indigo-700 hover:bg-indigo-50 rounded-lg text-sm font-bold transition-colors w-full justify-center">
           <Download className="w-4 h-4" />
           Baixar Certificado
         </button>
       </div>
    </div>
  );
}
