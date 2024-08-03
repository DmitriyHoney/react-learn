import { IPagination } from "@app_types/index";
export enum CountActionKind {
  CHANGE_PAGE = "CHANGE_PAGE",
}
export interface IState {
  pagination: IPagination;
}
export interface IAction {
  type: CountActionKind;
  payload: IState;
}

export default function baseServerTableReducer(
  state: IState,
  action: IAction
): IState {
  switch (action.type) {
    case CountActionKind.CHANGE_PAGE: {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          ...action.payload.pagination,
        },
      };
    }
    default: {
      console.warn("Unknown action: " + action.type);
      return state;
    }
  }
}
export const initialBaseServerState: IState = {
  pagination: {
    page: 1,
    page_size: 2,
  },
};
