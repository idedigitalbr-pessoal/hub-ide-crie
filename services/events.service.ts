import { Event, EventRegistration } from '@/types/events';
import { mockEvents, mockEventRegistrations } from '@/lib/mock-events';
import { api } from '@/lib/api-client';
import { ApiResponse, QueryParams } from '@/types/api';

class EventsService {
  async getEvents(params?: QueryParams): Promise<ApiResponse<Event[]>> {
    return api.get('/events', params, mockEvents);
  }

  async getEventById(id: string): Promise<ApiResponse<Event | undefined>> {
    return api.get(`/events/${id}`, undefined, mockEvents.find(e => e.id === id));
  }

  async getRegistrationsByEvent(eventId: string): Promise<ApiResponse<EventRegistration[]>> {
    return api.get(`/events/${eventId}/registrations`, undefined, mockEventRegistrations.filter(r => r.eventId === eventId));
  }
}

export const eventsService = new EventsService();
