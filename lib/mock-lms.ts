import { Course, Instructor, Enrollment, CourseReview } from '@/types/lms';

export const mockInstructors: Instructor[] = [
  {
    id: 'inst_1',
    name: 'Carlos Azevedo',
    bio: 'Especialista em Engenharia de Software com mais de 10 anos de experiência em arquitetura de sistemas.',
    expertise: ['React', 'Node.js', 'Arquitetura'],
  },
  {
    id: 'inst_2',
    name: 'Julia Ramos',
    bio: 'Product Designer sênior apaixonada por acessibilidade e usabilidade.',
    expertise: ['UX Design', 'UI Design', 'Figma'],
  }
];

export const mockCourses: Course[] = [
  {
    id: 'c_1',
    title: 'Fundamentos de React',
    slug: 'fundamentos-react',
    description: 'Aprenda a construir interfaces modernas com a biblioteca mais popular do mercado, utilizando hooks, context e boas práticas.',
    shortDescription: 'Domine a biblioteca padrão do mercado de frontend.',
    thumbnailUrl: 'https://picsum.photos/seed/react/800/400',
    level: 'Intermediário',
    durationInHours: 12,
    status: 'Publicado',
    instructorId: 'inst_1',
    instructor: mockInstructors[0],
    tags: ['Frontend', 'React', 'Javascript'],
    createdAt: '2026-01-10T00:00:00Z',
    updatedAt: '2026-02-15T00:00:00Z',
    modules: [
      {
        id: 'mod_1',
        title: 'Introdução ao React',
        description: 'Tudo o que você precisa saber antes de começar',
        order: 1,
        lessons: [
          { id: 'les_1', title: 'O que é o React?', type: 'video', durationInMinutes: 10 },
          { id: 'les_2', title: 'Configurando o ambiente', type: 'text', durationInMinutes: 15 },
        ]
      },
      {
        id: 'mod_2',
        title: 'Componentes e Estado',
        description: 'A base do React moderno',
        order: 2,
        lessons: [
          { id: 'les_3', title: 'Criando seu primeiro componente', type: 'video', durationInMinutes: 20 },
          { id: 'les_4', title: 'O hook useState', type: 'video', durationInMinutes: 25 },
          { 
            id: 'les_5', 
            title: 'Quiz: Componentes e Estado', 
            type: 'quiz', 
            durationInMinutes: 15,
            quizQuestions: [
              {
                id: 'q_1',
                question: 'O que é um Hook em React?',
                options: ['Uma classe', 'Uma função especial', 'Uma tag HTML', 'Um estilo CSS'],
                correctOptionIndex: 1
              }
            ]
          },
        ]
      }
    ]
  },
  {
    id: 'c_2',
    title: 'Design System Prático',
    slug: 'design-system',
    description: 'Aprenda a criar um Design System do zero no Figma e conectá-lo ao código.',
    shortDescription: 'Escale interfaces de forma consistente.',
    thumbnailUrl: 'https://picsum.photos/seed/design/800/400',
    level: 'Iniciante',
    durationInHours: 8,
    status: 'Publicado',
    instructorId: 'inst_2',
    instructor: mockInstructors[1],
    tags: ['UX/UI', 'Figma', 'Design'],
    createdAt: '2026-03-01T00:00:00Z',
    updatedAt: '2026-03-01T00:00:00Z',
    modules: [
      {
        id: 'mod_d1',
        title: 'Fundamentos de Design Systems',
        description: 'Conceitos core',
        order: 1,
        lessons: [
          { id: 'les_d1', title: 'Tokens vs Variáveis', type: 'video', durationInMinutes: 12 },
        ]
      }
    ]
  },
  {
    id: 'c_3',
    title: 'Advanced Node.js',
    slug: 'advanced-node',
    description: 'Arquitetura de microsserviços, filas e mensageria usando ecossistema Node.',
    shortDescription: 'Arquitetura moderna de backend.',
    thumbnailUrl: 'https://picsum.photos/seed/node/800/400',
    level: 'Avançado',
    durationInHours: 20,
    status: 'Publicado',
    instructorId: 'inst_1',
    instructor: mockInstructors[0],
    tags: ['Backend', 'Node.js', 'Arquitetura'],
    createdAt: '2026-04-10T00:00:00Z',
    updatedAt: '2026-04-12T00:00:00Z',
    modules: []
  }
];

export const mockEnrollments: Enrollment[] = [
  {
    id: 'enr_1',
    courseId: 'c_1',
    userId: 'current_user',
    status: 'Ativo',
    progressPercentage: 45,
    enrolledAt: '2026-05-01T10:00:00Z',
    lastAccessedAt: '2026-05-18T14:30:00Z'
  },
  {
    id: 'enr_2',
    courseId: 'c_2',
    userId: 'current_user',
    status: 'Concluído',
    progressPercentage: 100,
    enrolledAt: '2026-04-01T08:00:00Z',
    lastAccessedAt: '2026-04-20T18:00:00Z',
    completedAt: '2026-04-20T18:00:00Z'
  }
];

export const mockReviews: CourseReview[] = [
  {
    id: 'rev_1',
    courseId: 'c_1',
    userId: 'user_1',
    userName: 'Ana Souza',
    rating: 5,
    comment: 'Excelente curso! Direto ao ponto e com ótimos exemplos.',
    createdAt: '2026-02-20T10:00:00Z'
  }
];
