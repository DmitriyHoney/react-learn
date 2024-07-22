import { IOrganizationItem } from "../../store/module/organizations/types";

interface ITableHeader {
  title: string;
  value: keyof IOrganizationItem;
  sortable?: boolean;
}

interface IProps {
  items: Array<IOrganizationItem>;
  headers: Array<ITableHeader>;
  // pagination: IPagination;
  // fetchItems: () => Promise<void>;
  // changePagination: () => void;
}

export default function BaseServerTable({ items, headers }: IProps) {
  const headerItems = headers.map((h) => (
    <th scope="col" key={h.value}>
      {h.title}
    </th>
  ));

  const itemsRows = items.map((i) => (
    <tr key={i.id}>
      {headers.map((h) => {
        const value = i[h.value];

        let textContent = value as string | boolean | number;
        if (typeof value === "object") textContent = "-";
        else if (typeof value === "boolean")
          textContent = value ? "Активен" : "Неактивен";

        return <th>{textContent}</th>;
      })}
    </tr>
  ));

  return (
    <table className="table">
      <thead>
        <tr>{headerItems}</tr>
      </thead>
      <tbody>{itemsRows}</tbody>
    </table>
  );
}
