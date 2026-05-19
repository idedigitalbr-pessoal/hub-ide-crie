import { OnboardingTrack, MemberProgress } from '@/types/onboarding';

export const mockOnboardingTracks: OnboardingTrack[] = [
  {
    id: '1',
    title: 'Trilha Inicial de Boas-vindas',
    description: 'Onboarding obrigatório para todos os novos membros da plataforma.',
    status: 'published',
    createdAt: '2026-05-01T10:00:00Z',
    modules: [
      {
        id: 'm1',
        title: 'Introdução ao IDE Hub',
        description: 'Conheça nossa história e propósito.',
        lessons: [
          { id: 'l1', title: 'Boas-vindas', type: 'video', duration: '5 min' },
          { id: 'l2', title: 'Como funciona a instituição', type: 'text', duration: '10 min' }
        ]
      },
      {
        id: 'm2',
        title: 'Navegando na Plataforma',
        description: 'Aprenda a utilizar os principais recursos.',
        lessons: [
          { id: 'l3', title: 'Como usar a plataforma', type: 'video', duration: '15 min' },
          { id: 'l4', title: 'Código de conduta', type: 'document', duration: '10 min' }
        ]
      },
      {
        id: 'm3',
        title: 'Próximos Passos',
        description: 'Prepare-se para iniciar sua jornada.',
        lessons: [
          { id: 'l5', title: 'Preenchendo seu Perfil Profissional', type: 'video', duration: '8 min' },
          { id: 'l6', title: 'Avaliação Final', type: 'quiz', duration: '20 min' }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Onboarding para Instrutores',
    description: 'Treinamento específico para novos criadores de conteúdo.',
    status: 'draft',
    createdAt: '2026-05-15T14:30:00Z',
    modules: []
  }
];

export const mockMemberProgress: MemberProgress[] = [
  {
    memberId: '1',
    memberName: 'Ana Clara Mendes',
    memberEmail: 'ana.mendes@email.com',
    trackId: '1',
    trackName: 'Trilha Inicial de Boas-vindas',
    progressPercentage: 100,
    status: 'completed',
    startedAt: '2026-05-10T10:00:00Z',
    completedAt: '2026-05-12T15:30:00Z'
  },
  {
    memberId: '2',
    memberName: 'Lucas Andrade',
    memberEmail: 'lucas.andrade@email.com',
    trackId: '1',
    trackName: 'Trilha Inicial de Boas-vindas',
    progressPercentage: 45,
    status: 'in_progress',
    startedAt: '2026-05-18T09:00:00Z'
  },
  {
    memberId: '3',
    memberName: 'Mariana Costa',
    memberEmail: 'mariana.costa@email.com',
    trackId: '1',
    trackName: 'Trilha Inicial de Boas-vindas',
    progressPercentage: 0,
    status: 'not_started'
  }
];
