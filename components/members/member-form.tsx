"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Save, ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const memberFormSchema = z.object({
  fullName: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  cpf: z.string().min(11, "CPF inválido"),
  birthDate: z.string().nonempty("Data de nascimento obrigatória"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  whatsapp: z.string().optional(),
  address: z.string().nonempty("Endereço obrigatório"),
  city: z.string().nonempty("Cidade obrigatória"),
  state: z.string().nonempty("Estado obrigatório"),
  educationLevel: z.string().nonempty("Campo obrigatório"),
  interestArea: z.string().nonempty("Campo obrigatório"),
  professionalSituation: z.string().nonempty("Campo obrigatório"),
  status: z.enum(['Novo cadastro', 'Em análise', 'Ativo']),
});

type MemberFormValues = z.infer<typeof memberFormSchema>;

export function MemberForm() {
  const [step, setStep] = useState(1);
  
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<MemberFormValues>({
    resolver: zodResolver(memberFormSchema),
    defaultValues: {
      status: 'Novo cadastro'
    }
  });

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (step === 1) fieldsToValidate = ['fullName', 'cpf', 'birthDate', 'email', 'phone', 'whatsapp'];
    if (step === 2) fieldsToValidate = ['address', 'city', 'state'];
    
    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep((s) => Math.min(s + 1, 3));
    }
  };

  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 1));
  };

  const onSubmit = (data: MemberFormValues) => {
    console.log("Form Submitted:", data);
    alert("Membro cadastrado com sucesso (Mock)");
    // Here we would call the API
  };

  return (
    <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
      {/* Stepper Header */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex-1 flex items-center">
            <div className={cn(
              "flex items-center justify-center w-8 h-8 rounded-full font-bold text-xs shrink-0 transition-colors",
              step >= i ? "bg-indigo-600 text-white" : "bg-white border-2 border-slate-200 text-slate-400"
            )}>
              {i}
            </div>
            {i < 3 && (
              <div className={cn(
                "h-1 flex-1 mx-2 rounded-full transition-colors",
                step > i ? "bg-indigo-600" : "bg-slate-200 dark:bg-slate-800"
              )} />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">Dados Pessoais</h3>
              <p className="text-sm text-slate-500 mb-4">Informações básicas do membro.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Nome Completo</label>
                <input {...register("fullName")} className="w-full px-3 py-2 border rounded-md dark:bg-slate-900 dark:border-slate-800" />
                {errors.fullName && <p className="text-xs text-rose-500">{errors.fullName.message}</p>}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">CPF</label>
                <input {...register("cpf")} className="w-full px-3 py-2 border rounded-md dark:bg-slate-900 dark:border-slate-800" />
                {errors.cpf && <p className="text-xs text-rose-500">{errors.cpf.message}</p>}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Data de Nascimento</label>
                <input type="date" {...register("birthDate")} className="w-full px-3 py-2 border rounded-md dark:bg-slate-900 dark:border-slate-800" />
                {errors.birthDate && <p className="text-xs text-rose-500">{errors.birthDate.message}</p>}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">E-mail</label>
                <input type="email" {...register("email")} className="w-full px-3 py-2 border rounded-md dark:bg-slate-900 dark:border-slate-800" />
                {errors.email && <p className="text-xs text-rose-500">{errors.email.message}</p>}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Telefone</label>
                <input {...register("phone")} className="w-full px-3 py-2 border rounded-md dark:bg-slate-900 dark:border-slate-800" />
                {errors.phone && <p className="text-xs text-rose-500">{errors.phone.message}</p>}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">WhatsApp</label>
                <input {...register("whatsapp")} className="w-full px-3 py-2 border rounded-md dark:bg-slate-900 dark:border-slate-800" />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">Endereço</h3>
              <p className="text-sm text-slate-500 mb-4">Localização do membro.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1 md:col-span-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Endereço Completo</label>
                <input {...register("address")} className="w-full px-3 py-2 border rounded-md dark:bg-slate-900 dark:border-slate-800" />
                {errors.address && <p className="text-xs text-rose-500">{errors.address.message}</p>}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Cidade</label>
                <input {...register("city")} className="w-full px-3 py-2 border rounded-md dark:bg-slate-900 dark:border-slate-800" />
                {errors.city && <p className="text-xs text-rose-500">{errors.city.message}</p>}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Estado (UF)</label>
                <input {...register("state")} className="w-full px-3 py-2 border rounded-md dark:bg-slate-900 dark:border-slate-800" />
                {errors.state && <p className="text-xs text-rose-500">{errors.state.message}</p>}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">Perfil Profissional</h3>
              <p className="text-sm text-slate-500 mb-4">Informações de carreira e escolaridade.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Nível de Escolaridade</label>
                <select {...register("educationLevel")} className="w-full px-3 py-2 border rounded-md dark:bg-slate-900 dark:border-slate-800 bg-transparent">
                  <option value="">Selecione...</option>
                  <option value="Ensino Médio">Ensino Médio</option>
                  <option value="Superior Incompleto">Superior Incompleto</option>
                  <option value="Superior Completo">Superior Completo</option>
                  <option value="Pós-graduação">Pós-graduação</option>
                </select>
                {errors.educationLevel && <p className="text-xs text-rose-500">{errors.educationLevel.message}</p>}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Situação Profissional</label>
                <select {...register("professionalSituation")} className="w-full px-3 py-2 border rounded-md dark:bg-slate-900 dark:border-slate-800 bg-transparent">
                  <option value="">Selecione...</option>
                  <option value="Empregado">Empregado</option>
                  <option value="Desempregado">Buscando recolocação</option>
                  <option value="Estudante">Estudante</option>
                </select>
                {errors.professionalSituation && <p className="text-xs text-rose-500">{errors.professionalSituation.message}</p>}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Área de Interesse Principal</label>
                <input {...register("interestArea")} className="w-full px-3 py-2 border rounded-md dark:bg-slate-900 dark:border-slate-800" placeholder="Ex: Frontend, Design" />
                {errors.interestArea && <p className="text-xs text-rose-500">{errors.interestArea.message}</p>}
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
          <button 
            type="button" 
            onClick={prevStep}
            disabled={step === 1}
            className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors disabled:opacity-50"
          >
            <ArrowLeft className="w-4 h-4" />
            Anterior
          </button>
          
          {step < 3 ? (
            <button 
              type="button" 
              onClick={nextStep}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 border border-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Próximo
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button 
              type="submit" 
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 border border-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors"
            >
              <Save className="w-4 h-4" />
              Salvar Membro
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
