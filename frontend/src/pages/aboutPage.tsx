import React from "react";

import "../styles/pageStyles/aboutPage.css";
import "../styles/adaptive/aboutPageAdaptive.css"

import { NavLink } from "react-router-dom";
import { Img } from "react-image";

//@ts-ignore
import Icon from "../icons/Icon.svg";
//@ts-ignore
import Icon1 from "../icons/Icon(1).svg";
//@ts-ignore
import Vector1 from "../icons/Vector1.svg";

//@ts-ignore
import Photo from "../img/aboutPage/Photo.jpg";

//@ts-ignore
import Image11 from "../img/aboutPage/Image11.jpg";

//@ts-ignore
import Image12 from "../img/aboutPage/Image12.png";

//@ts-ignore
import Image13 from "../img/aboutPage/Image13.png";

//@ts-ignore
import Image14 from "../img/aboutPage/Image14.jpg";

//@ts-ignore
import Image15 from "../img/aboutPage/Image15.jpg";

//@ts-ignore
import Image16 from "../img/aboutPage/Image16.jpg";

//@ts-ignore
import userPhoto from "../img/homePage/userPhoto.jpg";
//@ts-ignore
import userPhoto1 from "../img/homePage/userPhoto1.jpg";
//@ts-ignore
import Reviews from "../icons/Reviews.svg";
//@ts-ignore
import Icons3 from "../icons/Icons3.svg";

import { LOGIN_ROUTE } from "../links/consts";

//@ts-igno";

