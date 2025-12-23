export interface IResponse<T = unknown> {
  code: number | string;
  message: string;
  data: T;
  success: boolean;
}

export interface IListResponse<T = unknown> extends IResponse<T> {
  total: number;
}
