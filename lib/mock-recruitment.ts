import { Company, Job, CandidateProfile, Application } from '@/types/recruitment';

export const mockCompanies: Company[] = [
  {
    id: 'comp_1',
    name: 'TechNova',
    logoUrl: 'https://picsum.photos/seed/technova/100/100',
    industry: 'Tecnologia da Informação',
    size: '100-500 funcionários',
    location: 'São Paulo, SP',
    description: 'A TechNova é líder em soluções cloud native...',
    status: 'Aprovada',
    createdAt: '2025-10-15T10:00:00Z',
  },
  {
    id: 'comp_2',
    name: 'FinBank',
    logoUrl: 'https://picsum.photos/seed/finbank/100/100',
    industry: 'Serviços Financeiros',
    size: '1000+ funcionários',
    location: 'Rio de Janeiro, RJ (Híbrido)',
    description: 'Transformando a experiência bancária.',
    status: 'Aguardando Aprovação',
    createdAt: '2026-05-18T14:00:00Z',
  }
];

export const mockJobs: Job[] = [
  {
    id: 'job_1',
    companyId: 'comp_1',
    companyName: 'TechNova',
    companyLogoUrl: 'https://picsum.photos/seed/technova/100/100',
    title: 'Desenvolvedor Full Stack Senior',
    description: 'Buscamos um dev sênior para atuar em nossos produtos core...',
    requirements: ['5+ anos de experiência', 'React', 'Node.js', 'Typescript'],
    niceToHave: ['AWS', 'Docker', 'Kubernetes'],
    locationType: 'Remoto',
    location: 'Brasil',
    employmentType: 'PJ',
    salaryRange: 'R$ 15.000 - R$ 20.000',
    status: 'Aberta',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
    createdAt: '2026-05-10T09:00:00Z',
    applicantCount: 45
  },
  {
    id: 'job_2',
    companyId: 'comp_1',
    companyName: 'TechNova',
    companyLogoUrl: 'https://picsum.photos/seed/technova/100/100',
    title: 'Product Designer (Pleno)',
    description: 'Ajude a desenhar o futuro dos nossos produtos.',
    requirements: ['3+ anos de experiência', 'Figma', 'Prototipação', 'UI/UX'],
    niceToHave: ['HTML/CSS básico', 'Testes de usabilidade'],
    locationType: 'Híbrido',
    location: 'São Paulo, SP',
    employmentType: 'CLT',
    salaryRange: 'R$ 7.000 - R$ 10.000',
    status: 'Aberta',
    skills: ['Figma', 'UX Design', 'Design System'],
    createdAt: '2026-05-12T10:00:00Z',
    applicantCount: 128
  }
];

export const mockCandidates: CandidateProfile[] = [
  {
    id: 'cand_1',
    userId: 'user_cand_1',
    fullName: 'Mariana Silva',
    headline: 'Frontend Developer | React e Typescript',
    summary: 'Desenvolvedora apaixonada por interfaces limpas e acessíveis.',
    email: 'mariana.silva@example.com',
    phone: '',
    location: 'Campinas, SP',
    skills: ['React', 'TypeScript', 'Tailwind', 'Next.js'],
    availability: 'Imediata',
    avatarUrl: 'https://i.pravatar.cc/150?u=cand_1',
    experiences: [
      {
        id: 'exp_1',
        companyName: 'CodeWorks',
        position: 'Frontend Dev Pleno',
        startDate: '2022-03-01T00:00:00Z',
        current: true,
        description: 'Desenvolvimento de dashboards e portais institucionais.'
      }
    ],
    education: [
      {
        id: 'edu_1',
        institution: 'Universidade X',
        degree: 'Bacharelado',
        fieldOfStudy: 'Ciência da Computação',
        startDate: '2016-02-01T00:00:00Z',
        endDate: '2020-12-01T00:00:00Z'
      }
    ]
  },
  {
    id: 'cand_2',
    userId: 'user_cand_2',
    fullName: 'Lucas Mendes',
    headline: 'Senior Full Stack Engineer',
    summary: 'Especialista em arquiteturas escaláveis.',
    email: 'lucas.mendes@example.com',
    phone: '',
    location: 'Remoto',
    skills: ['Node.js', 'React', 'AWS', 'Docker'],
    availability: '30 dias',
    avatarUrl: 'https://i.pravatar.cc/150?u=cand_2',
    experiences: [],
    education: []
  }
];

export const mockApplications: Application[] = [
  {
    id: 'app_1',
    jobId: 'job_1',
    candidateId: 'cand_2',
    stage: 'Entrevista',
    appliedAt: '2026-05-11T10:00:00Z',
    updatedAt: '2026-05-15T10:00:00Z',
  },
  {
    id: 'app_2',
    jobId: 'job_1',
    candidateId: 'cand_1',
    stage: 'Triagem',
    appliedAt: '2026-05-14T15:00:00Z',
    updatedAt: '2026-05-14T15:00:00Z',
  }
];
