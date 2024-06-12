import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Img } from "react-image";

//jpeg
//@ts-ignore
import Image from "../img/homePage/Image.jpg";
//@ts-ignore
import Photo1 from "../img/homePage/Photo1.jpg";
//@ts-ignore
import Photo2 from "../img/homePage/Photo2.jpg";
//@ts-ignore
import Photo3 from "../img/homePage/Photo3.jpg";
//@ts-ignore
import Photo4 from "../img/homePage/Photo4.jpg";
//@ts-ignore
import Photo5 from "../img/homePage/Photo5.jpg";
//@ts-ignore
import Photo6 from "../img/homePage/Photo6.jpg";
//@ts-ignore
import Photo7 from "../img/homePage/Photo7.jpg";
//@ts-ignore
import Photo8 from "../img/homePage/Photo8.jpg";
//@ts-ignore
import Photo9 from "../img/homePage/Photo9.jpg";
//@ts-ignore
import userPhoto from "../img/homePage/userPhoto.jpg";
//@ts-ignore
import userPhoto1 from "../img/homePage/userPhoto1.jpg";

//svg
//@ts-ignore
import Icon from "../icons/Icon.svg";
//@ts-ignore
import Icon1 from "../icons/Icon(1).svg";
//@ts-ignore
import Icons3 from "../icons/Icons3.svg";
//@ts-ignore
import Reviews from "../icons/Reviews.svg";
//@ts-ignore
import Vector1 from "../icons/Vector1.svg";
// //@ts-ignore
// import User from "../icons/User.svg";
// //@ts-ignore
// import Mail from "../icons/Mail.svg";
// //@ts-ignore
// import Phone from "../icons/Phone.svg";
// //@ts-ignore
// import Book from "../icons/Book.svg";
// //@ts-ignore
// import  from "../icons/Edit.svg";

