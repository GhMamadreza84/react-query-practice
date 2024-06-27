import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./components/HomePage";

function App() {
  const queryCLient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryCLient}>
        <HomePage />
      </QueryClientProvider>
    </>
  );
}

export default App;
