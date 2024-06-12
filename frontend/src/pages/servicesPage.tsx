import React from "react";
import { Img } from "react-image";

import "../styles/pageStyles/servicesPage.css";
import "../styles/pageStyles/aboutPage.css";
import "../styles/adaptive/servicesPageAdaptive.css"

//@ts-ignore
import Photo5 from "../img/homePage/Photo5.jpg";
//@ts-ignore
import Photo6 from "../img/homePage/Photo6.jpg";
//@ts-ignore
import ImageServices1 from "../img/servicesPage/ImageServices1.jpg";
//@ts-ignore
import ImageServices2 from "../img/servicesPage/ImageServices2.jpg";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../links/consts";

export default function ServicesPage() {
  return (
    <div className="ServicesPage">
      <section className="ServicesPageBlocks">
        <div className="FirstBlock">
          <div className="HomePageContainer">
            {/* <p className="FirstBlockSubtittle">Наши услуги</p> */}
            <p className="FirstBlockTittle">
            Ухаживайте за собой вместе с нами!
            </p>
            <NavLink to={LOGIN_ROUTE} className="FirstBlockButton">
              Записаться
            </NavLink>
          </div>
        </div>

        <div className="ourServicesBlock_text ServicesBlock_text">
          <h4 className="ourServicesBlock_tittle">Наши услуги</h4>
          <h2 className="ourServicesBlock_subtittle">
          Уникальные процедуры для идеального ухода!
          </h2>
        </div>

        <div className="HomePageContainer">
          <div className="ServicesPrices">
            <div className="ourServicesBlockContent ourContent">
              <Img className="ourServicesFoto_1" src={Photo5}></Img>
              <div className="ourContentText">
              <div className="ourContentTextBlock">
                <h2 className="ourContentText_1">
                Классический массаж ....................................... 48.00р.
                </h2>
                <p className="ourContentText_2">
                Расслабляющая техника для снятия стресса и достижения гармонии тела и души.
                </p>
              </div>

              <div className="ourContentTextBlock">
                <h2 className="ourContentText_1">
                Шведский массаж ............................. 54.00р.
                </h2>
                <p className="ourContentText_2">
                Глубокие движения и растяжки для улучшения циркуляции крови и снятия напряжения в мышцах.
                </p>
              </div>

              <div className="ourContentTextBlock">
                <h2 className="ourContentText_1">
                Тайский массаж ................................. 54.00р.
                </h2>
                <p className="ourContentText_2">
                Уникальная техника, сочетающая растяжки и точечное давление для восстановления энергии и улучшения гибкости.
                </p>
              </div>

              <div className="ourContentTextBlock">
                <h2 className="ourContentText_1">
                Лимфодренажный массаж: ....................................... 73.00р.
                </h2>
                <p className="ourContentText_2">
                Деликатные движения, стимулирующие лимфатическую систему, для избавления от отечности и токсинов, а также для улучшения цвета лица.
                </p>
              </div>
                <NavLink to={LOGIN_ROUTE} className="ourContentButton">
                Записаться
                </NavLink>
              </div>
            </div>

            <div className="ourServicesBlockContent ourContent">
              <div className="ourContentText2">
              <div className="ourContentTextBlock">
                <h2 className="ourContentText_1">
                Глубокое очищение кожи ....................................... 48.00р.
                </h2>
                <p className="ourContentText_2">
                Удаление загрязнений и сужение пор для свежего и здорового вида.
                </p>
              </div>

              <div className="ourContentTextBlock">
                <h2 className="ourContentText_1">
                Увлажняющий уход ............................. 54.00р.
                </h2>
                <p className="ourContentText_2">
                Питательные процедуры для улучшения увлажнения, эластичности и сияния кожи.
                </p>
              </div>

              <div className="ourContentTextBlock">
                <h2 className="ourContentText_1">
                Антивозрастные процедуры ................................. 54.00р.
                </h2>
                <p className="ourContentText_2">
                Инновационные методики для сокращения морщин и улучшения тонуса кожи.
                </p>
              </div>

              <div className="ourContentTextBlock">
                <h2 className="ourContentText_1">
                Озонотерапия для лица ....................................... 73.00р.
                </h2>
                <p className="ourContentText_2">
                Процедуры с озоном для стимуляции кровообращения и борьбы с воспалениями.
                </p>
              </div>
                <NavLink
                  to={LOGIN_ROUTE}
                  className="ourContentButton ourContentButton2"
                >
                  Записаться
                </NavLink>
              </div>
              <Img className="ourServicesFoto_2" src={Photo6}></Img>
            </div>

            <div className="ourServicesBlockContent ourContent">
              <Img className="ourServicesFoto_1" src={ImageServices1}></Img>
              <div className="ourContentText">
                <div className="ourContentTextBlock">
                  <h2 className="ourContentText_1">
                    Face masks ....................................... $48.00
                  </h2>
                  <p className="ourContentText_2">
                    The versions have evolved over the sometimes by accident.
                  </p>
                </div>

                <div className="ourContentTextBlock">
                  <h2 className="ourContentText_1">
                    Full body massage ............................. $54.00
                  </h2>
                  <p className="ourContentText_2">
                    The versions have evolved over the sometimes by accident.
                  </p>
                </div>

                <div className="ourContentTextBlock">
                  <h2 className="ourContentText_1">
                    Geothermal spa ................................. $54.00
                  </h2>
                  <p className="ourContentText_2">
                    The versions have evolved over the sometimes by accident.
                  </p>
                </div>

                <div className="ourContentTextBlock">
                  <h2 className="ourContentText_1">
                    Sauna relax ....................................... $73.00
                  </h2>
                  <p className="ourContentText_2">
                    The versions have evolved over the sometimes by accident.
                  </p>
                </div>
                <NavLink to={LOGIN_ROUTE} className="ourContentButton">
                Записаться
                </NavLink>
              </div>
            </div>

            <div className="ourServicesBlockContent ourContent">
              <div className="ourContentText2">
                <div className="ourContentTextBlock">
                  <h2 className="ourContentText_1">
                    Face masks ....................................... $48.00
                  </h2>
                  <p className="ourContentText_2">
                    The versions have evolved over the sometimes by accident.
                  </p>
                </div>

                <div className="ourContentTextBlock">
                  <h2 className="ourContentText_1">
                    Full body massage ............................. $54.00
                  </h2>
                  <p className="ourContentText_2">
                    The versions have evolved over the sometimes by accident.
                  </p>
                </div>

                <div className="ourContentTextBlock">
                  <h2 className="ourContentText_1">
                    Geothermal spa ................................. $54.00
                  </h2>
                  <p className="ourContentText_2">
                    The versions have evolved over the sometimes by accident.
                  </p>
                </div>

                <div className="ourContentTextBlock">
                  <h2 className="ourContentText_1">
                    Sauna relax ....................................... $73.00
                  </h2>
                  <p className="ourContentText_2">
                    The versions have evolved over the sometimes by accident.
                  </p>
                </div>
                <NavLink
                  to={LOGIN_ROUTE}
                  className="ourContentButton ourContentButton2"
                >
                  Записаться
                </NavLink>
              </div>
              <Img className="ourServicesFoto_2" src={ImageServices2}></Img>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutPageFlatDiscount">
        <div className="aboutPageFlatDiscountContainer">
          <div className="flatDiscountText">
            <div className="flatDiscountTexts">
              <h4 className="flatText_title">Flat Discount </h4>
              <h3 className="flatText_subtittle">
                Claim upto 50% off er on ‍the most popular services...
              </h3>
              <p className="flatText_text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, buying
                to injected humour, or randomised words.
              </p>
            </div>

            <div className="flatDiscountText_flat flatGet">
              <div className="flatRight">
                <div className="flatRight_mailUs">
                  <div className="flatRight_mail">
                    <p className="flatRight_mailTittle">MAIL US :</p>
                    <p className="flatRight_mailSubittle">
                      info@beautyness.com
                    </p>
                  </div>
                </div>

                <div className="flatRight_callUs">
                  <div className="flatRight_call">
                    <p className="flatRight_callTittle">CALL US :</p>
                    <p className="flatRight_callSubittle">(+22) 123 4568 009</p>
                  </div>
                </div>
              </div>

              <div className="flatLeft">
                <div className="fff">
                  <p className="flatLeft_text">Get Flat </p>
                  <p className="flatLeft_text50">50%</p>
                  <p className="flatLeft_text2">Discount</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
