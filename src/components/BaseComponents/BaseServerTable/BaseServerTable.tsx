import { useQuery } from "@tanstack/react-query"; // useQueryClient
import api from "@/api";
import { IOrganizationItem, IPagination } from "@/types";
import { ReducerState, useReducer } from "react";
import BasePagination from "components/BaseComponents/BasePagination.tsx";
import baseServerTableReducer, {CountActionKind, initialBaseServerState, IState} from "./BaseServerTableReducer.ts";


interface ITableHeader {
    title: string;
    value: keyof IOrganizationItem;
    sortable?: boolean;
}
interface IProps {
    headers: Array<ITableHeader>;
    apiKey: keyof typeof api;
    title: string;
}

export default function BaseServerTable({ headers, apiKey, title }: IProps) {
    let initialState = localStorage.getItem(`params_${apiKey}`);
    if (!initialState) localStorage.setItem(`params_${apiKey}`, JSON.stringify(initialBaseServerState));
    else initialState = JSON.parse(localStorage.getItem(`params_${apiKey}`));
    const updateLocalStorage = (state) => localStorage.setItem(`params_${apiKey}`, JSON.stringify(state));

    const [params, dispatch] = useReducer(baseServerTableReducer, initialState as ReducerState<IState>);
    const setPaginate = (pagination: IPagination) => {
      const payload = { pagination: pagination };
      dispatch({ payload: payload, type: CountActionKind.CHANGE_PAGE });
      updateLocalStorage(payload);
    }

    const query = useQuery({
    queryKey: [apiKey, params],
    queryFn: () =>
      api[apiKey].getList({
        page: params.pagination.page,
        page_size: params.pagination.page_size,
      }),
    });

    const headerItems = headers.map((h) => (
    <th scope="col" key={h.value}>
      {h.title}
    </th>
    ));

    const items = query.data?.data.results || [];
    const count = query.data?.data.count || 0;

    const itemsRows = items.map((i) => (
    <tr key={i.id}>
      {headers.map((h, idx) => {
        const value = i[h.value];

        let textContent = value as string | boolean | number;
        if (typeof value === "object") textContent = "-";
        else if (typeof value === "boolean")
          textContent = value ? "Активен" : "Неактивен";

        return <td key={idx}>{textContent}</td>;
      })}
    </tr>
    ));

    return (
    <div className="base-table">
      <h1 className="base-table__title">{title}</h1>
      <table className="table">
        <thead>
          <tr>{headerItems}</tr>
        </thead>
        <tbody>{itemsRows}</tbody>
      </table>
      <BasePagination
        count={count}
        page={params.pagination.page}
        page_size={params.pagination.page_size}
        changePaginate={setPaginate}
      />
    </div>
    );
}



