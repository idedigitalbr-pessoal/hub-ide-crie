import { Project, Task, Milestone } from '@/types/projects';
import { mockProjects, mockTasks, mockMilestones } from '@/lib/mock-projects';
import { api } from '@/lib/api-client';
import { ApiResponse, QueryParams } from '@/types/api';

class ProjectsService {
  async getProjects(params?: QueryParams): Promise<ApiResponse<Project[]>> {
    return api.get('/projects', params, mockProjects);
  }

  async getProjectById(id: string): Promise<ApiResponse<Project | undefined>> {
    return api.get(`/projects/${id}`, undefined, mockProjects.find(p => p.id === id));
  }

  async getTasksByProject(projectId: string): Promise<ApiResponse<Task[]>> {
    return api.get(`/projects/${projectId}/tasks`, undefined, mockTasks.filter(t => t.projectId === projectId));
  }

  async getMilestonesByProject(projectId: string): Promise<ApiResponse<Milestone[]>> {
    return api.get(`/projects/${projectId}/milestones`, undefined, mockMilestones.filter(m => m.projectId === projectId));
  }
}

export const projectsService = new ProjectsService();
