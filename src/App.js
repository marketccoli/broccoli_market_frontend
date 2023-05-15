import { BrowserRouter } from "react-router-dom";
import { Router } from "./shared/Router";
import { ToastContainer, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const toastConfig = {
  position: "top-center",
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer position={toastConfig.position} autoClose={1000} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
