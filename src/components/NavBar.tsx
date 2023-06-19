import React, { Component } from "react";
import { Img } from "react-image";
import { BrowserRouter, NavLink, Navigate } from "react-router-dom";
import {
  ABOUT_ROUTE,
  BLOG_ROUTE,
  CHANGELOG_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  LOCATION_ROUTE,
  SERVICES_ROUTE,
  STYLE_GUIDE_ROUTE,
  TEAM_ROUTE,
} from "../links/consts";
import { Dropdown } from "./DropdawnMenu";
//@ts-ignore
import Logo from "../icons/Logo.svg";
//@ts-ignore
import Vector from "../icons/Vector.svg";
//@ts-ignore
import Chevrone from "../icons/Chevrone.svg";

export default class NavBar extends Component {
  render(): React.ReactNode {
    return (
      <div className="NavBar">
        <div className="ButtonListInNavBar">
          <NavLink to={HOME_ROUTE} className="ButtonInNavBar">
            Home
          </NavLink>
          <Dropdown
            trigger={
              <button className="DropdawnInNavBar">
                <div className="ButtonPagesInDropdawnMenu">
                  <label className="ButtonPagesNameInDropdawnMenu">Pages</label>
                  <Img className="SVGPagesInDropdawnMenu" src={Chevrone}></Img>
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
              <NavLink to={CHANGELOG_ROUTE} className="ButtonInDropdawnMenu">
                Change
              </NavLink>,
              <NavLink to={TEAM_ROUTE} className="ButtonInDropdawnMenu">
                Team
              </NavLink>,
              <NavLink to={STYLE_GUIDE_ROUTE} className="ButtonInDropdawnMenu">
                Style Guide
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
          <button className="ButtonInNavBarReservation">Reservation</button>
        </div>
        <div className="LeftNuvBarContainer">
          <div className="LogoAndNameProjectInNavBar">
            <Img className="SvgImgInNavBar" src={Logo}></Img>
            <label className="NameProjectInNavBar">Beautyness</label>
          </div>
          <div className="PhoneNumberInNavBar">
            <Img className="SvgImgInNavBar" src={Vector}></Img>
            <label className="PhoneNumberInNavBar">
              Call Us - (+22) 123 456 7890
            </label>
          </div>
        </div>
      </div>
    );
  }
}
