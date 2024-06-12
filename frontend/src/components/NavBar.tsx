import  { useState } from "react";
import { Img } from "react-image";
import { NavLink } from "react-router-dom";

import {
  ABOUT_ROUTE,
  BLOG_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  LOCATION_ROUTE,
  SERVICES_ROUTE,
  TEAM_ROUTE,
  LOGIN_ROUTE,
} from "../links/consts";
import { Dropdown } from "./DropdawnMenu";
//@ts-ignore
import Logo from "../icons/Logo.svg";
//@ts-ignore
import Vector from "../icons/Vector.svg";
//@ts-ignore
import Chevrone from "../icons/Chevrone.svg";
//@ts-ignore
import humburger from "../icons/Humburger.svg"

import "../styles/adaptive/homePageAdaptive.css";
export default function NavBar() {
  
    const [isOpen, setOpen] = useState<boolean>();
    return (
      <div className="NavBar">
        <div className="NavBarContainer">
          <div className="NavBarHeader">
            <div className="LeftNuvBarContainer">
              <div className="LogoAndNameProjectInNavBar">
                <Img className="SvgImgInNavBar" src={Logo}></Img>
                <label className="NameProjectInNavBar">Beautyness</label>
              </div>
            </div>
            <div className="PhoneNumberNavBar">
              <Img className="SvgImgInNavBar" src={Vector}></Img>
              <label className="PhoneNumberInNavBar">
                +375 (29) 598-06-69
              </label>
            </div>

            <div className={`ButtonListInNavBar${isOpen ? "_active" : ""}`}>
              {/* <input id="menu__toggle" type="checkbox" />
              <label className="menu__btn">
                <span></span>
              </label> */}
              <NavLink to={HOME_ROUTE} className="ButtonInNavBar">
                Главная
              </NavLink>
              <Dropdown
                trigger={
                  <button className="DropdawnInNavBar">
                    <div className="ButtonPagesInDropdawnMenu">
                      <label className="ButtonPagesNameInDropdawnMenu">
                        Интересное
                      </label>
                      <Img
                        className="SVGPagesInDropdawnMenu"
                        src={Chevrone}
                      ></Img>
                    </div>
                  </button>
                }
                menu={[
                  <NavLink to={ABOUT_ROUTE} className="ButtonInDropdawnMenu">
                    О нас
                  </NavLink>,
                  <NavLink to={CONTACT_ROUTE} className="ButtonInDropdawnMenu">
                    Поддержка
                  </NavLink>,
                  <NavLink to={BLOG_ROUTE} className="ButtonInDropdawnMenu">
                    Блог
                  </NavLink>,
                  // <NavLink to={TEAM_ROUTE} className="ButtonInDropdawnMenu">
                  //   Специалисты
                  // </NavLink>,
                ]}
              />
              <NavLink to={TEAM_ROUTE} className="ButtonInNavBar">
              Специалисты
              </NavLink>
              <NavLink to={SERVICES_ROUTE} className="ButtonInNavBar">
                Услуги
              </NavLink>
              <NavLink to={LOCATION_ROUTE} className="ButtonInNavBar">
                Контакты
              </NavLink>
              <NavLink to={LOGIN_ROUTE} className="ButtonInNavBarReservation">
                Записаться
              </NavLink>
            </div>
            <Img
          src={humburger}
          className="headerMenuButton"
          onClick={() => setOpen(!isOpen)}
        ></Img>
          </div>

        </div>

      </div>
    );
  }

