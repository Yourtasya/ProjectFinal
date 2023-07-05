import React from "react";

import "../styles/pageStyles/aboutPage.css";

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

//@ts-igno";

export default function AboutPage() {
  return (
    <div className="AboutPage">
      <div className="HomePageContainer">

        <div className="FirstBlock">
          <p className="FirstBlockSubtittle">SHORT STORY ABOUT US</p>
          <p className="FirstBlockTittle">The big story behind, our <br></br>beautyness center</p>
          <button className="FirstBlockButton">Make a reservation</button>
        </div>
      </div>

      <section className="ourValues">
        <div className="ourValuesContainer">
          <div className="ourValuesTexts">
            <h4 className="ourValuesSubliltle">Our Values</h4>
            <h2 className="ourValuesTittle">The work values we thrive for</h2>
          </div>

          <div className="ourValuesBlocks">
            <div className="ourValuesBlock">
              <div className="ourValuesBlockImg">
                <Img className="ourValuesBlock_img" src={Icon}></Img>
              </div>
              <div className="ourValuesBlockTexts">
                <h3 className="ourValuesSubliltle">Beauty Experts</h3>
                <p className="ourValuesBlockTittle">The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.</p>
              </div>
            </div>

            <hr className="ourValuesLine" />


            <div className="ourValuesBlock ourValuesBlockLine">
              <div className="ourValuesBlockImg">
                <Img className="ourValuesBlock_img" src={Icon1}></Img>
              </div>
              <div className="ourValuesBlockTexts">
                <h3 className="ourValuesSubliltle">Beauty Experts</h3>
                <p className="ourValuesBlockTittle">The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.</p>
              </div>
            </div>

            <hr className="ourValuesLine" />


            <div className="ourValuesBlock">
              <div className="ourValuesBlockImg">
                <Img className="ourValuesBlock_img" src={Vector1}></Img>
              </div>
              <div className="ourValuesBlockTexts">
                <h3 className="ourValuesSubliltle">Beauty Experts</h3>
                <p className="ourValuesBlockTittle">The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.</p>
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
                <h4 className="UsTexts_subliltle">About Us</h4>
                <h2 className="UsTexts_tittle">Style is a Reflection of your Attitude & your Personality</h2>
                <p className="UsTexts_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to injected humour, or randomised words which don't look even many desktop publishing packages.</p>
              </div>
            </div>

          </div>



        </div>

      </div>


      <div className="ourValuesMeetOurExperts">
        <div className="HomePageContainer">
          <div className="ourValuesTexts">
            <h4 className="ourValuesSubliltle">Meet our Experts</h4>
            <h2 className="ourValuesTittle">The amazing women behind Beautyness</h2>
          </div>

          <div className="OurExpertsBlocks">
            <div className="Block_1">
              <div className="BlockImg">
                <Img src={Image11}></Img>
              </div>
              <div className="Block_1_Text OurExpertsBlockText">
                <h3 className="BlockText_title">Sherlin D’Cruz</h3>
                <h4 className="BlockText_title_2">Beautyness Expert</h4>
                <p className="BlockText_subtittle">
                  I must explain to you how all this mistaken idea of denouncing pleasure that will araise praising pain
                </p>
              </div>

            </div>

            <div className="Block_2">
              <div className="BlockImg">
                <Img src={Image12}></Img>
              </div>
              <div className="Block_2_Text OurExpertsBlockText">
                <h3 className="BlockText_title">Maria Sharapova</h3>
                <h4 className="BlockText_title_2">Beautyness Expert</h4>
                <p className="BlockText_subtittle">
                  I must explain to you how all this mistaken idea of denouncing pleasure that will araise praising pain
                </p>
              </div>

            </div>

            <div className="Block_3">
              <div className="BlockImg">
                <Img src={Image13}></Img>
              </div>
              <div className="Block_3_Text OurExpertsBlockText">
                <h3 className="BlockText_title">Angeline Jenifer</h3>
                <h4 className="BlockText_title_2">Beautyness Expert</h4>
                <p className="BlockText_subtittle">
                  I must explain to you how all this mistaken idea of denouncing pleasure that will araise praising pain
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>

      <section className="ourValuesTestimonialsBlock1">
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

      <section className="ourValuesShareUs">
        <div className="HomePageContainer">
          <div className="ourValuesShareUsContent ShareUsContent">
            <div className="ShareUsContentBlock1">
              <div className="ShareUsContentBlock1_texts">
                <h4 className="ShareUsContentBlock1_tittle">Share us</h4>
                <h2 className="ShareUsContentBlock1_subtittle">
                  Follow us on Instagram
                </h2>
                <p className="ShareUsContentBlock1_text">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to injected humour, or randomised words  many desktop publishing packages.
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

    </div>
  );
}
