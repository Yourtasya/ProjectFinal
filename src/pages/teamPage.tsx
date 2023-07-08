import React from "react";

import "../styles/pageStyles/teamPage.css";
import { Img } from "react-image";

//@ts-ignore
import Image11 from "../img/aboutPage/Image11.jpg";

//@ts-ignore
import Image12 from "../img/aboutPage/Image12.png";

//@ts-ignore
import Image13 from "../img/aboutPage/Image13.png";

export default function TeamPage() {
  return (
    <div className="TeamPage">
      <div className="HomePageContainer">
        <div className="FirstBlock">
          <p className="FirstBlockSubtittle">THE BEAUTY TEAM</p>
          <p className="FirstBlockTittle">
          Beautyness Experts
          </p>
        </div>

        <section className="ourValuesMeetOurExperts">
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

      </section>
      </div>
    </div>
  );
}
