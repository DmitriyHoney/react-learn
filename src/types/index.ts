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
}

export interface IBaseTableInitialState<T> {
  items: Array<T>;
  pagination: IPagination;
}

// Models
export interface IOrganizationItem {
  id: number;
  name: string;
  short_name: string;
  image: string | null;
  is_active: boolean;
  addresses: IAddresses;
}

export enum E_ORGANIZATION_WORK_MODE {
  AROUND_CLOCK = "around_clock", // Круглосуточно
  WORK_SCHEDULE = "work_schedule", // Расписание
  CLOSED = "closed", // Временно закрыт
}

export interface IOrganizationCreateItem {
  name: string;
  short_name: string;
  description: string;
  work_mode: E_ORGANIZATION_WORK_MODE;
  maximum_seats?: number;
  parent?: number;
  image?: number;
}

export interface IOrganizationUpdateItem {
  name?: string;
  short_name?: string;
  description?: string;
  work_mode?: E_ORGANIZATION_WORK_MODE;
  maximum_seats?: number;
  parent?: number;
  image?: number;
}
