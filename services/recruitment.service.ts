import { Job, CandidateProfile, Application, Company } from '@/types/recruitment';
import { mockJobs, mockCandidates, mockApplications, mockCompanies } from '@/lib/mock-recruitment';
import { api } from '@/lib/api-client';
import { ApiResponse, QueryParams } from '@/types/api';

class RecruitmentService {
  async getJobs(params?: QueryParams): Promise<ApiResponse<Job[]>> {
    return api.get('/jobs', params, mockJobs);
  }

  async getJobById(id: string): Promise<ApiResponse<Job | undefined>> {
    return api.get(`/jobs/${id}`, undefined, mockJobs.find(j => j.id === id));
  }

  async getCandidates(params?: QueryParams): Promise<ApiResponse<CandidateProfile[]>> {
    return api.get('/candidates', params, mockCandidates);
  }

  async getApplicationsByJob(jobId: string): Promise<ApiResponse<Application[]>> {
    return api.get(`/jobs/${jobId}/applications`, undefined, mockApplications.filter(a => a.jobId === jobId));
  }

  async getCompanies(params?: QueryParams): Promise<ApiResponse<Company[]>> {
    return api.get('/companies', params, mockCompanies);
  }
}

export const recruitmentService = new RecruitmentService();
