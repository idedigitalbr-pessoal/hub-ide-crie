export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages?: number;
}

export interface ApiResponse<T> {
  data: T;
  meta?: PaginationMeta;
  message?: string;
}

export interface ApiError {
  message: string;
  code?: string;
  details?: any;
}

export interface QueryParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  [key: string]: any;
}
