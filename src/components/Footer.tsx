import React, { Component } from "react";

import "../styles/Footer.css";

import { Img } from "react-image";
import { NavLink } from "react-router-dom";

//@ts-ignore
import LogoFooter from "../icons/Logo.svg";
import {
  ABOUT_ROUTE,
  BLOG_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  SERVICES_ROUTE,
} from "../links/consts";
import { NOT_FOUND_ROUTE } from "../links/ExceptionRoute/consts";

export default class NavBar extends Component {
  render(): React.ReactNode {
    return (
      <div className="Footer">
        <div className="HomePageContainer">
          <div className="LogoProjectInFooter">
            <Img className="SvgImgInNavBar" src={LogoFooter}></Img>
            <label className="NameProjectInFooter">Beautyness</label>
          </div>
          <hr className="FooterLine" />

          <div className="footer_block">
            <div className="footer_block_1">
              <h3 className="footer_h3">Explore</h3>
              <div className="footerNavLink">
                <NavLink to={HOME_ROUTE}> Home</NavLink>
                <NavLink to={ABOUT_ROUTE}> About Us</NavLink>
                <NavLink to={SERVICES_ROUTE}> Services</NavLink>
                <NavLink to={BLOG_ROUTE}> Blog</NavLink>
                <NavLink to={HOME_ROUTE}> Home</NavLink>
                <NavLink to={CONTACT_ROUTE}> Contact Us</NavLink>
              </div>
            </div>

            <div className="footer_block_2">
              <h3 className="footer_h3">Utility Pages</h3>
              <div className="footerNavLinkUtility">
                <NavLink to={NOT_FOUND_ROUTE}>404 not found</NavLink>
              </div>
            </div>

            <div className="footer_block_3">
              <h3 className="footer_h3">Utility Pages</h3>
              <div className="footer_block_3_ul">
                <div className="footer_block_3Adress">
                  <p className="footer_block_3_ulTittle">Address :</p>
                  <p className="footer_block_3_ulTextAdress">
                    24A Kingston St, Los Vegas NC 28202, USA.
                  </p>
                </div>

                <div className="footer_block_3Mail">
                  <p className="footer_block_3_ulTittle">Mail :</p>
                  <p className="footer_block_3_ulTextMail">
                    support@doctors.com
                  </p>
                </div>

                <div className="footer_block_3Phone">
                  <p className="footer_block_3_ulTittle">Phone :</p>
                  <p className="footer_block_3_ulTextPhone">
                    (+22) 123 - 4567 - 900
                  </p>
                </div>
              </div>
            </div>

            <div className="footer_block_4">
              <h3 className="footer_h3">Working Hours</h3>
              <p className="workingHours">Mon to Fri: 7am - 6pm</p>
              <p className="workingHours">Sat: 9am - 7pm</p>
              <p className="workingHours">Sun: 9am - 6pm</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
