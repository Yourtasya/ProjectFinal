import React, { useContext, useState } from "react";
import { Context } from "..";

import "../styles/pageStyles/teamPage.css";
import { Img } from "react-image";

//@ts-ignore
import Image11 from "../img/aboutPage/Image11.jpg";

//@ts-ignore
import Image12 from "../img/aboutPage/Image12.png";

//@ts-ignore
import Image13 from "../img/aboutPage/Image13.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function TeamPage() {
  const [info, setInfo] = useState([]);
  const { TeamSingleContext } = useContext(Context);

  const getInfo = async (info: any) => {
    try {
      const res = await TeamSingleContext.getInfoAboutUniqueUserById(info);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="TeamPage">
      <div className="HomePageContainer">
        <div className="FirstBlock">
          <p className="FirstBlockSubtittle">THE BEAUTY TEAM</p>
          <p className="FirstBlockTittle">Beautyness Experts</p>
        </div>

        <section className="ourValuesMeetOurExperts">
          <div className="HomePageContainer">
            <div className="ourValuesTexts">
              <h4 className="ourValuesSubliltle">Meet our Experts</h4>
              <h2 className="ourValuesTittle">
                The amazing women behind Beautyness
              </h2>
            </div>

            <div className="OurExpertsBlocks">
              <div className="Block_1">
                <NavLink to={`/team/single/:1`}>
                  <Img id="1" className="BlockImg" src={Image11}></Img>
                </NavLink>
                <div className="Block_1_Text OurExpertsBlockText">
                  <h3 className="BlockText_title">Sherlin D’Cruz</h3>
                  <h4 className="BlockText_title_2">Beautyness Expert</h4>
                  <p className="BlockText_subtittle">
                    I must explain to you how all this mistaken idea of
                    denouncing pleasure that will araise praising pain
                  </p>
                </div>
              </div>

              <div className="Block_2">
                <NavLink to={`/team/single/:2`}>
                  <Img id="2" className="BlockImg" src={Image12}></Img>
                </NavLink>
                <div className="Block_2_Text OurExpertsBlockText">
                  <h3 className="BlockText_title">Maria Sharapova</h3>
                  <h4 className="BlockText_title_2">Beautyness Expert</h4>
                  <p className="BlockText_subtittle">
                    I must explain to you how all this mistaken idea of
                    denouncing pleasure that will araise praising pain
                  </p>
                </div>
              </div>

              <div className="Block_3">
                <NavLink to={`/team/single/:3`}>
                  <Img id="3" className="BlockImg" src={Image13}></Img>
                </NavLink>
                <div className="Block_3_Text OurExpertsBlockText">
                  <h3 className="BlockText_title">Angeline Jenifer</h3>
                  <h4 className="BlockText_title_2">Beautyness Expert</h4>
                  <p className="BlockText_subtittle">
                    I must explain to you how all this mistaken idea of
                    denouncing pleasure that will araise praising pain
                  </p>
                </div>
              </div>

              <div className="Block_3">
                <NavLink to={`/team/single/:4`}>
                  <Img id="4" className="BlockImg" src={Image13}></Img>
                </NavLink>
                <div className="Block_3_Text OurExpertsBlockText">
                  <h3 className="BlockText_title">Angeline Jenifer</h3>
                  <h4 className="BlockText_title_2">Beautyness Expert</h4>
                  <p className="BlockText_subtittle">
                    I must explain to you how all this mistaken idea of
                    denouncing pleasure that will araise praising pain
                  </p>
                </div>
              </div>

              <div className="Block_3">
                <NavLink to={`/team/single/:5`}>
                  <Img id="5" className="BlockImg" src={Image13}></Img>{" "}
                </NavLink>
                <div className="Block_3_Text OurExpertsBlockText">
                  <h3 className="BlockText_title">Angeline Jenifer</h3>
                  <h4 className="BlockText_title_2">Beautyness Expert</h4>
                  <p className="BlockText_subtittle">
                    I must explain to you how all this mistaken idea of
                    denouncing pleasure that will araise praising pain
                  </p>
                </div>
              </div>

              <div className="Block_3">
                <NavLink to={`/team/single/:6`}>
                  <Img id="6" className="BlockImg" src={Image13}></Img>{" "}
                </NavLink>
                <div className="Block_3_Text OurExpertsBlockText">
                  <h3 className="BlockText_title">Angeline Jenifer</h3>
                  <h4 className="BlockText_title_2">Beautyness Expert</h4>
                  <p className="BlockText_subtittle">
                    I must explain to you how all this mistaken idea of
                    denouncing pleasure that will araise praising pain
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
