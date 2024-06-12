import React from "react";
import { Img } from "react-image";

import "../styles/pageStyles/blogPage.css";
import "../styles/adaptive/blogPageAdaptive.css"

//@ts-ignore
import Photo7 from "../img/homePage/Photo7.jpg";
//@ts-ignore
import Photo8 from "../img/homePage/Photo8.jpg";
//@ts-ignore
import Photo from "../img/blogPage/Photo.jpg";
//@ts-ignore
import Photo1 from "../img/blogPage/Photo1.jpg";
//@ts-ignore
import Photo2 from "../img/blogPage/Photo2.jpg";
//@ts-ignore
import Photo9 from "../img/homePage/Photo9.jpg";
import { NavLink } from "react-router-dom";
import { SERVICES_ROUTE } from "../links/consts";

export default function BlogPage() {
  return (
    <div className="BlogPage">
      <div className="FirstBlock">
        <div className="HomePageContainer">
          {/* <p className="FirstBlockSubtittle">GET IN TOUCH WITH US</p> */}
          <p className="FirstBlockTittle">Советы по уходу</p>
        </div>
      </div>

      <div className="HomePageContainer">
        <section className="GetInTouchBlock">
          <div className="ourBlog_text">
            <h4 className="ourBlog_tittle">Наш блог</h4>
            <h2 className="ourBlog_subtittle">Секреты красоты и релаксации!</h2>
          </div>
          <div className="GetInTouchBlocks">
            <div className="ourBlock_1">
              <div className="BlockImg">
                <Img src={Photo7}></Img>
              </div>
              <div className="Block_1_Text ourBlockText">
                <h4 className="BlockText_ourBlog_text">
                20 июня 2024
                </h4>
                <h3 className="BlockText_ourBlog_tittle ">
                Стоунтерапия
                </h3>
                <p className="BlockText_ourBlog_subtittle">
                Стоунтерапия или массаж камнями с различной температурой укрепляет иммунитет, положительно влияет на организм, включая сердечно-сосудистую и эндокринную систему ...
                </p>
              </div>
            </div>

            <div className="ourBlock_2">
              <div className="BlockImg">
                <Img src={Photo9}></Img>
              </div>
              <div className="Block_2_Text ourBlockText">
                <h4 className="BlockText_ourBlog_text">
                05 июня 2024
                </h4>

                <h3 className="BlockText_ourBlog_tittle">
                Ароматический массаж
                </h3>
                <p className="BlockText_ourBlog_subtittle">
                Ароматический массаж эффективен вдвойне, так как сочетает в себе и лечебное действие самого массажа, и целебные свойства эфирных масел.
                </p>
              </div>
            </div>

            <div className="ourBlock_3">
              <div className="BlockImg">
                <Img src={Photo8}></Img>
              </div>
              <div className="Block_3_Text ourBlockText">
                <h4 className="BlockText_ourBlog_text">
                  19 мая 2024
                </h4>

                <h3 className="BlockText_ourBlog_tittle">
                Виды массажа лица
                </h3>
                <p className="BlockText_ourBlog_subtittle">
                Существует множество разнообразных видов массажа лица. Каждый из них имеет свои уникальные особенности, показания и эффект...
                </p>
              </div>
            </div>

            <div className="ourBlock_1">
              <div className="BlockImg">
                <Img src={Photo}></Img>
              </div>
              <div className="Block_1_Text ourBlockText">
                <h4 className="BlockText_ourBlog_text">
                3 апреля 2024
                </h4>
                <h3 className="BlockText_ourBlog_tittle ">
                Тайский массаж при остеохондрозе
                </h3>
                <p className="BlockText_ourBlog_subtittle">
                Остеохондроз — одна из основных причин неприятных ощущений и болей в спине. Если вы хотите избавиться от дискомфорта, приходите на тайский массаж к нам ....
                </p>
              </div>
            </div>

            <div className="ourBlock_1">
              <div className="BlockImg">
                <Img src={Photo1}></Img>
              </div>
              <div className="Block_1_Text ourBlockText">
                <h4 className="BlockText_ourBlog_text">
                  25 апреля 2024
                </h4>
                <h3 className="BlockText_ourBlog_tittle ">
                Косметический массаж лица
                </h3>
                <p className="BlockText_ourBlog_subtittle">
                Косметический массаж лица стимулирует кровообращение, улучшает цвет лица и способствует естественной регенерации кожи ...
                </p>
              </div>
            </div>

            <div className="ourBlock_1">
              <div className="BlockImg">
                <Img src={Photo2}></Img>
              </div>
              <div className="Block_1_Text ourBlockText">
                <h4 className="BlockText_ourBlog_text">
                  28 март 2024
                </h4>
                <h3 className="BlockText_ourBlog_tittle ">
                Расслабляющий релакс массаж
                </h3>
                <p className="BlockText_ourBlog_subtittle">
                В нашей жизни часто случаются моменты стресса, вызывающие напряжение мышц, что влияет на общее психоэмоциональное состояние ...
                </p>
              </div>
            </div>
          </div>
          <div className="ourBlockText_button">
            <NavLink to={SERVICES_ROUTE} className="BlockText_button ourButton">
              Подробнее
            </NavLink>
          </div>
        </section>
      </div>
    </div>
  );
}
