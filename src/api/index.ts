import axios, { AxiosResponse } from "axios";
import { IBaseApiListQuery, IBaseApiListResponse } from "./types";
import { IOrganizationItem } from "../types";

const baseInstance = axios.create({
  baseURL: "https://developer3.elros.info/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  organizations: {
    getList: (
      params: IBaseApiListQuery
    ): Promise<AxiosResponse<IBaseApiListResponse<IOrganizationItem>>> =>
      baseInstance.get("/organizations", { params }),
    // create: (
    //   payload: IOrganizationCreateItem
    // ): Promise<AxiosResponse<IOrganizationItem>> =>
    //   baseInstance.post("/organizations/", payload),
    // getOne: (id: number): Promise<AxiosResponse<IOrganizationItem>> =>
    //   baseInstance.get(`/organizations/${id}`),
    // update: (
    //   id: number,
    //   payload: IOrganizationUpdateItem
    // ): Promise<AxiosResponse<IOrganizationItem>> =>
    //   baseInstance.patch(`/organizations/${id}`, payload),
    // deleteOne: (id: number): Promise<AxiosResponse<void>> =>
    //   baseInstance.delete(`/organizations/${id}`),
  },
  promos: {
    getList: (
      params: IBaseApiListQuery
    ): Promise<AxiosResponse<IBaseApiListResponse<IOrganizationItem>>> =>
      baseInstance.get("/promos", { params }),
    // create: (
    //   payload: IOrganizationCreateItem
    // ): Promise<AxiosResponse<IOrganizationItem>> =>
    //   baseInstance.post("/organizations/", payload),
    // getOne: (id: number): Promise<AxiosResponse<IOrganizationItem>> =>
    //   baseInstance.get(`/organizations/${id}`),
    // update: (
    //   id: number,
    //   payload: IOrganizationUpdateItem
    // ): Promise<AxiosResponse<IOrganizationItem>> =>
    //   baseInstance.patch(`/organizations/${id}`, payload),
    // deleteOne: (id: number): Promise<AxiosResponse<void>> =>
    //   baseInstance.delete(`/organizations/${id}`),
  },
};
