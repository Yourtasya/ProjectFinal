import React, { useContext, useState } from "react";

import "../styles/pageStyles/authPage.css";
// import Model from "../components/Model";
// import "../styles/Model.css";

import { Context } from "..";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [modelActive, setModelActive] = useState(false);

  const { AuthContext } = useContext(Context);

  const handleLogin = (e: any) => {
    e.preventDefault();
    AuthContext.login(email, password).then(() => {
      if (AuthContext.isAuth === true) {
        // setModelActive(true);
        console.log("login is good"); //все время true из-за authController
      } else {
        console.error("navigate errore");
      }
    });
  };

  return (
    <div className="AuthPage">
      <h3>AuthPage</h3>
      <form onSubmit={handleLogin}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type={email}
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type={password}
          placeholder="Password"
        />
        <button type="submit">Войти</button>
      </form>
      {/* <Model active={modelActive} setActive={setModelActive}>
        <p>Вы зарегистрированы!</p>
      </Model> */}
    </div>
  );
}
