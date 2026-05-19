export type EventType = 'Palestra' | 'Workshop' | 'Seminário' | 'Feira de empregos' | 'Processo seletivo' | 'Encontro institucional' | 'Aula inaugural' | 'Imersão';
export type EventStatus = 'Rascunho' | 'Publicado' | 'Cancelado' | 'Concluído';
export type RegistrationStatus = 'Pendente' | 'Confirmada' | 'Cancelada';
export type EventFormat = 'Presencial' | 'Online' | 'Híbrido';

export interface EventSpeaker {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl?: string;
  bio: string;
}

export interface EventScheduleItem {
  id: string;
  time: string;
  title: string;
  description: string;
  speakerId?: string;
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  type: EventType;
  format: EventFormat;
  status: EventStatus;
  startDate: string;
  endDate: string;
  location?: string;
  meetingUrl?: string;
  coverUrl: string;
  capacity: number;
  registeredCount: number;
  speakers: EventSpeaker[];
  schedule: EventScheduleItem[];
  tags: string[];
  createdAt: string;
}

export interface EventRegistration {
  id: string;
  eventId: string;
  userId: string;
  userName: string;
  userEmail: string;
  status: RegistrationStatus;
  registeredAt: string;
  checkedInAt?: string;
}

export interface EventFeedback {
  id: string;
  eventId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
}