export default function AboutPage() {
  return (
    <div className="AboutPage">
      <div className="FirstBlock">
        <div className="HomePageContainer">
          <div className="FirstBlockImg"></div>
          {/* <p className="FirstBlockSubtittle">О нас</p> */}
          <p className="FirstBlockTittle">
            История нашего спа-центра
          </p>
          <NavLink to={LOGIN_ROUTE} className="FirstBlockButton">
            Записаться
          </NavLink>
        </div>
      </div>

      <section className="ourValues">
        <div className="ourValuesContainer">
          <div className="ourValuesTexts">
            <h4 className="ourValuesSubliltle">Наши преимущества</h4>
            <h2 className="ourValuesTittle">Заботимся о вашем отдыхе</h2>
          </div>

          <div className="ourValuesBlocks">
            <div className="ourValuesBlock">
              <div className="ourValuesBlockImg">
                <Img className="ourValuesBlock_img" src={Icon}></Img>
              </div>
              <div className="ourValuesBlockTexts">
                <h3 className="ourValuesSubliltle">Опытные мастера</h3>
                <p className="ourValuesBlockTittle">
                Имеют дипломы и прошли обучение по различным направлениям и техникам массажа.
                </p>
              </div>
            </div>

            <hr className="ourValuesLine" />

            <div className="ourValuesBlock ourValuesBlockLine">
              <div className="ourValuesBlockImg">
                <Img className="ourValuesBlock_img" src={Icon1}></Img>
              </div>
              <div className="ourValuesBlockTexts">
                <h3 className="ourValuesSubliltle">Разработанная программа</h3>
                <p className="ourValuesBlockTittle">
                  The majority have suffered alteration in some form, buying to
                  injected humour, or randomised words which desktop publishing
                  packages.
                </p>
              </div>
            </div>

            <hr className="ourValuesLine" />

            <div className="ourValuesBlock">
              <div className="ourValuesBlockImg">
                <Img className="ourValuesBlock_img" src={Vector1}></Img>
              </div>
              <div className="ourValuesBlockTexts">
                <h3 className="ourValuesSubliltle">100% Косметика</h3>
                <p className="ourValuesBlockTittle">
                Мастера используют исключительно натуральные косметические продукты.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ourValuesAboutUs">
        <div className="HomePageContainer ">
          <div className="ourValuesBlackBlock">
            <div className="ourValuesAboutUsContent">
              <Img className="ourValuesAboutUs_img" src={Photo}></Img>
              <div className="ourValuesAboutUsTexts UsTexts">
                <h4 className="UsTexts_subliltle">О нас</h4>
                <h2 className="UsTexts_tittle">
                История красоты, релакса и Beautyness.
                </h2>
                <p className="UsTexts_text">
                История создания уюта и заботы, начавшаяся много лет назад с мечты основательницы Лилианы о создании места для полного расслабления и ухода за собой. Мы гордимся профессионализмом нашей команды, использованием натуральных ингредиентов и инновационными методами ухода. Добро пожаловать в наш уютный оазис красоты и спокойствия!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="ourValuesMeetOurExperts">
        <div className="HomePageContainer">
          <div className="ourValuesTexts">
            <h4 className="ourValuesSubliltle">Специалисты</h4>
            <h2 className="ourValuesTittle">
              Наши специалисты
            </h2>
          </div>

          <div className="OurExpertsBlocks">
            <div className="Block_1">
              <div className="BlockImg">
                <NavLink to={`/team/single/:1`}>
                  <Img src={Image11} className="BlockIm3"></Img>
                </NavLink>
              </div>
              <div className="Block_1_Text OurExpertsBlockText">
                <h3 className="BlockText_title">Сорока Екатерина</h3>
                <h4 className="BlockText_title_2">Beautyness Expert</h4>
                <p className="BlockText_subtittle">
                  I must explain to you how all this mistaken idea of denouncing
                  pleasure that will araise praising pain
                </p>
              </div>
            </div>

            <div className="Block_2">
              <div className="BlockImg">
                <NavLink to={`/team/single/:2`}>
                  <Img src={Image12} className="BlockIm3"></Img>
                </NavLink>
              </div>
              <div className="Block_2_Text OurExpertsBlockText">
                <h3 className="BlockText_title">Шарапова Мария</h3>
                <h4 className="BlockText_title_2">Beautyness Expert</h4>
                <p className="BlockText_subtittle">
                  I must explain to you how all this mistaken idea of denouncing
                  pleasure that will araise praising pain
                </p>
              </div>
            </div>

            <div className="Block_3">
              <div className="BlockImg">
                <NavLink to={`/team/single/:3`}>
                  <Img src={Image13} className="BlockIm3"></Img>
                </NavLink>
              </div>
              <div className="Block_3_Text OurExpertsBlockText">
                <h3 className="BlockText_title">Самойлова Ангелина</h3>
                <h4 className="BlockText_title_2">Beautyness Expert</h4>
                <p className="BlockText_subtittle">
                  I must explain to you how all this mistaken idea of denouncing
                  pleasure that will araise praising pain
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ourValuesTestimonialsBlock1">
        <div className="HomePageContainer ourServicesBlockContainer">
          <div className="TestimonialsBlock_text">
            <h4 className="TestimonialsBlock_tittle">Отзывы</h4>
            <h2 className="TestimonialsBlock_subtittle">
            Что говорят о нас...
            </h2>
          </div>
          <div className="TestimonialReviews">
            <div className="TestimonialFeedback">
              <div className="TestimonialFeedback_texts">
                <p className="TestimonialFeedback_text">
                “ Я был в восторге от визита в спа-салон Beautyness! Процедуры были превосходными, а атмосфера и обслуживание - безупречными. Очень рекомендую этот салон для всех, кто ищет идеальное сочетание расслабления и ухода. “
                </p>
              </div>
              <div className="TestimonialFeedback_user">
                <div className="TestimonialFeedback_userFoto">
                  <Img
                    className="TestimonialFeedback_userFoto_1"
                    src={userPhoto1}
                  ></Img>
                </div>
                <div className="TestimonialFeedback_dataUser">
                  <div className="TestimonialFeedback_stars">
                    <Img src={Reviews}></Img>
                  </div>
                  <h3 className="TestimonialFeedback_userName">
                    James Williams
                  </h3>
                  <p className="TestimonialFeedback_userCountry">
                    United States
                  </p>
                </div>
                <div className="TestimonialFeedback_userElement">
                  <Img src={Icons3}></Img>
                </div>
              </div>
            </div>

            <div className="TestimonialFeedback">
              <div className="TestimonialFeedback_texts">
                <p className="TestimonialFeedback_text">
                “ Впервые посетила спа-салон Beautyness и была впечатлена! После визита моя кожа стала более увлажненной и сияющей, а настроение поднялось на высоту. Обязательно вернусь снова! “
                </p>
              </div>
              <div className="TestimonialFeedback_user">
                <div className="TestimonialFeedback_userFoto">
                  <Img
                    className="TestimonialFeedback_userFoto"
                    src={userPhoto}
                  ></Img>
                </div>
                <div className="TestimonialFeedback_dataUser">
                  <div className="TestimonialFeedback_stars">
                    <Img src={Reviews}></Img>
                  </div>
                  <h3 className="TestimonialFeedback_userName">
                    James Williams
                  </h3>
                  <p className="TestimonialFeedback_userCountry">
                    United States
                  </p>
                </div>
                <div className="TestimonialFeedback_userElement">
                  <Img src={Icons3}></Img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ourValuesShareUs">
        <div className="HomePageContainer">
          <div className="ourValuesShareUsContent ShareUsContent">
            <div className="ShareUsContentBlock1">
              <div className="ShareUsContentBlock1_texts">
                <h4 className="ShareUsContentBlock1_tittle">Уютно, как дома</h4>
                <h2 className="ShareUsContentBlock1_subtittle .ShareUsContentBlock1_subtittle1">
                  Наша атмосфера
                </h2>
                <p className="ShareUsContentBlock1_text">
                  
В нашем спа-центре вы почувствуете уют и релакс сразу по приходу. Уютная атмосфера и приятные ароматы не дадут вам уйти сразу после процедур.
                </p>
              </div>
              <Img className="ShareUsContentBlock1_img" src={Image14}></Img>
            </div>

            <div className="ShareUsContentBlock2">
              <Img className="ShareUsContentBlock2_img" src={Image15}></Img>
              <Img className="ShareUsContentBlock2_img2" src={Image16}></Img>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutPageFlatDiscount">
        <div className=""></div>
      </section>
    </div>
  );
}
