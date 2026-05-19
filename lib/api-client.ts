import { ApiResponse, QueryParams } from '@/types/api';

/**
 * Base API Client to handle HTTP requests.
 * Currently simulates network calls using a sleep function.
 * In a real scenario, this would wrap fetch or axios.
 */
class ApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
  }

  /**
   * Helper to simulate network delay
   */
  private async delay(ms: number = 500): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Encodes query parameters to a string
   */
  private buildQueryString(params?: QueryParams): string {
    if (!params) return '';
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });
    const qs = searchParams.toString();
    return qs ? `?${qs}` : '';
  }

  /**
   * Simulate a GET request
   * When integrating with Nest.js, replace this with actual fetch/axios.
   */
  async get<T>(url: string, params?: QueryParams, mockData?: T): Promise<ApiResponse<T>> {
    await this.delay();
    
    // TODO: Replace with real request:
    // const response = await fetch(`${this.baseUrl}${url}${this.buildQueryString(params)}`, { ...headers... });
    // return response.json();
    
    // Simulated mock response logic:
    if (mockData === undefined) {
       throw new Error(`[Mock API] No data provided for ${url}`);
    }

    return {
      data: mockData,
      meta: {
        page: params?.page || 1,
        limit: params?.limit || 10,
        total: Array.isArray(mockData) ? mockData.length : 1
      },
      message: 'Sucesso'
    };
  }

  /**
   * Simulate a POST request
   */
  async post<T, D = any>(url: string, data: D, mockData?: T): Promise<ApiResponse<T>> {
    await this.delay();
    if (mockData === undefined) {
      throw new Error(`[Mock API] No data provided for POST ${url}`);
    }
    return {
      data: mockData,
      message: 'Criado com sucesso'
    };
  }

  /**
   * Simulate a PUT request
   */
  async put<T, D = any>(url: string, data: D, mockData?: T): Promise<ApiResponse<T>> {
    await this.delay();
    if (mockData === undefined) {
      throw new Error(`[Mock API] No data provided for PUT ${url}`);
    }
    return {
      data: mockData,
      message: 'Atualizado com sucesso'
    };
  }

  /**
   * Simulate a DELETE request
   */
  async delete(url: string): Promise<ApiResponse<boolean>> {
    await this.delay();
    return {
      data: true,
      message: 'Excluído com sucesso'
    };
  }
}

export const api = new ApiClient();
