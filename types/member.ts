export type MemberStatus = 
  | 'Novo cadastro' 
  | 'Em análise' 
  | 'Ativo' 
  | 'Inativo' 
  | 'Aguardando documentação' 
  | 'Bloqueado';

export type MemberType =
  | 'Membro IDE'
  | 'Aluno'
  | 'Professor'
  | 'Empresa Parceira'
  | 'Fornecedor'
  | 'Coordenação'
  | 'Visitante';

export type AppRole =
  | 'admin'          // Acesso total
  | 'coordenador'    // Acesso à estrutra organizacional (projetos, eventos, membros)
  | 'lms_student'    // Acesso ao portal do aluno (treinamentos)
  | 'lms_teacher'    // Acesso ao dashboard do professor
  | 'events_manager' // Gerencia eventos
  | 'events_member'  // Acesso a eventos
  | 'project_manager'// Gerencia projetos
  | 'project_member' // Membro de projetos
  | 'supplier'       // Fornecedor
  | 'company';       // Empresa (recrutamento, etc)

export interface Member {
  id: string;
  fullName: string;
  cpf: string;
  birthDate: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  city: string;
  state: string;
  educationLevel: string;
  interestArea: string;
  professionalSituation: string;
  status: MemberStatus;
  memberType: MemberType;
  roles: AppRole[];
  tags: string[];
  notes: string;
  createdAt: string;
}

export interface MemberTimelineEvent {
  id: string;
  memberId: string;
  type: 'general' | 'course' | 'event' | 'document' | 'system';
  title: string;
  description: string;
  date: string;
  user: string;
}

export interface MemberDocument {
  id: string;
  memberId: string;
  name: string;
  type: string;
  status: 'Aprovado' | 'Pendente' | 'Rejeitado';
  uploadDate: string;
}

export interface MemberCourse {
  id: string;
  memberId: string;
  courseName: string;
  progress: number;
  status: 'Inscrito' | 'Em andamento' | 'Concluído' | 'Cancelado';
  enrollmentDate: string;
}

export interface MemberEvent {
  id: string;
  memberId: string;
  eventName: string;
  date: string;
  status: 'Inscrito' | 'Presente' | 'Ausente';
}
