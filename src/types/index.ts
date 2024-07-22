export enum E_ADDRESS_TYPE {
  ACTUAL = "actual",
  LEGAL = "legal",
}

export interface IAddresses {
  id: number;
  location: [number, number];
  address: string;
  address_type: E_ADDRESS_TYPE;
}

export interface IPagination {
  page: number;
  page_size: number;
  count: number;
}

export interface IBaseTableInitialState<T> {
  items: Array<T>;
  pagination: IPagination;
}
