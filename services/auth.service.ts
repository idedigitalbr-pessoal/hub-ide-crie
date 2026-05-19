import { api } from '@/lib/api-client';
import { ApiResponse } from '@/types/api';
import { AuthSession, User } from '@/types/auth';

class AuthService {
  async login(credentials: any): Promise<ApiResponse<AuthSession>> {
    const mockUser: User = {
      id: 'usr_mock_1',
      email: 'admin@idehub.com',
      name: 'Administrador',
      role: 'ADMIN',
      permissions: [{ action: 'manage', subject: 'all' }]
    };
    
    return api.post('/auth/login', credentials, {
      user: mockUser,
      accessToken: 'mock_jwt_access_token_12345',
      expiresAt: Date.now() + 3600 * 1000
    });
  }

  async getProfile(): Promise<ApiResponse<User>> {
    const mockUser: User = {
      id: 'usr_mock_1',
      email: 'admin@idehub.com',
      name: 'Administrador',
      role: 'ADMIN',
    };
    return api.get('/auth/me', undefined, mockUser);
  }
}

export const authService = new AuthService();
