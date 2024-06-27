import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import UsersPage from "./components/UsersPage";

function App() {
  const queryCLient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryCLient}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
