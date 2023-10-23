import React from "react";
import { observer } from "mobx-react-lite";

export default observer(function RegisterPage() {
  return (
    <div className="RegisterPage">
      <input placeholder="Email" />
      <input placeholder="Password" />
      <input placeholder="Name" />
      <button>Зарегистрироваться</button>
    </div>
  );
});
