import { Event, EventRegistration, EventFeedback } from '@/types/events';

export const mockEvents: Event[] = [
  {
    id: 'evt_1',
    title: 'Feira de Carreiras em Tecnologia',
    slug: 'feira-carreiras-tech-2026',
    description: 'A maior feira de empregos focada em estudantes de tecnologia. Conecte-se com as melhores empresas do mercado, participe de workshops e agende entrevistas.',
    shortDescription: 'Conecte-se com as melhores empresas de tecnologia.',
    type: 'Feira de empregos',
    format: 'Presencial',
    status: 'Publicado',
    startDate: '2026-06-15T09:00:00Z',
    endDate: '2026-06-15T18:00:00Z',
    location: 'Campus Principal - Pavilhão de Eventos',
    coverUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
    capacity: 2000,
    registeredCount: 1450,
    speakers: [
      {
        id: 'spk_1',
        name: 'Maria Silva',
        role: 'Tech Lead',
        company: 'Google',
        avatarUrl: 'https://i.pravatar.cc/150?u=ms',
        bio: 'Especialista em inteligência artificial e líder de engenharia.'
      }
    ],
    schedule: [
      {
        id: 'sch_1',
        time: '09:00',
        title: 'Abertura',
        description: 'Cerimônia de abertura da feira de profissões.'
      },
      {
        id: 'sch_2',
        time: '10:00',
        title: 'O Futuro da IA no Mercado de Trabalho',
        description: 'Palestra sobre o impacto da inteligência artificial nas carreiras.',
        speakerId: 'spk_1'
      }
    ],
    tags: ['Carreira', 'Tecnologia', 'Networking'],
    createdAt: '2026-04-01T10:00:00Z'
  },
  {
    id: 'evt_2',
    title: 'Workshop de React & Next.js',
    slug: 'workshop-react-nextjs',
    description: 'Aprenda na prática a construir aplicações modernas e performáticas.',
    shortDescription: 'Desenvolvimento Frontend na prática.',
    type: 'Workshop',
    format: 'Online',
    status: 'Publicado',
    startDate: '2026-05-25T14:00:00Z',
    endDate: '2026-05-25T18:00:00Z',
    meetingUrl: 'https://zoom.us/j/123456789',
    coverUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop',
    capacity: 100,
    registeredCount: 100,
    speakers: [],
    schedule: [],
    tags: ['Frontend', 'React', 'Javascript'],
    createdAt: '2026-05-01T10:00:00Z'
  },
  {
    id: 'evt_3',
    title: 'Seminário de Inovação Aberta',
    slug: 'seminario-inovacao-aberta',
    description: 'Discutindo os limites da inovação corporativa no século 21.',
    shortDescription: 'Inovação em corporações contemporâneas.',
    type: 'Seminário',
    format: 'Híbrido',
    status: 'Rascunho',
    startDate: '2026-08-10T09:00:00Z',
    endDate: '2026-08-11T18:00:00Z',
    location: 'Auditório Central',
    coverUrl: 'https://images.unsplash.com/photo-1556761175-5973e7fc936e?q=80&w=1200&auto=format&fit=crop',
    capacity: 300,
    registeredCount: 0,
    speakers: [],
    schedule: [],
    tags: ['Inovação', 'Negócios'],
    createdAt: '2026-05-15T10:00:00Z'
  }
];

export const mockEventRegistrations: EventRegistration[] = [
  {
    id: 'reg_1',
    eventId: 'evt_1',
    userId: 'u_1',
    userName: 'João Pedro',
    userEmail: 'joao.pedro@email.com',
    status: 'Confirmada',
    registeredAt: '2026-04-15T12:30:00Z'
  },
  {
    id: 'reg_2',
    eventId: 'evt_1',
    userId: 'u_2',
    userName: 'Ana Costa',
    userEmail: 'ana.costa@email.com',
    status: 'Confirmada',
    registeredAt: '2026-04-16T09:15:00Z',
    checkedInAt: '2026-06-15T08:50:00Z'
  }
];
