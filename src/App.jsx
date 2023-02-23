import { BrowserRouter } from "react-router-dom";
//import MyNavbar from "./components/MyNavbar";
import AppRouter from "./components/AppRouter";
import './utils/reset.scss'

function App() {
  return (
    <BrowserRouter>
      {/* <MyNavbar></MyNavbar> */}
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
