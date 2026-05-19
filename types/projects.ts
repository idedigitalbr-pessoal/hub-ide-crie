export type ProjectStatus = 'Planejamento' | 'Em execução' | 'Em pausa' | 'Em revisão' | 'Concluído' | 'Cancelado';
export type TaskStatus = 'A fazer' | 'Em andamento' | 'Em revisão' | 'Concluída' | 'Bloqueada';
export type TaskPriority = 'Baixa' | 'Média' | 'Alta' | 'Crítica';

export interface ProjectMember {
  id: string;
  userId: string;
  name: string;
  avatarUrl?: string;
  role: 'Gerente' | 'Membro' | 'Stakeholder';
  jobTitle?: string;
}

export interface Task {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  assigneeId?: string;
  assigneeName?: string;
  assigneeAvatarUrl?: string;
  reporterId: string;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Milestone {
  id: string;
  projectId: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'Pendente' | 'Alcançado' | 'Atrasado';
}

export interface ProjectDocument {
  id: string;
  projectId: string;
  title: string;
  url: string;
  type: string;
  uploadedBy: string;
  createdAt: string;
}

export interface Comment {
  id: string;
  entityType: 'Task' | 'Project';
  entityId: string;
  authorId: string;
  authorName: string;
  authorAvatarUrl?: string;
  content: string;
  createdAt: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  startDate: string;
  endDate?: string;
  progressPercentage: number;
  members: ProjectMember[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
