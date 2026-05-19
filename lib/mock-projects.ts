import { Project, Task, ProjectMember, Milestone } from '@/types/projects';

export const mockProjectMembers: ProjectMember[] = [
  { id: 'pm_1', userId: 'u1', name: 'Ana Souza', role: 'Gerente', jobTitle: 'Product Manager', avatarUrl: 'https://i.pravatar.cc/150?u=a1' },
  { id: 'pm_2', userId: 'u2', name: 'Bruno Lima', role: 'Membro', jobTitle: 'Frontend Developer', avatarUrl: 'https://i.pravatar.cc/150?u=b1' },
  { id: 'pm_3', userId: 'u3', name: 'Carlos Dias', role: 'Membro', jobTitle: 'Backend Developer', avatarUrl: 'https://i.pravatar.cc/150?u=c1' }
];

export const mockProjects: Project[] = [
  {
    id: 'p_1',
    name: 'Novo Portal do Candidato',
    description: 'Redesign e implementação do novo portal do candidato com recursos de IA.',
    status: 'Em execução',
    startDate: '2026-04-01T00:00:00Z',
    endDate: '2026-08-30T00:00:00Z',
    progressPercentage: 45,
    members: mockProjectMembers,
    tags: ['Frontend', 'Backend', 'Design'],
    createdAt: '2026-03-15T10:00:00Z',
    updatedAt: '2026-05-18T10:00:00Z',
  },
  {
    id: 'p_2',
    name: 'Migração de Banco de Dados',
    description: 'Migração do banco on-premise para cloud.',
    status: 'Planejamento',
    startDate: '2026-06-01T00:00:00Z',
    endDate: '2026-10-31T00:00:00Z',
    progressPercentage: 5,
    members: [mockProjectMembers[0], mockProjectMembers[2]],
    tags: ['Infra', 'Banco de Dados'],
    createdAt: '2026-04-10T10:00:00Z',
    updatedAt: '2026-05-10T10:00:00Z',
  }
];

export const mockTasks: Task[] = [
  {
    id: 't_1',
    projectId: 'p_1',
    title: 'Criar protótipos de alta fidelidade',
    description: 'Criar telas do portal do candidato no Figma.',
    status: 'Concluída',
    priority: 'Alta',
    assigneeId: 'pm_1',
    assigneeName: 'Ana Souza',
    assigneeAvatarUrl: 'https://i.pravatar.cc/150?u=a1',
    reporterId: 'pm_1',
    dueDate: '2026-04-15T00:00:00Z',
    createdAt: '2026-04-01T00:00:00Z',
    updatedAt: '2026-04-14T00:00:00Z',
  },
  {
    id: 't_2',
    projectId: 'p_1',
    title: 'Implementar tela de login',
    description: 'Página de login e integração com Auth0.',
    status: 'Em andamento',
    priority: 'Média',
    assigneeId: 'pm_2',
    assigneeName: 'Bruno Lima',
    assigneeAvatarUrl: 'https://i.pravatar.cc/150?u=b1',
    reporterId: 'pm_1',
    dueDate: '2026-05-20T00:00:00Z',
    createdAt: '2026-04-16T00:00:00Z',
    updatedAt: '2026-05-15T00:00:00Z',
  },
  {
    id: 't_3',
    projectId: 'p_1',
    title: 'API de perfil do candidato',
    description: 'Endpoints para CRUD de perfil.',
    status: 'Em revisão',
    priority: 'Alta',
    assigneeId: 'pm_3',
    assigneeName: 'Carlos Dias',
    assigneeAvatarUrl: 'https://i.pravatar.cc/150?u=c1',
    reporterId: 'pm_1',
    dueDate: '2026-05-18T00:00:00Z',
    createdAt: '2026-04-16T00:00:00Z',
    updatedAt: '2026-05-17T00:00:00Z',
  },
  {
    id: 't_4',
    projectId: 'p_1',
    title: 'Integração de currículo PDF',
    description: 'Parser de currículo.',
    status: 'A fazer',
    priority: 'Baixa',
    reporterId: 'pm_1',
    createdAt: '2026-05-01T00:00:00Z',
    updatedAt: '2026-05-01T00:00:00Z',
  }
];

export const mockMilestones: Milestone[] = [
  {
    id: 'm_1',
    projectId: 'p_1',
    title: 'MVP Entregue',
    description: 'Primeira versão do portal.',
    dueDate: '2026-06-30T00:00:00Z',
    status: 'Pendente'
  }
];
