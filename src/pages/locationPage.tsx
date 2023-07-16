import React from "react";

import { Img } from "react-image";

//@ts-ignore
import IconContact1 from "../icons/contactPageSvg/Icon1.svg";
//@ts-ignore
import IconContact2 from "../icons/contactPageSvg/Icon2.svg";
//@ts-ignore
import IconContact3 from "../icons/contactPageSvg/Icon3.svg";
//@ts-ignore
import LocationPhoto1 from "../img/locationPage/LocationPhoto1.jpg";
//@ts-ignore
import LocationPhoto2 from "../img/locationPage/LocationPhoto2.jpg";
//@ts-ignore
import LocationPhoto3 from "../img/locationPage/LocationPhoto3.jpg";

import "../styles/pageStyles/locationPage.css";

export default function LocationPage() {
  return (
    <div className="LocationPage">
      <div className="FirstBlock">
        <div className="HomePageContainer">
          <p className="FirstBlockSubtittle">SHORT STORY ABOUT US</p>
          <p className="FirstBlockTittle">
            The big story behind, our <br></br>beautyness center
          </p>
          <button className="FirstBlockButton">Make a reservation</button>
        </div>
      </div>

      <section className="localion">
        <div className="HomePageContainer">
          <div className="localionBlocks">
            <div className="localionBlock">
              <Img className="getInTouchBlock_img" src={LocationPhoto1}></Img>
              <div className="getInTouchBlock_texts localionTexts">
                <h4 className="getInTouchBlock_tittle">Columbia</h4>
                <h2 className="getInTouchBlock_subtittle">
                  Washington D.C
                </h2>

                <div className="getInToucflatRight localionRight">
                  <div className="getInToucVisit">
                    <Img className="getInTouchBlock_img" src={IconContact1}></Img>

                    <div className="flatRight_mail">
                      <p className="flatRight_mailTittle getInToucDropTittle">Visit Us :</p>
                      <p className="flatRight_mailSubittle getInToucDropSubtittle">
                        NO.09a, Downtown, SAN DIEAGO, USA
                      </p>
                    </div>
                  </div>

                  <div className="getInToucDrop">
                    <Img className="getInTouchBlock_img" src={IconContact2}></Img>

                    <div className="flatRight_call">
                      <p className="flatRight_callTittle getInToucDropTittle">Call Us :</p>
                      <p className="flatRight_callSubittle getInToucDropSubtittle">
                        support@beautyness.com
                      </p>
                    </div>
                  </div>

                  <div className="getInToucVisitCall">
                    <Img className="getInTouchBlock_img" src={IconContact3}></Img>

                    <div className="flatRight_call">
                      <p className="flatRight_callTittle getInToucDropTittle">CALL US :</p>
                      <p className="flatRight_callSubittle getInToucDropSubtittle">
                        Call: 1-800-123-9999
                      </p>
                    </div>
                  </div>

                </div>
                <button className="localionBlockButton">GET AN APPOINTMENT</button>

              </div>
            </div>

            <div className="localionBlock">
              <div className="getInTouchBlock_texts localionTexts">
                <h4 className="getInTouchBlock_tittle">san francisco</h4>
                <h2 className="getInTouchBlock_subtittle">
                New York
                </h2>

                <div className="getInToucflatRight localionRight">
                  <div className="getInToucVisit">
                    <Img className="getInTouchBlock_img" src={IconContact1}></Img>

                    <div className="flatRight_mail">
                      <p className="flatRight_mailTittle getInToucDropTittle">Visit Us :</p>
                      <p className="flatRight_mailSubittle getInToucDropSubtittle">
                        NO.09a, Downtown, SAN DIEAGO, USA
                      </p>
                    </div>
                  </div>

                  <div className="getInToucDrop">
                    <Img className="getInTouchBlock_img" src={IconContact2}></Img>

                    <div className="flatRight_call">
                      <p className="flatRight_callTittle getInToucDropTittle">Call Us :</p>
                      <p className="flatRight_callSubittle getInToucDropSubtittle">
                        support@beautyness.com
                      </p>
                    </div>
                  </div>

                  <div className="getInToucVisitCall">
                    <Img className="getInTouchBlock_img" src={IconContact3}></Img>

                    <div className="flatRight_call">
                      <p className="flatRight_callTittle getInToucDropTittle">CALL US :</p>
                      <p className="flatRight_callSubittle getInToucDropSubtittle">
                        Call: 1-800-123-9999
                      </p>
                    </div>
                  </div>

                </div>
                <button className="localionBlockButton">GET AN APPOINTMENT</button>
              </div>
              <Img className="getInTouchBlock_img" src={LocationPhoto2}></Img>

            </div>

            <div className="localionBlock localionBlockLast">
              <Img className="getInTouchBlock_img" src={LocationPhoto3}></Img>
              <div className="getInTouchBlock_texts localionTexts">
                <h4 className="getInTouchBlock_tittle">FRANCE</h4>
                <h2 className="getInTouchBlock_subtittle">
                Paris
                </h2>

                <div className="getInToucflatRight localionRight">
                  <div className="getInToucVisit">
                    <Img className="getInTouchBlock_img" src={IconContact1}></Img>

                    <div className="flatRight_mail">
                      <p className="flatRight_mailTittle getInToucDropTittle">Visit Us :</p>
                      <p className="flatRight_mailSubittle getInToucDropSubtittle">
                        NO.09a, Downtown, SAN DIEAGO, USA
                      </p>
                    </div>
                  </div>

                  <div className="getInToucDrop">
                    <Img className="getInTouchBlock_img" src={IconContact2}></Img>

                    <div className="flatRight_call">
                      <p className="flatRight_callTittle getInToucDropTittle">Call Us :</p>
                      <p className="flatRight_callSubittle getInToucDropSubtittle">
                        support@beautyness.com
                      </p>
                    </div>
                  </div>

                  <div className="getInToucVisitCall">
                    <Img className="getInTouchBlock_img" src={IconContact3}></Img>

                    <div className="flatRight_call">
                      <p className="flatRight_callTittle getInToucDropTittle">CALL US :</p>
                      <p className="flatRight_callSubittle getInToucDropSubtittle">
                        Call: 1-800-123-9999
                      </p>
                    </div>
                  </div>

                </div>
                <button className="localionBlockButton">GET AN APPOINTMENT</button>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
