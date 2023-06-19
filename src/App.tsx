//internal module
import { BrowserRouter, NavLink, Navigate } from "react-router-dom";

//external module
import NavBar from "./components/NavBar";
import AppRouter from "./routeComponent/AppRouter";
import "./styles/App.css";
import "./styles/NavBar.css";
import "./styles/DropdawnMenu.css";
import { HOME_ROUTE } from "./links/consts";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App"></div>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
