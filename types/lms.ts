export type CourseLevel = 'Iniciante' | 'Intermediário' | 'Avançado';
export type LessonType = 'video' | 'text' | 'quiz' | 'file';
export type CourseStatus = 'Rascunho' | 'Publicado' | 'Arquivado';
export type EnrollmentStatus = 'Ativo' | 'Concluído' | 'Cancelado';

export interface Instructor {
  id: string;
  name: string;
  avatarUrl?: string;
  bio: string;
  expertise: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
}

export interface Lesson {
  id: string;
  title: string;
  type: LessonType;
  durationInMinutes: number;
  videoUrl?: string;
  textContent?: string;
  quizQuestions?: QuizQuestion[];
  isCompleted?: boolean; // Contextual to user
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  order: number;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  thumbnailUrl: string;
  level: CourseLevel;
  durationInHours: number;
  status: CourseStatus;
  instructorId: string;
  instructor?: Instructor;
  tags: string[];
  modules: CourseModule[];
  createdAt: string;
  updatedAt: string;
}

export interface Enrollment {
  id: string;
  courseId: string;
  userId: string;
  status: EnrollmentStatus;
  progressPercentage: number;
  enrolledAt: string;
  lastAccessedAt: string;
  completedAt?: string;
}

export interface CourseReview {
  id: string;
  courseId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}
