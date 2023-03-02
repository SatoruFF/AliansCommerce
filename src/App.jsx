import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AppRouter from "./components/AppRouter.jsx";
import './utils/reset.scss'
import './utils/all.scss'


function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
