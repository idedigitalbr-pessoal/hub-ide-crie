import { Member, MemberTimelineEvent, MemberDocument, MemberCourse, MemberEvent } from '@/types/member';

export const mockMembers: Member[] = [
  {
    id: '1',
    fullName: 'Ana Clara Mendes',
    cpf: '111.222.333-44',
    birthDate: '1995-05-12',
    email: 'ana.mendes@email.com',
    phone: '(11) 98765-4321',
    whatsapp: '(11) 98765-4321',
    address: 'Rua das Flores, 123',
    city: 'São Paulo',
    state: 'SP',
    educationLevel: 'Superior Completo',
    interestArea: 'Desenvolvimento Frontend',
    professionalSituation: 'Empregada',
    status: 'Ativo',
    memberType: 'Membro IDE',
    roles: ['events_member', 'project_member', 'lms_student'],
    tags: ['React', 'Next.js', 'Mentoria'],
    notes: 'Boa candidata para vagas de pleno.',
    createdAt: '2026-01-15T10:00:00Z'
  },
  {
    id: '2',
    fullName: 'Lucas Andrade',
    cpf: '222.333.444-55',
    birthDate: '1998-10-20',
    email: 'lucas.andrade@email.com',
    phone: '(21) 99887-6655',
    whatsapp: '(21) 99887-6655',
    address: 'Av. Atlântica, 1000',
    city: 'Rio de Janeiro',
    state: 'RJ',
    educationLevel: 'Superior Incompleto',
    interestArea: 'Desenvolvimento Backend',
    professionalSituation: 'Buscando recolocação',
    status: 'Novo cadastro',
    memberType: 'Aluno',
    roles: ['lms_student'],
    tags: ['Node.js', 'Iniciante'],
    notes: 'Iniciou o curso de Node recentemente.',
    createdAt: '2026-05-18T14:30:00Z'
  },
  {
    id: '3',
    fullName: 'Mariana Costa',
    cpf: '333.444.555-66',
    birthDate: '1992-03-08',
    email: 'mariana.costa@email.com',
    phone: '(31) 97766-5544',
    whatsapp: '(31) 97766-5544',
    address: 'Rua da Bahia, 500',
    city: 'Belo Horizonte',
    state: 'MG',
    educationLevel: 'Pós-graduação',
    interestArea: 'Design / UX',
    professionalSituation: 'Empregada',
    status: 'Aguardando documentação',
    memberType: 'Coordenação',
    roles: ['coordenador', 'project_manager', 'events_manager'],
    tags: ['UX', 'Figma'],
    notes: 'Precisa enviar cópia do diploma.',
    createdAt: '2026-04-20T09:15:00Z'
  },
  {
    id: '4',
    fullName: 'Tech Solutions LTDA',
    cpf: '12.345.678/0001-90',
    birthDate: '2010-01-10',
    email: 'contato@techsolutions.com',
    phone: '(11) 3333-3333',
    whatsapp: '(11) 99999-9999',
    address: 'Av. Paulista, 1000',
    city: 'São Paulo',
    state: 'SP',
    educationLevel: 'N/A',
    interestArea: 'Contratação',
    professionalSituation: 'Empresa',
    status: 'Ativo',
    memberType: 'Empresa Parceira',
    roles: ['company'],
    tags: ['Parceiro', 'Vagas'],
    notes: 'Empresa parceira para divulgação de vagas.',
    createdAt: '2026-05-18T10:00:00Z'
  }
];

export const mockMemberEvents: MemberTimelineEvent[] = [
  {
    id: '1',
    memberId: '1',
    type: 'course',
    title: 'Inscrição em Curso',
    description: 'Inscrita no curso React Avançado.',
    date: '2026-05-10T14:00:00Z',
    user: 'Sistema'
  },
  {
    id: '2',
    memberId: '1',
    type: 'general',
    title: 'Atualização de Perfil',
    description: 'Alterou o telefone de contato.',
    date: '2026-05-12T10:30:00Z',
    user: 'Ana Clara Mendes'
  }
];

export const mockMemberDocuments: MemberDocument[] = [
  {
    id: '1',
    memberId: '1',
    name: 'Curriculo_Ana.pdf',
    type: 'pdf',
    status: 'Aprovado',
    uploadDate: '2026-01-16T10:00:00Z'
  }
];

export const mockMemberCourses: MemberCourse[] = [
  {
    id: '1',
    memberId: '1',
    courseName: 'React Avançado',
    progress: 45,
    status: 'Em andamento',
    enrollmentDate: '2026-05-10T14:00:00Z'
  }
];

export const mockMemberParticipations: MemberEvent[] = [
  {
    id: '1',
    memberId: '1',
    eventName: 'Hackathon IDE Hub 2026',
    date: '2026-05-25T08:00:00Z',
    status: 'Inscrito'
  }
];
