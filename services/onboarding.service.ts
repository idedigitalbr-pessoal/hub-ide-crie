import { OnboardingTrack, MemberProgress } from '@/types/onboarding';
import { mockOnboardingTracks, mockMemberProgress } from '@/lib/mock-onboarding';
import { api } from '@/lib/api-client';
import { ApiResponse, QueryParams } from '@/types/api';

class OnboardingService {
  async getTracks(params?: QueryParams): Promise<ApiResponse<OnboardingTrack[]>> {
    return api.get('/onboarding/tracks', params, mockOnboardingTracks);
  }

  async getTrackById(id: string): Promise<ApiResponse<OnboardingTrack | undefined>> {
    return api.get(`/onboarding/tracks/${id}`, undefined, mockOnboardingTracks.find(t => t.id === id));
  }

  async getMembersProgress(params?: QueryParams): Promise<ApiResponse<MemberProgress[]>> {
    return api.get('/onboarding/progress', params, mockMemberProgress);
  }
}

export const onboardingService = new OnboardingService();
