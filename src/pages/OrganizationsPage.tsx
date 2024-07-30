import BaseServerTable from "../components/BaseComponents/BaseServerTable";

export default function OrganizationsPage() {
  return (
    <main>
      <BaseServerTable
        headers={[
          { title: "id", value: "id" },
          { title: "Наименование", value: "short_name" },
          { title: "Статус активности", value: "is_active" },
        ]}
        apiKey="organizations"
      />
    </main>
  );
}
