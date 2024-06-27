import { Routes ,Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import HomePage from "./components/HomePage";
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
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
