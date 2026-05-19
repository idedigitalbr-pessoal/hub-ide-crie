import { CandidateProfile } from "@/types/recruitment";
import { Mail, MapPin, Code2, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  candidate: CandidateProfile;
}

export function CandidateCard({ candidate }: Props) {
  const currentExp = candidate.experiences.find(e => e.current);

  return (
    <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:shadow-md transition-shadow flex flex-col">
       <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
             {candidate.avatarUrl ? (
               <Image src={candidate.avatarUrl} alt={candidate.fullName} width={56} height={56} className="object-cover" />
             ) : (
               <div className="w-full h-full flex items-center justify-center font-bold text-slate-500 uppercase">
                 {candidate.fullName.substring(0,2)}
               </div>
             )}
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg leading-tight mb-1">{candidate.fullName}</h3>
            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 line-clamp-1">{candidate.headline}</p>
          </div>
       </div>

       <div className="space-y-2 mb-4 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 shrink-0" />
            <span className="truncate">{candidate.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 shrink-0" />
            <span className="truncate">{currentExp ? `${currentExp.position} @ ${currentExp.companyName}` : `${candidate.education[0]?.degree || 'Sem experiência atual'}`}</span>
          </div>
       </div>

       <div className="flex flex-wrap gap-2 mb-6 flex-1">
          {candidate.skills.slice(0, 5).map(skill => (
            <span key={skill} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded border border-slate-200/50 dark:border-slate-700/50">
              {skill}
            </span>
          ))}
          {candidate.skills.length > 5 && (
            <span className="px-2 py-1 bg-slate-50 dark:bg-slate-900 text-slate-500 text-xs font-medium rounded border border-slate-200/50 dark:border-slate-800">
              +{candidate.skills.length - 5}
            </span>
          )}
       </div>

       <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
         <span className="text-xs font-medium px-2.5 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-md">
            {candidate.availability}
         </span>
         
         <div className="flex gap-2">
           <Link href={`mailto:${candidate.email}`} className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors">
             <Mail className="w-4 h-4" />
           </Link>
           <button className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 text-sm font-medium rounded-lg transition-colors">
              Ver Perfil
           </button>
         </div>
       </div>
    </div>
  );
}