import "../styles/adaptive/homePageAdaptive.css";
import "../styles/pageStyles/homePage.css";
import { SERVICES_ROUTE } from "../links/consts";
import { LOGIN_ROUTE } from "../links/consts";
import Model from "../components/Model";
import "../styles/Model.css";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [anyNote, setAnyNote] = useState("");

  const [modelActive, setModelActive] = useState(false);
  const [modelErrorActive, setModelErrorActive] = useState(false)

  const handleSubmite = (e: any) => {
    e.preventDefault();
    if (!name || !email || !phone || !service || !anyNote) {

      setModelErrorActive(true)
    }
    else {
      setModelActive(true);
    }
  };

  return (
    <div className="HomePage">
      <section className="HomePageBody Home">
        <div className="HomePageContainer">
          <div className="Homehhh">
            <div className="HomeText">
              <h4 className="HomeText_stock">Добро пожаловать в Beautyness!!!</h4>
              <h1 className="HomeText_tittle">
              Красота. Релакс. Beautyness.
              </h1>
              <p className="HomeText_subtittle">
                Уникальные техники массажа, расслабляющая музыка и ароматические свечи - то, что подарит вам отдых и наслаждение
              </p>
              <NavLink to={LOGIN_ROUTE} className="HomeText_ButtonReservation">
                Записаться
              </NavLink>
            </div>
            <div className="HomeImg">
              <Img className="HomeImg2" src={Image}></Img>
            </div>
          </div>
        </div>
      </section>

      <section className="HomePageProcedures">
        <div className="HomePageContainer">
          <div className="HomePageBlocks">
            <div className="Block_1">
              <div className="BlockImg">
                <Img src={Photo1}></Img>
              </div>
              <div className="Block_1_Text BlockText">
                <h3 className="BlockText_title">Массаж</h3>
                <p className="BlockText_subtittle">
                Погрузитесь в мир расслабления и оздоровления с нашим широким выбором массажных техник, предоставляемых опытными специалистами.
                </p>
              </div>
              <NavLink to={SERVICES_ROUTE} className="BlockText_button">
                Подробнее
              </NavLink>
            </div>

            <div className="Block_2">
              <div className="BlockImg">
                <Img src={Photo2}></Img>
              </div>
              <div className="Block_2_Text BlockText">
                <h3 className="BlockText_title">Забота о коже</h3>
                <p className="BlockText_subtittle">
                Освежите и оздоровите вашу кожу с нашими профессиональными процедурами ухода, подобранными индивидуально для вашей кожи
                </p>
              </div>
              <NavLink to={SERVICES_ROUTE} className="BlockText_button">
                Подробнее
              </NavLink>
            </div>

            <div className="Block_3">
              <div className="BlockImg">
                <Img src={Photo3}></Img>
              </div>
              <div className="Block_3_Text BlockText">
                <h3 className="BlockText_title">Спа</h3>
                <p className="BlockText_subtittle">
                  
Погрузитесь в релаксации с нашими уникальными спа-процедурами, которые восстанавливают баланс тела и души, подарив вам идеальное чувство гармони
                </p>
              </div>
              <NavLink to={SERVICES_ROUTE} className="BlockText_button">
                Подробнее
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <section className="HomePageAboutUs AboutUs">
        <div className="HomePageContainer ">
          <div className="AboutUsBlock">
            <div className="AboutUs_leftBlock leftBlock">
              <div className="leftBlock_top">
                <h4 className="leftBlock_text">О нас</h4>
                <h2 className="leftBlock_tittle">
                  Beautyness -
                </h2>
                <p className="leftBlock_subtittle">
                это оазис красоты и релаксации, где каждый посетитель находит уникальный уход и внимание к своей красоте и благополучию. Наша команда опытных специалистов стремится создать неповторимый опыт для каждого клиента, помогая им достичь желаемых результатов и насладиться моментами истинного удовольствия и расслабления.
                </p>

                <div className="leftBlock_cards">
                  <div className="leftBlock_card">
                    <div className="leftBlock_cardText">
                      <Img src={Icon}></Img>
                      <h3 className="leftBlock_cardTittle">Опытные мастера</h3>
                    </div>
                  </div>

                  <div className="leftBlock_card">
                    <div className="leftBlock_cardText">
                      <Img src={Icon1}></Img>
                      <h3 className="leftBlock_cardTittle">Разработанная программа</h3>
                    </div>
                  </div>

                  <div className="leftBlock_card">
                    <div className="leftBlock_cardText">
                      <Img src={Vector1}></Img>
                      <h3 className="leftBlock_cardTittle">100% Косметика</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="AboutUsImg">
              <Img src={Photo4}></Img>
            </div>
          </div>
        </div>
      </section>
      <section className="ourServicesBlock">
        <div className="HomePageContainer   ">
          <div className="ourServicesBlock_text">
            <h4 className="ourServicesBlock_tittle">Услуги</h4>
            <h2 className="ourServicesBlock_subtittle">
            Уникальные процедуры для идеального ухода!
            </h2>
          </div>
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
        </div>
      </section>
      <section className="TestimonialsBlock">
        <div className="ourServicesBlockContainer">
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
      <section className="ourAwesome">
        <div className="HomePageContainer">
          <div className="ourAwesome_text">
            <h4 className="ourAwesome_tittle">Наши преимущества</h4>
            <h2 className="ourAwesome_subtittle">
            Вот что вы получите на самом деле
            </h2>
          </div>
          <div className="ourAwesome_catalog">
            <div className="ourAwesome_product product">
              {/* <Img className="products_img" src={ }></Img> */}
              <div className="product_text">
                <h3 className="product_textTittle product_textTittle_1">
                Уютная атмосфера
                </h3>
                <p className="product_textSubTittle">
                Создайте идеальное место для отдыха и расслабления.
                </p>
              </div>
            </div>

            <div className="ourAwesome_product product">
              {/* <Img className="products_img" src={ }></Img> */}
              <div className="product_text">
                <h3 className="product_textTittle">
                Профессиональный уход
                </h3>
                <p className="product_textSubTittle">
                Предоставьте широкий выбор качественных процедур, проводимых опытными специалистами.
                </p>
              </div>
            </div>

            <div className="ourAwesome_product product">
              {/* <Img className="products_img" src={ }></Img> */}
              <div className="product_text">
                <h3 className="product_textTittle">
                Индивидуальный подход: 
                </h3>
                <p className="product_textSubTittle">
                Персонализируйте услуги, учитывая потребности и предпочтения каждого клиента.
                </p>
              </div>
            </div>

            <div className="ourAwesome_product product">
              {/* <Img className="products_img" src={ }></Img> */}
              <div className="product_text">
                <h3 className="product_textTittle">
                Высококачественные продукты: 
                </h3>
                <p className="product_textSubTittle">
                Используйте только проверенные косметические средства для достижения отличных результатов.
                </p>
              </div>
            </div>

            <div className="ourAwesome_product product">
              {/* <Img className="products_img" src={ }></Img> */}
              <div className="product_text">
                <h3 className="product_textTittle">
                Удобное расположение:
                </h3>
                <p className="product_textSubTittle">
                Расположите салон в удобном месте для доступа клиентов.
                </p>
              </div>
            </div>

            <div className="ourAwesome_product product">
              {/* <Img className="products_img" src={ }></Img> */}
              <div className="product_text">
                <h3 className="product_textTittle product_textTittle_1">
                Дополнительные услуги: 
                </h3>
                <p className="product_textSubTittle">
                Предложите дополнительные услуги для полного расслабления и ухода за собой.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flatDiscount">
        <div className="HomePageContainer">
          <div className="flatDiscountContent">
            <div className="flatDiscountText">
              <h4 className="flatDiscountText_title">Специальное предложение</h4>
              <h3 className="flatDiscountText_subtittle">
              Скидки до 20% на самые популярные услуги!
              </h3>
              <p className="flatDiscountText_text">
              Скидка 20% в «Счастливые часы» на все спа-ритуалы и спа-программы при посещении с 10:00 до 15:00 в будние дни.
              </p>

              <div className="flatDiscountText_flat flat">
                <div className="flatRight">
                  <div className="flatRight_mailUs">
                    <div className="flatRight_mail">
                      <p className="flatRight_mailTittle">Почта:</p>
                      <p className="flatRight_mailSubittle">
                        info@beautyness.com
                      </p>
                    </div>
                  </div>

                  <div className="flatRight_callUs">
                    <div className="flatRight_call">
                      <p className="flatRight_callTittle">Телефон:</p>
                      <p className="flatRight_callSubittle">
                        (+22) 123 4568 009
                      </p>
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

            <div className="flatDiscountTextForm">
              <div className="flatLeft_forms form">
                <form
                  onSubmit={handleSubmite}
                  className="flatLeft_form formTextForm"
                >
                  <div className="wrapper">
                    <div className="iconName"></div>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ваше имя"
                      className="input"
                    ></input>
                  </div>
                  <div className="wrapper">
                    <div className="iconEmail"></div>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Почта"
                      className="input"
                    ></input>
                  </div>
                  <div className="wrapper">
                    <div className="iconPhone"></div>
                    <input
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Телефон"
                      className="input"
                    ></input>
                  </div>
                  <div className="wrapper">
                    <div className="iconService"></div>
                    <input
                      onChange={(e) => setService(e.target.value)}
                      placeholder="Услуга"
                      className="input"
                    ></input>
                  </div>
                  <div className="wrapper">
                    <div className="iconAnyNote"></div>
                    <textarea
                      onChange={(e) => setAnyNote(e.target.value)}
                      placeholder="Дополнительно"
                      className="textarea"
                    ></textarea>
                  </div>

                  <button className="formButton">GET AN APPOINTMENT</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ourBlog">
        <div className="HomePageContainer">
          <div className="ourBlog_text">
            <h4 className="ourBlog_tittle">Наш блог</h4>
            <h2 className="ourBlog_subtittle">Секреты красоты и релаксации!</h2>
          </div>
          <div className="ourBlogBlocks">
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
                <Img src={Photo8}></Img>
              </div>
              <div className="Block_2_Text ourBlockText">
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

            <div className="ourBlock_3">
              <div className="BlockImg">
                <Img src={Photo9}></Img>
              </div>
              <div className="Block_3_Text ourBlockText">
                <h4 className="BlockText_ourBlog_text">
                  05 июня 2024
                </h4>

                <h3 className="BlockText_ourBlog_tittle">
                Ароматический массаж
                </h3>
                <p className="BlockText_ourBlog_subtittle">
                Ароматический массаж эффективен вдвойне, так как сочетает в себе и лечебное действие самого массажа, и целебные свойства эфирных масел ...
                </p>
              </div>
            </div>
          </div>
          <div className="ourBlockText_button">
            <NavLink to={LOGIN_ROUTE} className="BlockText_button ourButton">
              Читать
            </NavLink>
          </div>
        </div>
      </section>
      <Model active={modelActive} setActive={setModelActive}>
        {name}
        <br />
        {email}
        <br />
        {phone}
        <br />
        {service}
        <br />
        {anyNote}
        <p className="TextOnModelFormTrue">Ваше сообщение успешно отрпавлено!</p>
      </Model>

      <Model active={modelErrorActive} setActive={setModelErrorActive}>
        {name ? !name : `Поле "Name" не заполнено!`}
        <br />
        {email ? !email : `Поле "Email" не заполнено!`}
        <br />
        {phone ? !phone : `Поле "Phone" не заполнено!`}
        <br />
        {service ? !service : `Поле "Service" не заполнено!`}
        <br />
        {anyNote ? !anyNote : `Поле "Any Note For Us" не заполнено!`}
        <p className="TextOnModelFormError">Вы заполнили не все поля!</p>
      </Model>
    </div>
  );
}
