import { useState } from "react";
import { useQuery } from "@tanstack/react-query"; // useQueryClient

import api from "@api/index.ts";
import { IOrganizationItem, IPagination } from "@app_types/index.ts";
import BasePagination from "@base_components/BasePagination";

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
  // TODO: useReducer without useState
  const [params, setParams] = useState({
    paginate: {
      page: 1,
      page_size: 2,
    },
  });

  const setPaginate = (paginate: IPagination) =>
    setParams({
      ...params,
      paginate,
    });

  const query = useQuery({
    queryKey: [apiKey, params],
    queryFn: () =>
      api[apiKey].getList({
        page: params.paginate.page,
        page_size: params.paginate.page_size,
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
        page={params.paginate.page}
        page_size={params.paginate.page_size}
        changePaginate={setPaginate}
      />
    </div>
  );
}
