export type FormStatus = 'Rascunho' | 'Publicado' | 'Encerrado';

export interface FormField {
  id: string;
  type: 'text' | 'textarea' | 'radio' | 'checkbox' | 'select' | 'date';
  label: string;
  required: boolean;
  options?: string[]; // for radio, checkbox, select
}

export interface Form {
  id: string;
  title: string;
  description: string;
  status: FormStatus;
  fields: FormField[];
  responsesCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface FormResponse {
  id: string;
  formId: string;
  userId?: string;
  userName?: string;
  userEmail?: string;
  answers: Record<string, string | string[]>;
  submittedAt: string;
}
