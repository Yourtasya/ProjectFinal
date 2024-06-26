import React, { useContext, useState } from "react";

import "../styles/pageStyles/authPage.css";
import "../styles/adaptive/authPageAdaptive.css";
// import Model from "../components/Model";
// import "../styles/Model.css";

import { Context } from "..";
import { NavLink } from "react-router-dom";
import { REGISTER_ROUTE } from "../links/consts";

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
      <div className="FirstBlock">
        <div className="HomePageContainer">
          <div className="FirstBlockImg"></div>
          <p className="FirstBlockTittle FirstBlockTittleAuthPage">
          Вход в личный кабинет
          </p>
        </div>
      </div>
      <section className="AuthPageContent">
        <div className="HomePageContainer">
          <div className="AuthPageForm">
            <form className="AuthPageForm" onSubmit={handleLogin}>
              <div className="AuthPageText">
                <h4 className="getInTouchBlock_tittle"></h4>
                <h2 className="getInTouchBlock_subtittle">
                Вход
                </h2>
            
              </div>
              <div className="wrapper wrapperAuthPage">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type={email}
                  placeholder="Почта"
                  className="input"
                />
              </div>
              <div className="wrapper wrapperAuthPage">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={password}
                  placeholder="Пароль"
                  className="input"
                />
              </div>

              <button className="formButton formButtonAuthPage" type="submit">
                Войти
              </button>
            </form>
            <div>
              <NavLink to={REGISTER_ROUTE}>ЗАРЕГИСТРИРОВАТЬСЯ</NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* <Model active={modelActive} setActive={setModelActive}>
        <p>Вы зарегистрированы!</p>
      </Model> */}
    </div>
  );
}
