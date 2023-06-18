//internal module
import { BrowserRouter, NavLink } from "react-router-dom";

//external module
import NavBar from "./components/NavBar";
import AppRouter from "./routeComponent/AppRouter";
import "./styles/App.css";
import "./styles/NavBar.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <NavLink to="/register">Девочка</NavLink>
      </div>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
