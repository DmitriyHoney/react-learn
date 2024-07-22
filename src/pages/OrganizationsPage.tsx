import BaseServerTable from "../components/BaseComponents/BaseServerTable";
import { E_ADDRESS_TYPE } from "../types";

export default function OrganizationsPage() {
  return (
    <main>
      <BaseServerTable
        headers={[
          { title: "id", value: "id" },
          { title: "Наименование", value: "short_name" },
          { title: "Статус активности", value: "is_active" },
        ]}
        items={[
          {
            id: 1,
            addresses: {
              address:
                "Владимирская область, г Владимир, ул Сакко и Ванцетти, д. 50",
              address_type: E_ADDRESS_TYPE.ACTUAL,
              id: 1,
              location: [54.12, 42.11],
            },
            image: "",
            is_active: true,
            name: "Полное наименорвание",
            short_name: "Краткое наименование",
          },
        ]}
      />
    </main>
  );
}
