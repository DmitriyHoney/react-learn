import { useQuery } from "@tanstack/react-query"; // useQueryClient
import api from "../../api";
import { IOrganizationItem, IPagination } from "../../types";
import { useState } from "react";
import BasePagination from "./BasePagination";

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
      {headers.map((h) => {
        const value = i[h.value];

        let textContent = value as string | boolean | number;
        if (typeof value === "object") textContent = "-";
        else if (typeof value === "boolean")
          textContent = value ? "Активен" : "Неактивен";

        return <td>{textContent}</td>;
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
