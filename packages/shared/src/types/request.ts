export interface IRequest {}

export interface IPageRequest extends IRequest {
  page: number;
  pageSize: number;
}
