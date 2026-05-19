export type CompanyStatus = 'Aguardando Aprovação' | 'Aprovada' | 'Rejeitada' | 'Inativa';
export type JobStatus = 'Aberta' | 'Em Andamento' | 'Fechada' | 'Pausada';
export type ApplicationStage = 'Inscrito' | 'Triagem' | 'Pré-selecionado' | 'Entrevista' | 'Teste técnico' | 'Aprovado' | 'Contratado' | 'Reprovado' | 'Banco de talentos';

export interface Company {
  id: string;
  name: string;
  logoUrl?: string;
  industry: string;
  size: string;
  location: string;
  description: string;
  status: CompanyStatus;
  createdAt: string;
}

export interface Job {
  id: string;
  companyId: string;
  companyName: string;
  companyLogoUrl?: string;
  title: string;
  description: string;
  requirements: string[];
  niceToHave: string[];
  locationType: 'Remoto' | 'Híbrido' | 'Presencial';
  location: string;
  employmentType: 'CLT' | 'PJ' | 'Estágio' | 'Freelance';
  salaryRange?: string;
  status: JobStatus;
  skills: string[];
  createdAt: string;
  expiresAt?: string;
  applicantCount: number;
}

export interface CandidateExperience {
  id: string;
  companyName: string;
  position: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
}

export interface CandidateEducation {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate?: string;
}

export interface CandidateProfile {
  id: string;
  userId: string;
  fullName: string;
  headline: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  skills: string[];
  experiences: CandidateExperience[];
  education: CandidateEducation[];
  githubUrl?: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  avatarUrl?: string;
  expectedSalary?: string;
  availability: string;
  resumeUrl?: string;
}

export interface Application {
  id: string;
  jobId: string;
  candidateId: string;
  stage: ApplicationStage;
  appliedAt: string;
  updatedAt: string;
  notes?: string;
  rating?: number;
}
