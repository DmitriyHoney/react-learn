import { IAddresses } from "../../../types";

export interface IOrganizationItem {
  id: number;
  name: string;
  short_name: string;
  image: string | null;
  is_active: boolean;
  addresses: IAddresses;
}
