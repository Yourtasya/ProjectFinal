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
                <NavLink to={HOME_ROUTE}> Главная</NavLink>
                <NavLink to={ABOUT_ROUTE}> О нас</NavLink>
                <NavLink to={SERVICES_ROUTE}> Услуги</NavLink>
                <NavLink to={BLOG_ROUTE}> Блог</NavLink>
                <NavLink to={HOME_ROUTE}> Home</NavLink>
                <NavLink to={CONTACT_ROUTE}> Контакты</NavLink>
              </div>
            </div>

            <div className="footer_block_2">
              <h3 className="footer_h3">Utility Pages</h3>
              <div className="footerNavLinkUtility">
                <NavLink to={NOT_FOUND_ROUTE}>404 not found</NavLink>
              </div>
            </div>

            <div className="footer_block_3">
              <h3 className="footer_h3">Служба поддержки</h3>
              <div className="footer_block_3_ul">
                <div className="footer_block_3Adress">
                  <p className="footer_block_3_ulTittle">Адрес :</p>
                  <p className="footer_block_3_ulTextAdress">
                    г. Минск, ул. Сурганова, 30
                  </p>
                </div>

                <div className="footer_block_3Mail">
                  <p className="footer_block_3_ulTittle">Почта :</p>
                  <p className="footer_block_3_ulTextMail">
                  beautyness@mail.com
                  </p>
                </div>

                <div className="footer_block_3Phone">
                  <p className="footer_block_3_ulTittle">Телефон :</p>
                  <p className="footer_block_3_ulTextPhone">
                    +375 (29) 598-06-60
                  </p>
                </div>
              </div>
            </div>

            <div className="footer_block_4">
              <h3 className="footer_h3">Часы работы</h3>
              <p className="workingHours">Пн-Пт: 7:00 - 23:00</p>
              <p className="workingHours">Сб: 9:00 - 23:00</p>
              <p className="workingHours">Вс: 9:00 - 23:00</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
