import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import store from "./store/store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
