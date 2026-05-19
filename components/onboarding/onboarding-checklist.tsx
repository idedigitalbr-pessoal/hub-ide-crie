"use client";

import { CheckSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function OnboardingChecklist() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'profile': true,
    'avatar': false,
    'terms': false
  });

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const items = [
    { id: 'profile', title: 'Preencher perfil completo' },
    { id: 'avatar', title: 'Fazer upload de uma foto de perfil' },
    { id: 'terms', title: 'Aceitar Termos e Condições e Código de Conduta' }
  ];

  const allCompleted = items.every(item => checkedItems[item.id]);

  return (
    <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm p-6">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">Checklist Obrigatório</h3>
        <p className="text-sm text-slate-500">Conclua estas tarefas para liberar o acesso total à plataforma.</p>
      </div>

      <div className="space-y-3">
        {items.map(item => (
          <label key={item.id} className="flex items-start gap-3 p-3 border border-slate-200 dark:border-slate-800 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
            <input 
              type="checkbox" 
              checked={checkedItems[item.id] || false}
              onChange={() => toggleCheck(item.id)}
              className="mt-1 w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" 
            />
            <span className={cn(
              "text-sm font-medium",
              checkedItems[item.id] ? "text-slate-500 line-through" : "text-slate-900 dark:text-slate-100"
            )}>{item.title}</span>
          </label>
        ))}
      </div>

      {allCompleted && (
        <div className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 rounded-lg font-medium text-sm flex items-center gap-2">
          <CheckSquare className="w-5 h-5" />
          Tudo certo! Você agora tem acesso total à plataforma.
        </div>
      )}
    </div>
  );
}
