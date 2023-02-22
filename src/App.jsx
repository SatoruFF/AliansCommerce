import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
