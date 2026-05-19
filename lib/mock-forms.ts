import { Form, FormResponse } from '@/types/forms';

export const mockForms: Form[] = [
  {
    id: 'f_1',
    title: 'Pesquisa de Clima Organizacional 2026',
    description: 'Ajude-nos a entender como podemos melhorar o ambiente de trabalho.',
    status: 'Publicado',
    fields: [
      {
        id: 'field_1',
        type: 'radio',
        label: 'Como você avalia seu ambiente de trabalho?',
        required: true,
        options: ['Excelente', 'Bom', 'Regular', 'Ruim']
      },
      {
        id: 'field_2',
        type: 'textarea',
        label: 'Quais sugestões de melhoria você daria?',
        required: false
      }
    ],
    responsesCount: 145,
    createdAt: '2026-05-01T10:00:00Z',
    updatedAt: '2026-05-01T10:00:00Z'
  },
  {
    id: 'f_2',
    title: 'Formulário de Inscrição para Voluntariado',
    description: 'Inscreva-se para as vagas de voluntariado nos projetos sociais.',
    status: 'Rascunho',
    fields: [
      {
        id: 'field_1',
        type: 'text',
        label: 'Nome Completo',
        required: true
      },
      {
        id: 'field_2',
        type: 'select',
        label: 'Área de interesse',
        required: true,
        options: ['Educação', 'Meio Ambiente', 'Saúde', 'Tecnologia']
      }
    ],
    responsesCount: 0,
    createdAt: '2026-05-18T14:30:00Z',
    updatedAt: '2026-05-18T14:30:00Z'
  },
  {
    id: 'f_3',
    title: 'Avaliação de Treinamento - Liderança',
    description: 'Avalie o treinamento de liderança realizado no mês passado.',
    status: 'Encerrado',
    fields: [],
    responsesCount: 56,
    createdAt: '2026-04-10T09:00:00Z',
    updatedAt: '2026-04-30T18:00:00Z'
  }
];

export const mockFormResponses: FormResponse[] = [
  {
    id: 'resp_1',
    formId: 'f_1',
    userName: 'Carlos Silva',
    userEmail: 'carlos.silva@email.com',
    answers: {
      'field_1': 'Bom',
      'field_2': 'Mais eventos de integração.'
    },
    submittedAt: '2026-05-02T11:20:00Z'
  }
];
