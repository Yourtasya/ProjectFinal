import "../styles/pageStyles/teamPage.css";
import "../styles/adaptive/teamPageAdaptive.css"

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
          {/* <p className="FirstBlockSubtittle">специалисты</p> */}
          <p className="FirstBlockTittle">Наши эксперты красоты и релаксации</p>
        </div>
      </div>

      <section className="ourValuesMeetOurExperts">
        <div className="HomePageContainer">
          <div className="ourValuesTexts">
            <h4 className="ourValuesSubliltle">Специалисты</h4>
            <h2 className="ourValuesTittle">
            Только дипломированные профессионалы
            </h2>
          </div>


          <div className="OurExpertsBlocks">
            <div className="Block_1">
              <NavLink to={`/team/single/:1`}>
                <Img id="1" className="BlockIm2" src={Image11}></Img>
              </NavLink>
              <div className="Block_1_Text OurExpertsBlockText">
                <h3 className="BlockText_title">Сорока Екатерина</h3>
                <h4 className="BlockText_title_2">Beautyness Expert</h4>
                <p className="BlockText_subtittle">
                  I must explain to you how all this mistaken idea of
                  denouncing pleasure that will araise praising pain
                </p>
              </div>
            </div>

            <div className="Block_2">
              <NavLink to={`/team/single/:2`}>
                <Img id="2" className="BlockIm2" src={Image12}></Img>
              </NavLink>
              <div className="Block_2_Text OurExpertsBlockText">
                <h3 className="BlockText_title">Шарапова Мария</h3>
                <h4 className="BlockText_title_2">Beautyness Expert</h4>
                <p className="BlockText_subtittle">
                  I must explain to you how all this mistaken idea of
                  denouncing pleasure that will araise praising pain
                </p>
              </div>
            </div>

            <div className="Block_3">
              <NavLink to={`/team/single/:3`}>
                <Img id="3" className="BlockIm2" src={Image13}></Img>
              </NavLink>
              <div className="Block_3_Text OurExpertsBlockText">
                <h3 className="BlockText_title">Самойлова Ангелина</h3>
                <h4 className="BlockText_title_2">Beautyness Expert</h4>
                <p className="BlockText_subtittle">
                  I must explain to you how all this mistaken idea of
                  denouncing pleasure that will araise praising pain
                </p>
              </div>
            </div>

            <div className="Block_3">
              <NavLink to={`/team/single/:4`}>
                <Img id="4" className="BlockIm2" src={Image5}></Img>
              </NavLink>
              <div className="Block_3_Text OurExpertsBlockText">
                <h3 className="BlockText_title">Глазкова Яна</h3>
                <h4 className="BlockText_title_2">Beautyness Expert</h4>
                <p className="BlockText_subtittle">
                  I must explain to you how all this mistaken idea of
                  denouncing pleasure that will araise praising pain
                </p>
              </div>
            </div>

            <div className="Block_3">
              <NavLink to={`/team/single/:5`}>
                <Img id="5" className="BlockIm2" src={Image6}></Img>{" "}
              </NavLink>
              <div className="Block_3_Text OurExpertsBlockText">
                <h3 className="BlockText_title">Селезнева Алеся</h3>
                <h4 className="BlockText_title_2">Beautyness Expert</h4>
                <p className="BlockText_subtittle">
                  I must explain to you how all this mistaken idea of
                  denouncing pleasure that will araise praising pain
                </p>
              </div>
            </div>

            <div className="Block_3">
              <NavLink to={`/team/single/:6`}>
                <Img id="6" className="BlockIm2" src={Image7}></Img>{" "}
              </NavLink>
              <div className="Block_3_Text OurExpertsBlockText">
                <h3 className="BlockText_title">Иванова Наталья</h3>
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
