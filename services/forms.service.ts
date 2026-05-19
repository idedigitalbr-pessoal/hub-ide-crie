import { Form, FormResponse } from '@/types/forms';
import { mockForms, mockFormResponses } from '@/lib/mock-forms';
import { api } from '@/lib/api-client';
import { ApiResponse, QueryParams } from '@/types/api';

class FormsService {
  async getForms(params?: QueryParams): Promise<ApiResponse<Form[]>> {
    return api.get('/forms', params, mockForms);
  }

  async getFormById(id: string): Promise<ApiResponse<Form | undefined>> {
    return api.get(`/forms/${id}`, undefined, mockForms.find(f => f.id === id));
  }

  async getResponsesByForm(formId: string): Promise<ApiResponse<FormResponse[]>> {
    return api.get(`/forms/${formId}/responses`, undefined, mockFormResponses.filter(r => r.formId === formId));
  }
}

export const formsService = new FormsService();
