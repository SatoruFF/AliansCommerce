import { BrowserRouter } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import AppRouter from "./components/AppRouter";
import './utils/reset.scss'

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
