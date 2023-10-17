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
                Call Us - (+22) 123 456 7890
              </label>
            </div>

            <div className={`ButtonListInNavBar${isOpen ? "_active" : ""}`}>
              {/* <input id="menu__toggle" type="checkbox" />
              <label className="menu__btn">
                <span></span>
              </label> */}
              <NavLink to={HOME_ROUTE} className="ButtonInNavBar">
                Home
              </NavLink>
              <Dropdown
                trigger={
                  <button className="DropdawnInNavBar">
                    <div className="ButtonPagesInDropdawnMenu">
                      <label className="ButtonPagesNameInDropdawnMenu">
                        Pages
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
                    About
                  </NavLink>,
                  <NavLink to={LOCATION_ROUTE} className="ButtonInDropdawnMenu">
                    Location
                  </NavLink>,
                  <NavLink to={BLOG_ROUTE} className="ButtonInDropdawnMenu">
                    Blog
                  </NavLink>,
                  <NavLink to={TEAM_ROUTE} className="ButtonInDropdawnMenu">
                    Team
                  </NavLink>,
                ]}
              />
              <NavLink to={ABOUT_ROUTE} className="ButtonInNavBar">
                About
              </NavLink>
              <NavLink to={SERVICES_ROUTE} className="ButtonInNavBar">
                Services
              </NavLink>
              <NavLink to={CONTACT_ROUTE} className="ButtonInNavBar">
                Contact
              </NavLink>
              <NavLink to={LOGIN_ROUTE} className="ButtonInNavBarReservation">
                Reservation
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

