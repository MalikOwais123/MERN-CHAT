import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Route path="/" component={Homepage} exact />
        <Route path="/chats" component={Chatpage} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
