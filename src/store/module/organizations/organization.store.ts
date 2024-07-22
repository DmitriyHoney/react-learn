import { createSlice } from "@reduxjs/toolkit";
import { IBaseTableInitialState } from "../../../types";
import { IOrganizationItem } from "./types";

const initialState: IBaseTableInitialState<IOrganizationItem> = {
  items: [],
  pagination: {
    page: 1,
    page_size: 10,
    count: 0,
  },
};

export const organizationSlice = createSlice({
  name: "organizations",
  initialState: {
    ...initialState,
  } as IBaseTableInitialState<IOrganizationItem>,
  reducers: {
    // incremented: (state: IBaseTableInitialState<IOrganizationItem>) => {},
  },
});
