import React from "react";
import { Img } from "react-image";

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

import "../styles/pageStyles/homePage.css";

export default function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomePageContainer">
        <section className="HomePageBody Home">
          <div className="HomeText">
            <h3 className="HomeText_stock">Welcome to Beautyness!!!</h3>
            <h1 className="HomeText_tittle">
              Beauty is power a smile is its sword.
            </h1>
            <p className="HomeText_subtittle">
              There are many variation of passages are Ipsum available, majority
              have suffered alteration in some form.
            </p>
            <Img src={Image}></Img>
            <button className="HomeText_ButtonReservation">
              Make a reservation
            </button>
          </div>
        </section>

        <section className="HomePageProcedures Block">
          <div className="Block_1">
            <div className="Block_1_Text BlockText">
              <h3 className="BlockText_title">Spa & Massage</h3>
              <Img src={Photo1}></Img>
              <p className="BlockText_subtittle">
                If you are going to use a passage offer Lorem Ipsum, you need to
                be sure hidden in the middle of text.
              </p>
              <button className="BlockText_button">READ MORE</button>
            </div>
          </div>
          <div className="Block_2">
            <div className="Block_2_Text BlockText">
              <h3 className="BlockText_title">Hair & Beauty</h3>
              <Img src={Photo2}></Img>

              <p className="BlockText_subtittle">
                If you are going to use a passage offer Lorem Ipsum, you need to
                be sure hidden in the middle of text.
              </p>
              <button className="BlockText_button">READ MORE</button>
            </div>
          </div>

          <div className="Block_3">
            <div className="Block_3_Text BlockText">
              <h2 className="BlockText_title">Body Treatments</h2>
              <Img src={Photo3}></Img>

              <p className="BlockText_subtittle">
                If you are going to use a passage offer Lorem Ipsum, you need to
                be sure hidden in the middle of text.
              </p>
              <button className="BlockText_button">READ MORE</button>
            </div>
          </div>
        </section>

        <section className="HomePageAboutUs AboutUs">
          <div className="AboutUsBlock">
            <div className="AboutUsImg"></div>
            <div className="AboutUs_leftBlock leftBlock">
              <div className="leftBlock_top">
                <h3 className="leftBlock_text">сюда текст</h3>
                <h2 className="leftBlock_tittle">сюда текст</h2>

                <div className="leftBlock_cards">
                  <div className="leftBlock_card">
                    <h3 className="leftBlock_cardTittle">Beauty Experts</h3>
                  </div>
                  <Img src={Photo4}></Img>
                  <Img src={Photo5}></Img>
                  <Img src={Photo6}></Img>
                  <Img src={Photo7}></Img>
                  <Img src={Photo8}></Img>
                  <Img src={Photo9}></Img>
                  <Img src={userPhoto}></Img>
                  <Img src={userPhoto1}></Img>
                  <div className="leftBlock_card">
                    <h3 className="leftBlock_cardTittle">Great Services</h3>
                  </div>

                  <div className="leftBlock_card">
                    <h3 className="leftBlock_cardTittle">100% Genuine</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
