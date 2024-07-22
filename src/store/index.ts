import { configureStore } from "@reduxjs/toolkit";
import { organizationSlice } from "./module/organizations/organization.store";

export default configureStore({
  reducer: organizationSlice.reducer,
});
