export interface IBaseApiListQuery {
  page: number;
  page_size: number;
}

export interface IBaseApiListResponse<T> {
  count: number;
  results: Array<T>;
}
