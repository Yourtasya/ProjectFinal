import React from "react";
import { Img } from "react-image";

import "../styles/pageStyles/servicesPage.css";
import "../styles/pageStyles/aboutPage.css";

//@ts-ignore
import Photo5 from "../img/homePage/Photo5.jpg";
//@ts-ignore
import Photo6 from "../img/homePage/Photo6.jpg";
//@ts-ignore
import ImageServices1 from "../img/servicesPage/ImageServices1.jpg";
//@ts-ignore
import ImageServices2 from "../img/servicesPage/ImageServices2.jpg";

export default function ServicesPage() {
  return (
    <div className="ServicesPage">
      <section className="ServicesPageBlocks">
        <div className="FirstBlock">
          <div className="HomePageContainer">
            <p className="FirstBlockSubtittle">SHORT STORY ABOUT US</p>
            <p className="FirstBlockTittle">
              The big story behind, our <br></br>beautyness center
            </p>
            <button className="FirstBlockButton">Make a reservation</button>
          </div>
        </div>

        <div className="ourServicesBlock_text ServicesBlock_text">
          <h4 className="ourServicesBlock_tittle">Our Services</h4>
          <h2 className="ourServicesBlock_subtittle">
            We are Experienced in making you <br></br> very Beautiful
          </h2>
        </div>

        <div className="HomePageContainer">
          <div className="ServicesPrices">
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
                <button className="ourContentButton">GET AN APPOINTMENT</button>
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
                <button className="ourContentButton ourContentButton2">
                  GET AN APPOINTMENT
                </button>
              </div>
              <Img className=".ourServicesFoto_2" src={Photo6}></Img>
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
                <button className="ourContentButton">GET AN APPOINTMENT</button>
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
                <button className="ourContentButton ourContentButton2">
                  GET AN APPOINTMENT
                </button>
              </div>
              <Img className=".ourServicesFoto_2" src={ImageServices2}></Img>
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
        </div>
      </section>
    </div>

  );
}
