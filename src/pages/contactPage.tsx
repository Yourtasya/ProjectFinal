import React from "react";

import { Img } from "react-image";

// import Image15 from "../img/aboutPage/";


import "../styles/pageStyles/contactPage.css";

export default function ContactPage() {
  return (
    <div className="ContactPage">
      <div className="HomePageContainer">
        <div className="FirstBlock">
          <p className="FirstBlockSubtittle">GET IN TOUCH WITH US</p>
          <p className="FirstBlockTittle">
            We Are Ready To Assist
            <br></br> You In 24x7
          </p>
        </div>

        <section className="getInTouch">
          <div className="getInTouchBlock">
            {/* <Img className="getInTouchBlock_img" src={Image15}></Img> */}
            <div className="getInTouchBlock_texts">
              <h4 className="getInTouchBlock_tittle">Share us</h4>
              <h2 className="getInTouchBlock_subtittle">
                Follow us on Instagram
              </h2>
              <p className="getInTouchBlock_text">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to injected humour, or randomised words  many desktop publishing packages.
              </p>

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
            </div>
          </div>
        </section>

        <section className="scheduleYourPresence">
          <div className="FirstBlock">
            <p className="FirstBlockSubtittle">SCHEDULE YOUR PRESENCE</p>
            <p className="FirstBlockTittle">
              Make an Appointment
            </p>
            <p className="FirstBlockText">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
            </p>
          </div>

          <div className="scheduleYourPresence_form">
            <div className="flatLeft_formsYourPresence form">
              <form action="" className="flatLeft_form">
                <div className="wrapper">
                  <div className="iconName"></div>
                  <input placeholder="Name" className="scheduleYourInput"></input>
                </div>
                <div className="wrapper">
                  <div className="iconEmail"></div>
                  <input placeholder="Email" className="scheduleYourInput"></input>
                </div>
                <div className="wrapper">
                  <div className="iconPhone"></div>
                  <input placeholder="Phone" className="scheduleYourInput"></input>
                </div>
                <div className="wrapper">
                  <div className="iconService"></div>
                  <input
                    placeholder="Service You Need"
                    className="scheduleYourInput"
                  ></input>
                </div>
                <div className="wrapper">
                  <div className="iconAnyNote"></div>
                  <textarea
                    placeholder="Any Note For Us"
                    className="textarea"
                  ></textarea>
                </div>

                <button className="formButton">READ MORE</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
