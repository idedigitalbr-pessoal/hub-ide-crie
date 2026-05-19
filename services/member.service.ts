import { Member, MemberTimelineEvent, MemberDocument, MemberCourse, MemberEvent } from '@/types/member';
import { mockMembers, mockMemberEvents, mockMemberDocuments, mockMemberCourses, mockMemberParticipations } from '@/lib/mock-members';
import { api } from '@/lib/api-client';
import { ApiResponse, QueryParams } from '@/types/api';

class MemberService {
  async getMembers(params?: QueryParams): Promise<ApiResponse<Member[]>> {
    return api.get('/members', params, mockMembers);
  }

  async getMemberById(id: string): Promise<ApiResponse<Member | undefined>> {
    return api.get(`/members/${id}`, undefined, mockMembers.find(m => m.id === id));
  }

  async getMemberTimeline(id: string): Promise<ApiResponse<MemberTimelineEvent[]>> {
    return api.get(`/members/${id}/timeline`, undefined, mockMemberEvents.filter(e => e.memberId === id));
  }
  
  async getMemberDocuments(id: string): Promise<ApiResponse<MemberDocument[]>> {
    return api.get(`/members/${id}/documents`, undefined, mockMemberDocuments.filter(d => d.memberId === id));
  }
  
  async getMemberCourses(id: string): Promise<ApiResponse<MemberCourse[]>> {
    return api.get(`/members/${id}/courses`, undefined, mockMemberCourses.filter(c => c.memberId === id));
  }

  async getMemberEvents(id: string): Promise<ApiResponse<MemberEvent[]>> {
    return api.get(`/members/${id}/events`, undefined, mockMemberParticipations.filter(e => e.memberId === id));
  }
}

export const memberService = new MemberService();
