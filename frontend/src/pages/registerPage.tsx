import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";

export default observer(function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { AuthContext } = useContext(Context);

  return (
    <div className="RegisterPage">
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
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type={name}
        placeholder="Name"
      />
      <button onClick={() => AuthContext.registration(email, password, name)}>
        Зарегистрироваться
      </button>
    </div>
  );
});
