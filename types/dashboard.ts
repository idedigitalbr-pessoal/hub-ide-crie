export interface StatData {
  title: string;
  value: string | number;
  trend: 'up' | 'down' | 'neutral';
  trendValue: string;
}

export interface MemberGrowthData {
  name: string;
  total: number;
}

export interface CourseEnrollmentData {
  name: string;
  alunos: number;
}

export interface RecruitmentFunnelData {
  name: string;
  value: number;
}

export interface PendingCompany {
  id: string;
  name: string;
  requestedAt: string;
  status: 'pending';
}

export interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  attendees: number;
}

export interface ActiveProject {
  id: string;
  name: string;
  progress: number;
  status: 'on_track' | 'at_risk' | 'delayed';
}

export interface RecentForm {
  id: string;
  title: string;
  submittedBy: string;
  submittedAt: string;
}

export interface AlertItem {
  id: string;
  message: string;
  type: 'warning' | 'error' | 'info';
  time: string;
}

export interface RecentActivity {
  id: string;
  user: string;
  userInitials: string;
  action: string;
  target: string;
  time: string;
  color: string;
}
