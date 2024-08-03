import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import BaseServerTable from "@base_components/BaseServerTable/BaseServerTable";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ul>
          <li key={1}>
            <Link to="organizations">organizations</Link>
          </li>
          <li key={2}>
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
                headers={[
                  { title: "id", value: "id" },
                  { title: "Наименование", value: "short_name" },
                  { title: "Статус активности", value: "is_active" },
                ]}
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
                headers={[
                  { title: "id", value: "id" },
                  { title: "Наименование", value: "short_name" },
                  { title: "Статус активности", value: "is_active" },
                ]}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
