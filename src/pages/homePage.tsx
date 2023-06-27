import React from "react";
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
//@ts-ignore
import Background4 from "../img/homePage/Background4.jpg";
//@ts-ignore
import Background2 from "../img/homePage/Background2.jpg";

//svg
//@ts-ignore
import Book from "../icons/Book.svg";
//@ts-ignore
import Edit from "../icons/Edit.svg";
//@ts-ignore
import Icon from "../icons/Icon.svg";
//@ts-ignore
import Icon1 from "../icons/Icon(1).svg";
//@ts-ignore
import Icons3 from "../icons/Icons3.svg";
//@ts-ignore
import Mail from "../icons/Mail.svg";
//@ts-ignore
import Phone from "../icons/Phone.svg";
//@ts-ignore
import Reviews from "../icons/Reviews.svg";
//@ts-ignore
import User from "../icons/User.svg";
//@ts-ignore
import Vector1 from "../icons/Vector1.svg";
//@ts-ignore
import Vector2 from "../icons/Vector2.svg";

import "../styles/pageStyles/homePage.css";

export default function HomePage() {
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
              <button className="HomeText_ButtonReservation">
                Make a reservation
              </button>
            </div>
            <div className="HomeImg">
              <Img src={Image}></Img>
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
              <button className="BlockText_button">READ MORE</button>
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
              <button className="BlockText_button">READ MORE</button>
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
              <button className="BlockText_button">READ MORE</button>
            </div>
          </div>
        </div>
      </section>

      <section className="HomePageAboutUs AboutUs">
        <div className="HomePageContainer">
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
                      <h3 className="leftBlock_cardTittle">Beauty Experts</h3>
                    </div>
                  </div>

                  <div className="leftBlock_card">
                    <div className="leftBlock_cardText">
                      <h3 className="leftBlock_cardTittle">Great Services</h3>
                    </div>
                  </div>

                  <div className="leftBlock_card">
                    <div className="leftBlock_cardText">
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
        <div className="ourServicesBlockContainer">
          <div className="ourServicesBlock_text">
            <h4 className="ourServicesBlock_tittle">Our Services</h4>
            <h2 className="ourServicesBlock_subtittle">
              We are Experienced in making you very Beautiful
            </h2>
          </div>
          <div className="ourServicesBlockContent ourContent">
            <Img className="hhh4" src={Photo5}></Img>
            <div className="ourContentText_2">
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
              <button className="ourContentButton">GET AN APPOINTMENT</button>
            </div>
          </div>
          <div className="ourServicesBlockContent ourContent">
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
              <button className="ourContentButton">GET AN APPOINTMENT</button>
            </div>
            <Img className="ff3" src={Photo6}></Img>
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
                <div className="TestimonialFeedback_userElement"></div>
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
                <div className="TestimonialFeedback_userElement"></div>
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
                <h3 className="product_textTittle">Optimised Energy Efficiency</h3>
                <p className="product_textSubTittle">The point of using Lorem Ipsum is that  using making it look like readable.</p>
              </div>
            </div>

            <div className="ourAwesome_product product">
              {/* <Img className="products_img" src={ }></Img> */}
              <div className="product_text">
                <h3 className="product_textTittle">Optimised Energy Efficiency</h3>
                <p className="product_textSubTittle">The point of using Lorem Ipsum is that  using making it look like readable.</p>
              </div>
            </div>

            <div className="ourAwesome_product product">
              {/* <Img className="products_img" src={ }></Img> */}
              <div className="product_text">
                <h3 className="product_textTittle">Optimised Energy Efficiency</h3>
                <p className="product_textSubTittle">The point of using Lorem Ipsum is that  using making it look like readable.</p>
              </div>
            </div>

            <div className="ourAwesome_product product">
              {/* <Img className="products_img" src={ }></Img> */}
              <div className="product_text">
                <h3 className="product_textTittle">Optimised Energy Efficiency</h3>
                <p className="product_textSubTittle">The point of using Lorem Ipsum is that  using making it look like readable.</p>
              </div>
            </div>
            
            <div className="ourAwesome_product product">
              {/* <Img className="products_img" src={ }></Img> */}
              <div className="product_text">
                <h3 className="product_textTittle">Optimised Energy Efficiency</h3>
                <p className="product_textSubTittle">The point of using Lorem Ipsum is that  using making it look like readable.</p>
              </div>
            </div>

            <div className="ourAwesome_product product">
              {/* <Img className="products_img" src={ }></Img> */}
              <div className="product_text">
                <h3 className="product_textTittle">Optimised Energy Efficiency</h3>
                <p className="product_textSubTittle">The point of using Lorem Ipsum is that  using making it look like readable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Img src={Photo7}></Img>
        <Img src={Photo8}></Img>
        <Img src={Photo9}></Img>
        <Img src={Icon1}></Img>
        <Img src={Background4}></Img>
        <Img src={Book}></Img>
        <Img src={Edit}></Img>
        <Img src={Icon}></Img>
        <Img src={Icons3}></Img>
        <Img src={Mail}></Img>
        <Img src={Phone}></Img>
        <Img src={Reviews}></Img>
        <Img src={User}></Img>
        <Img src={Vector1}></Img>
        <Img src={Vector2}></Img>
        <Img src={Background2}></Img>
      </section>
    </div>
  );
}
