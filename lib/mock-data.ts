import {
  MemberGrowthData,
  CourseEnrollmentData,
  RecruitmentFunnelData,
  PendingCompany,
  UpcomingEvent,
  ActiveProject,
  RecentForm,
  AlertItem,
  RecentActivity,
} from '../types/dashboard';

export const memberGrowthData: MemberGrowthData[] = [
  { name: 'Jan', total: 1200 },
  { name: 'Fev', total: 1350 },
  { name: 'Mar', total: 1600 },
  { name: 'Abr', total: 1850 },
  { name: 'Mai', total: 2100 },
  { name: 'Jun', total: 2450 },
];

export const courseEnrollmentData: CourseEnrollmentData[] = [
  { name: 'React Avançado', alunos: 320 },
  { name: 'Design System', alunos: 240 },
  { name: 'Liderança', alunos: 180 },
  { name: 'UX Research', alunos: 150 },
];

export const recruitmentFunnelData: RecruitmentFunnelData[] = [
  { name: 'Inscritos', value: 1200 },
  { name: 'Triagem', value: 450 },
  { name: 'Entrevistas', value: 120 },
  { name: 'Testes', value: 45 },
  { name: 'Propostas', value: 12 },
];

export const pendingCompanies: PendingCompany[] = [
  { id: '1', name: 'Tech Solutions Inc.', requestedAt: 'Há 2 horas', status: 'pending' },
  { id: '2', name: 'Inova Labs', requestedAt: 'Há 5 horas', status: 'pending' },
  { id: '3', name: 'Global Systems', requestedAt: 'Ontem', status: 'pending' },
];

export const upcomingEvents: UpcomingEvent[] = [
  { id: '1', title: 'Hackathon IDE Hub 2026', date: '25 Mai 2026', attendees: 340 },
  { id: '2', title: 'Workshop de Liderança', date: '28 Mai 2026', attendees: 125 },
  { id: '3', title: 'Carreiras em Tech', date: '02 Jun 2026', attendees: 500 },
];

export const activeProjects: ActiveProject[] = [
  { id: '1', name: 'Novo App Mobile', progress: 75, status: 'on_track' },
  { id: '2', name: 'Migração de Banco', progress: 40, status: 'delayed' },
  { id: '3', name: 'Campanha Q3', progress: 15, status: 'at_risk' },
  { id: '4', name: 'Onboarding v2', progress: 90, status: 'on_track' },
];

export const recentForms: RecentForm[] = [
  { id: '1', title: 'Avaliação de Desempenho', submittedBy: 'Mariana Costa', submittedAt: '10 min atrás' },
  { id: '2', title: 'Feedback do Curso (React)', submittedBy: 'Lucas Andrade', submittedAt: '1 hora atrás' },
  { id: '3', title: 'Pesquisa de Clima', submittedBy: 'Ana Clara', submittedAt: '2 horas atrás' },
];

export const alerts: AlertItem[] = [
  { id: '1', message: 'Servidor de banco de dados atingiu 90% de uso de CPU.', type: 'error', time: '10 min atrás' },
  { id: '2', message: '5 faturas aguardando aprovação manual.', type: 'warning', time: '1 hora atrás' },
  { id: '3', message: 'Atualização do sistema programada para 02:00 AM.', type: 'info', time: 'Ontem' },
];

export const recentActivities: RecentActivity[] = [
  { id: '1', user: 'Livia Santos', userInitials: 'LS', action: 'concluiu o módulo', target: 'Onboarding 01', time: 'há 5 min', color: 'blue' },
  { id: '2', user: 'Eduardo Vieira', userInitials: 'EV', action: 'publicou novo evento', target: 'Hackathon', time: 'há 22 min', color: 'purple' },
  { id: '3', user: 'Julia Hein', userInitials: 'JH', action: 'moveu um candidato', target: 'Entrevista', time: 'há 1h', color: 'emerald' },
  { id: '4', user: 'Carlos Silva', userInitials: 'CS', action: 'criou novo formulário', target: 'Pesquisa Q3', time: 'há 2h', color: 'amber' },
];
