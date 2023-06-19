import React, { Component } from "react";
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

export default class NavBar extends Component {
  render(): React.ReactNode {
    return (
      <div className="NavBar">
        <div className="ButtonListInNavBar">
          <NavLink to={HOME_ROUTE} className="ButtonInNavBar">
            Home
          </NavLink>
          <Dropdown
            trigger={<button className="DropdawnInNavBar">Pages</button>}
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
        </div>
      </div>
    );
  }
}
