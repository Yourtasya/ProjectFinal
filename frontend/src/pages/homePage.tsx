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
              <h4 className="HomeText_stock">Welcome to Beautyness!!!</h4>
              <h1 className="HomeText_tittle">
                Beauty is power a smile is its sword.
              </h1>
              <p className="HomeText_subtittle">
                There are many variation of passages are Ipsum available,
                majority have suffered alteration in some form.
              </p>
              <NavLink to={LOGIN_ROUTE} className="HomeText_ButtonReservation">
                Make a reservation
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
                <h3 className="BlockText_title">Spa & Massage</h3>
                <p className="BlockText_subtittle">
                  If you are going to use a passage offer Lorem Ipsum, you need
                  to be sure hidden in the middle of text.
                </p>
              </div>
              <NavLink to={LOGIN_ROUTE} className="BlockText_button">
                READ MORE
              </NavLink>
            </div>

            <div className="Block_2">
              <div className="BlockImg">
                <Img src={Photo2}></Img>
              </div>
              <div className="Block_2_Text BlockText">
                <h3 className="BlockText_title">Hair & Beauty</h3>
                <p className="BlockText_subtittle">
                  If you are going to use a passage offer Lorem Ipsum, you need
                  to be sure hidden in the middle of text.
                </p>
              </div>
              <NavLink to={LOGIN_ROUTE} className="BlockText_button">
                READ MORE
              </NavLink>
            </div>

            <div className="Block_3">
              <div className="BlockImg">
                <Img src={Photo3}></Img>
              </div>
              <div className="Block_3_Text BlockText">
                <h3 className="BlockText_title">Body Treatments</h3>
                <p className="BlockText_subtittle">
                  If you are going to use a passage offer Lorem Ipsum, you need
                  to be sure hidden in the middle of text.
                </p>
              </div>
              <NavLink to={LOGIN_ROUTE} className="BlockText_button">
                READ MORE
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
                <h4 className="leftBlock_text">About Us</h4>
                <h2 className="leftBlock_tittle">
                  The Beauty is about being Comfortable in your own skin!
                </h2>
                <p className="leftBlock_subtittle">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, buying to injected humour, or randomised words which
                  don't look even many desktop publishing packages.
                </p>

                <div className="leftBlock_cards">
                  <div className="leftBlock_card">
                    <div className="leftBlock_cardText">
                      <Img src={Icon}></Img>
                      <h3 className="leftBlock_cardTittle">Beauty Experts</h3>
                    </div>
                  </div>

                  <div className="leftBlock_card">
                    <div className="leftBlock_cardText">
                      <Img src={Icon1}></Img>
                      <h3 className="leftBlock_cardTittle">Great Services</h3>
                    </div>
                  </div>

                  <div className="leftBlock_card">
                    <div className="leftBlock_cardText">
                      <Img src={Vector1}></Img>
                      <h3 className="leftBlock_cardTittle">100% Genuine</h3>
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
            <h4 className="ourServicesBlock_tittle">Our Services</h4>
            <h2 className="ourServicesBlock_subtittle">
              We are Experienced in making you very Beautiful
            </h2>
          </div>
          <div className="ourServicesBlockContent ourContent">
            <Img className="ourServicesFoto_1" src={Photo5}></Img>
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
                GET AN APPOINTMENT
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
                GET AN APPOINTMENT
              </NavLink>
            </div>
            <Img className="ourServicesFoto_2" src={Photo6}></Img>
          </div>
        </div>
      </section>
      <section className="TestimonialsBlock">
        <div className="ourServicesBlockContainer">
          <div className="TestimonialsBlock_text">
            <h4 className="TestimonialsBlock_tittle">Testimonials</h4>
            <h2 className="TestimonialsBlock_subtittle">
              What our Customers says...
            </h2>
          </div>
          <div className="TestimonialReviews">
            <div className="TestimonialFeedback">
              <div className="TestimonialFeedback_texts">
                <p className="TestimonialFeedback_text">
                  “ It is a long established fact that a reader will be tracked
                  distracted by the readable content of a page is when looking
                  at its layout. The point of using Lorem of distribution it
                  look like readable English “
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
                  “ It is a long established fact that a reader will be tracked
                  distracted by the readable content of a page is when looking
                  at its layout. The point of using Lorem of distribution it
                  look like readable English “
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
            <h4 className="ourAwesome_tittle">Our Awesome Benefits</h4>
            <h2 className="ourAwesome_subtittle">
              Actually what you’ll get from
            </h2>
          </div>
          <div className="ourAwesome_catalog">
            <div className="ourAwesome_product product">
              {/* <Img className="products_img" src={ }></Img> */}
              <div className="product_text">
                <h3 className="product_textTittle product_textTittle_1">
                  Optimised Energy Efficiency
                </h3>
                <p className="product_textSubTittle">
                  The point of using Lorem Ipsum is that using making it look
                  like readable.
                </p>
              </div>
            </div>

            <div className="ourAwesome_product product">
              {/* <Img className="products_img" src={ }></Img> */}
              <div className="product_text">
                <h3 className="product_textTittle">
                  Multi-faceted Water Filtration
                </h3>
                <p className="product_textSubTittle">
                  The point of using Lorem Ipsum is that using making it look
                  like readable.
                </p>
              </div>
            </div>

            <div className="ourAwesome_product product">
              {/* <Img className="products_img" src={ }></Img> */}
              <div className="product_text">
                <h3 className="product_textTittle">
                  Uncompromising Quality and Durability
                </h3>
                <p className="product_textSubTittle">
                  The point of using Lorem Ipsum is that using making it look
                  like readable.
                </p>
              </div>
            </div>

            <div className="ourAwesome_product product">
              {/* <Img className="products_img" src={ }></Img> */}
              <div className="product_text">
                <h3 className="product_textTittle">
                  An Ultra-Pampering Spa Experience
                </h3>
                <p className="product_textSubTittle">
                  The point of using Lorem Ipsum is that using making it look
                  like readable.
                </p>
              </div>
            </div>

            <div className="ourAwesome_product product">
              {/* <Img className="products_img" src={ }></Img> */}
              <div className="product_text">
                <h3 className="product_textTittle">
                  Easy Care for Unparalleled Enjoyment
                </h3>
                <p className="product_textSubTittle">
                  The point of using Lorem Ipsum is that using making it look
                  like readable.
                </p>
              </div>
            </div>

            <div className="ourAwesome_product product">
              {/* <Img className="products_img" src={ }></Img> */}
              <div className="product_text">
                <h3 className="product_textTittle product_textTittle_1">
                  Optimised Energy Efficiency
                </h3>
                <p className="product_textSubTittle">
                  The point of using Lorem Ipsum is that using making it look
                  like readable.
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
              <h4 className="flatDiscountText_title">Flat Discount </h4>
              <h3 className="flatDiscountText_subtittle">
                Claim upto 50% off er on ‍the most popular services...
              </h3>
              <p className="flatDiscountText_text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, buying
                to injected humour, or randomised words.
              </p>

              <div className="flatDiscountText_flat flat">
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
                      placeholder="Name"
                      className="input"
                    ></input>
                  </div>
                  <div className="wrapper">
                    <div className="iconEmail"></div>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="input"
                    ></input>
                  </div>
                  <div className="wrapper">
                    <div className="iconPhone"></div>
                    <input
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone"
                      className="input"
                    ></input>
                  </div>
                  <div className="wrapper">
                    <div className="iconService"></div>
                    <input
                      onChange={(e) => setService(e.target.value)}
                      placeholder="Service You Need"
                      className="input"
                    ></input>
                  </div>
                  <div className="wrapper">
                    <div className="iconAnyNote"></div>
                    <textarea
                      onChange={(e) => setAnyNote(e.target.value)}
                      placeholder="Any Note For Us"
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
            <h4 className="ourBlog_tittle">Our Blog</h4>
            <h2 className="ourBlog_subtittle">Latest Updates</h2>
          </div>
          <div className="ourBlogBlocks">
            <div className="ourBlock_1">
              <div className="BlockImg">
                <Img src={Photo7}></Img>
              </div>
              <div className="Block_1_Text ourBlockText">
                <h4 className="BlockText_ourBlog_text">
                  11TH AUGUST 2021 - BY PETER BERGSON
                </h4>
                <h3 className="BlockText_ourBlog_tittle ">
                  The energy efficiency of the hydrotherapy or swim
                </h3>
                <p className="BlockText_ourBlog_subtittle">
                  The point of using Lorem Ipsum hiter that using making it look
                  like others readable will get end.
                </p>
              </div>
            </div>

            <div className="ourBlock_2">
              <div className="BlockImg">
                <Img src={Photo8}></Img>
              </div>
              <div className="Block_2_Text ourBlockText">
                <h4 className="BlockText_ourBlog_text">
                  11TH AUGUST 2021 - BY PETER BERGSON
                </h4>

                <h3 className="BlockText_ourBlog_tittle">
                  Tips to improve your body via cleansing
                </h3>
                <p className="BlockText_ourBlog_subtittle">
                  The point of using Lorem Ipsum hiter that using making it look
                  like others readable will get end.
                </p>
              </div>
            </div>

            <div className="ourBlock_3">
              <div className="BlockImg">
                <Img src={Photo9}></Img>
              </div>
              <div className="Block_3_Text ourBlockText">
                <h4 className="BlockText_ourBlog_text">
                  11TH AUGUST 2021 - BY PETER BERGSON
                </h4>

                <h3 className="BlockText_ourBlog_tittle">
                  Experience the beauty at our beauty spa
                </h3>
                <p className="BlockText_ourBlog_subtittle">
                  The point of using Lorem Ipsum hiter that using making it look
                  like others readable will get end.
                </p>
              </div>
            </div>
          </div>
          <div className="ourBlockText_button">
            <NavLink to={LOGIN_ROUTE} className="BlockText_button ourButton">
              READ MORE
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
