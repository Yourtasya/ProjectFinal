import React from "react";

import { Img } from "react-image";

//@ts-ignore
import IconContact1 from "../icons/contactPageSvg/Icon1.svg";
//@ts-ignore
import IconContact2 from "../icons/contactPageSvg/Icon2.svg";
//@ts-ignore
import IconContact3 from "../icons/contactPageSvg/Icon3.svg";
//@ts-ignore
import LocationPhoto1 from "../img/locationPage/LocationPhoto1.jpg";
//@ts-ignore
import LocationPhoto2 from "../img/locationPage/LocationPhoto2.jpg";
//@ts-ignore
import LocationPhoto3 from "../img/locationPage/LocationPhoto3.jpg";

import "../styles/pageStyles/locationPage.css";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../links/consts";

export default function LocationPage() {
  return (
    <div className="LocationPage">
      <div className="FirstBlock">
        <div className="HomePageContainer">
          {/* <p className="FirstBlockSubtittle">SHORT STORY ABOUT US</p> */}
          <p className="FirstBlockTittle">
            Наши филиалы
          </p>
          <NavLink to={LOGIN_ROUTE} className="FirstBlockButton">
            Записаться
          </NavLink>
        </div>
      </div>

      <section className="localion">
        <div className="HomePageContainer">
          <div className="localionBlocks">
            <div className="localionBlock">
              <Img className="getInTouchBlock_img2" src={LocationPhoto1}></Img>
              <div className="getInTouchBlock_texts localionTexts">
                <h4 className="getInTouchBlock_tittle">07:00 - 22:00</h4>
                <h2 className="getInTouchBlock_subtittle">г. Минск</h2>

                <div className="getInToucflatRight localionRight">
                  <div className="getInToucVisit">
                    <Img
                      className="getInTouchBlock_img"
                      src={IconContact1}
                    ></Img>

                    <div className="flatRight_mail">
                      <p className="flatRight_mailTittle getInToucDropTittle">
                        Адрес:
                      </p>
                      <p className="flatRight_mailSubittle getInToucDropSubtittle">
                        ул.Сурганова, 37
                      </p>
                    </div>
                  </div>

                  <div className="getInToucDrop">
                    <Img
                      className="getInTouchBlock_img"
                      src={IconContact2}
                    ></Img>

                    <div className="flatRight_call">
                      <p className="flatRight_callTittle getInToucDropTittle">
                        Почта:
                      </p>
                      <p className="flatRight_callSubittle getInToucDropSubtittle">
                        support@beautyness.com
                      </p>
                    </div>
                  </div>

                  <div className="getInToucVisitCall">
                    <Img
                      className="getInTouchBlock_img"
                      src={IconContact3}
                    ></Img>

                    <div className="flatRight_call">
                      <p className="flatRight_callTittle getInToucDropTittle">
                        Телефон:
                      </p>
                      <p className="flatRight_callSubittle getInToucDropSubtittle">
                        +375 (29) 800-12-999
                      </p>
                    </div>
                  </div>
                </div>
                <NavLink to={LOGIN_ROUTE} className="localionBlockButton">
                  Записаться
                </NavLink>
              </div>
            </div>

            <div className="localionBlock">
              <div className="getInTouchBlock_texts localionTexts">
                <h4 className="getInTouchBlock_tittle">07:00 - 23:00</h4>
                <h2 className="getInTouchBlock_subtittle">г. Минск</h2>

                <div className="getInToucflatRight localionRight">
                  <div className="getInToucVisit">
                    <Img
                      className="getInTouchBlock_img"
                      src={IconContact1}
                    ></Img>

                    <div className="flatRight_mail">
                      <p className="flatRight_mailTittle getInToucDropTittle">
                        Адрес:
                      </p>
                      <p className="flatRight_mailSubittle getInToucDropSubtittle">
                        ул. толстого, 3
                      </p>
                    </div>
                  </div>

                  <div className="getInToucDrop">
                    <Img
                      className="getInTouchBlock_img"
                      src={IconContact2}
                    ></Img>

                    <div className="flatRight_call">
                      <p className="flatRight_callTittle getInToucDropTittle">
                        Почта:
                      </p>
                      <p className="flatRight_callSubittle getInToucDropSubtittle">
                        support@beautyness.com
                      </p>
                    </div>
                  </div>

                  <div className="getInToucVisitCall">
                    <Img
                      className="getInTouchBlock_img"
                      src={IconContact3}
                    ></Img>

                    <div className="flatRight_call">
                      <p className="flatRight_callTittle getInToucDropTittle">
                        Телефон:
                      </p>
                      <p className="flatRight_callSubittle getInToucDropSubtittle">
                      +375 (29) 800-12-98
                      </p>
                    </div>
                  </div>
                </div>
                <NavLink to={LOGIN_ROUTE} className="localionBlockButton">
                  GET AN APPOINTMENT
                </NavLink>
              </div>
              <Img className="getInTouchBlock_img2" src={LocationPhoto2}></Img>
            </div>

            <div className="localionBlock localionBlockLast">
              <Img className="getInTouchBlock_img2" src={LocationPhoto3}></Img>
              <div className="getInTouchBlock_texts localionTexts">
                <h4 className="getInTouchBlock_tittle">10:00 - 22:00</h4>
                <h2 className="getInTouchBlock_subtittle">г. Орша</h2>

                <div className="getInToucflatRight localionRight">
                  <div className="getInToucVisit">
                    <Img
                      className="getInTouchBlock_img"
                      src={IconContact1}
                    ></Img>

                    <div className="flatRight_mail">
                      <p className="flatRight_mailTittle getInToucDropTittle">
                        Адрес:
                      </p>
                      <p className="flatRight_mailSubittle getInToucDropSubtittle">
                        ул, 1-го мая, д. 5
                      </p>
                    </div>
                  </div>

                  <div className="getInToucDrop">
                    <Img
                      className="getInTouchBlock_img"
                      src={IconContact2}
                    ></Img>

                    <div className="flatRight_call">
                      <p className="flatRight_callTittle getInToucDropTittle">
                        Почта:
                      </p>
                      <p className="flatRight_callSubittle getInToucDropSubtittle">
                        support@beautyness.com
                      </p>
                    </div>
                  </div>

                  <div className="getInToucVisitCall">
                    <Img
                      className="getInTouchBlock_img"
                      src={IconContact3}
                    ></Img>

                    <div className="flatRight_call">
                      <p className="flatRight_callTittle getInToucDropTittle">
                        Телефон:
                      </p>
                      <p className="flatRight_callSubittle getInToucDropSubtittle">
                      +375 (29) 800-12-97
                      </p>
                    </div>
                  </div>
                </div>
                <NavLink to={LOGIN_ROUTE} className="localionBlockButton">
                  Записаться
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
