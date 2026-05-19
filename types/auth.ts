export type Role = 'ADMIN' | 'TEACHER' | 'STUDENT' | 'COMPANY' | 'GUEST';

export interface Permission {
  action: 'create' | 'read' | 'update' | 'delete' | 'manage';
  subject: string; // e.g. 'Project', 'Course', 'all'
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  role: Role;
  permissions?: Permission[];
}

export interface AuthSession {
  user: User;
  accessToken: string;
  refreshToken?: string;
  expiresAt: number;
}
