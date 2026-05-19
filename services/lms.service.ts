import { Course, Enrollment } from '@/types/lms';
import { mockCourses, mockEnrollments } from '@/lib/mock-lms';
import { api } from '@/lib/api-client';
import { ApiResponse, QueryParams } from '@/types/api';

class LmsService {
  async getCourses(params?: QueryParams): Promise<ApiResponse<Course[]>> {
    return api.get('/lms/courses', params, mockCourses);
  }

  async getCourseById(id: string): Promise<ApiResponse<Course | undefined>> {
    return api.get(`/lms/courses/${id}`, undefined, mockCourses.find(c => c.id === id));
  }

  async getCourseBySlug(slug: string): Promise<ApiResponse<Course | undefined>> {
    return api.get(`/lms/courses/slug/${slug}`, undefined, mockCourses.find(c => c.slug === slug));
  }

  async getEnrolledCourses(userId: string): Promise<ApiResponse<Course[]>> {
    const enrollments = mockEnrollments.filter(e => e.userId === userId);
    const courseIds = enrollments.map(e => e.courseId);
    const courses = mockCourses.filter(c => courseIds.includes(c.id));
    return api.get(`/lms/users/${userId}/enrolled`, undefined, courses);
  }

  async getEnrollmentsByUser(userId: string): Promise<ApiResponse<Enrollment[]>> {
    return api.get(`/lms/enrollments/user/${userId}`, undefined, mockEnrollments.filter(e => e.userId === userId));
  }
}

export const lmsService = new LmsService();
