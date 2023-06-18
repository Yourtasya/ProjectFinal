import { BrowserRouter, NavLink } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./styles/App.css";
import "./styles/NavBar.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <NavLink to="/register">Девочка</NavLink>
      </div>
    </BrowserRouter>
  );
}

export default App;
