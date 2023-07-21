import React, { useContext, useState } from "react";


import "../styles/pageStyles/authPage.css";
import "../styles/adaptive/authPageAdaptive.css"
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
      <div className="FirstBlock">
        <div className="HomePageContainer">
          <div className="FirstBlockImg"></div>
          <p className="FirstBlockSubtittle">SHORT STORY ABOUT US</p>
          <p className="FirstBlockTittle">
            RESERVATION
          </p>
        </div>
      </div>
      <section className="AuthPageContent">
        <div className="HomePageContainer">
          <div className="AuthPageForm">
            <form className="AuthPageForm" onSubmit={handleLogin}>

              <div className="AuthPageText">
                <h4 className="getInTouchBlock_tittle">Enter Password</h4>
                <h2 className="getInTouchBlock_subtittle">
                  Password Protected
                </h2>
                <p className="getInTouchBlock_text">
                  This page is password protected. If you are the website admin, or have access to this page, please type your password below.
                </p>
              </div>
              <div className="wrapper wrapperAuthPage">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type={email}
                  placeholder="Email"
                  className="input"
                />
              </div>
              <div className="wrapper wrapperAuthPage">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={password}
                  placeholder="Password"
                  className="input"
                />
              </div>

              <button className="formButton" type="submit">Войти</button>
            </form>
          </div>

        </div>
      </section>







      {/* <Model active={modelActive} setActive={setModelActive}>
        <p>Вы зарегистрированы!</p>
      </Model> */}
    </div>
  );
}
