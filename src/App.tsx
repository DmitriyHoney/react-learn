import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BaseServerTable from "./components/BaseComponents/BaseServerTable/BaseServerTable.tsx";

const queryClient = new QueryClient();

const organizations = {
  headers: [
    { title: "id", value: "id" },
    { title: "Наименование", value: "short_name" },
    { title: "Статус активности", value: "is_active" },
  ],
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="organizations">organizations</Link>
          </li>
          <li>
            <Link to="promos">promos</Link>
          </li>
        </ul>
        <Routes>
          <Route
            path="organizations"
            key={1}
            element={
              <BaseServerTable
                apiKey="organizations"
                key={1}
                title="Организации"
                headers={organizations.headers}
              />
            }
          />
          <Route
            path="promos"
            key={2}
            element={
              <BaseServerTable
                key={2}
                apiKey="promos"
                title="Промокоды"
                headers={organizations.headers}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
