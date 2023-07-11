import React, { useContext, useState } from "react";

import "../styles/pageStyles/authPage.css";
import { Context } from "..";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { AuthContext } = useContext(Context);

  const handleLogin = (e: any) => {
    e.preventDefault();
    AuthContext.login(email, password).then(() => {
      if (AuthContext.isAuth === true) {
        console.log("вы залогинены");
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
    </div>
  );
}
