import "../styles/pageStyles/teamPage.css";
import { Img } from "react-image";

//@ts-ignore
import Image11 from "../img/teamPage/Image11.jpg";
//@ts-ignore
import Image12 from "../img/teamPage/Image12.jpg";
//@ts-ignore
import Image13 from "../img/teamPage/Image13.jpg";
//@ts-ignore
import Image5 from "../img/teamPage/Image5.jpg";
//@ts-ignore
import Image6 from "../img/teamPage/Image6.jpg";
//@ts-ignore
import Image7 from "../img/teamPage/Image7.jpg";

import { NavLink } from "react-router-dom";

export default function TeamPage() {
  return (
    <div className="TeamPage">
      <div className="FirstBlock">
        <div className="HomePageContainer">
          <p className="FirstBlockSubtittle">THE BEAUTY TEAM</p>
          <p className="FirstBlockTittle">Beautyness Experts</p>
        </div>
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
                <Img id="4" className="BlockImg" src={Image5}></Img>
              </NavLink>
              <div className="Block_3_Text OurExpertsBlockText">
                <h3 className="BlockText_title">Bonham Carter</h3>
                <h4 className="BlockText_title_2">Beautyness Expert</h4>
                <p className="BlockText_subtittle">
                  I must explain to you how all this mistaken idea of
                  denouncing pleasure that will araise praising pain
                </p>
              </div>
            </div>

            <div className="Block_3">
              <NavLink to={`/team/single/:5`}>
                <Img id="5" className="BlockImg" src={Image6}></Img>{" "}
              </NavLink>
              <div className="Block_3_Text OurExpertsBlockText">
                <h3 className="BlockText_title">Evanna Lynch</h3>
                <h4 className="BlockText_title_2">Beautyness Expert</h4>
                <p className="BlockText_subtittle">
                  I must explain to you how all this mistaken idea of
                  denouncing pleasure that will araise praising pain
                </p>
              </div>
            </div>

            <div className="Block_3">
              <NavLink to={`/team/single/:6`}>
                <Img id="6" className="BlockImg" src={Image7}></Img>{" "}
              </NavLink>
              <div className="Block_3_Text OurExpertsBlockText">
                <h3 className="BlockText_title">Natalia Tena</h3>
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
    </div >
  );
}
