export interface OnboardingLesson {
  id: string;
  title: string;
  type: 'video' | 'text' | 'quiz' | 'document';
  duration: string;
  isCompleted?: boolean;
}

export interface OnboardingModule {
  id: string;
  title: string;
  description: string;
  lessons: OnboardingLesson[];
}

export interface OnboardingTrack {
  id: string;
  title: string;
  description: string;
  status: 'published' | 'draft' | 'archived';
  modules: OnboardingModule[];
  createdAt: string;
}

export interface MemberProgress {
  memberId: string;
  memberName: string;
  memberEmail: string;
  trackId: string;
  trackName: string;
  progressPercentage: number;
  status: 'not_started' | 'in_progress' | 'completed';
  startedAt?: string;
  completedAt?: string;
}
