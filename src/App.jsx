import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  const queryCLient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryCLient}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
