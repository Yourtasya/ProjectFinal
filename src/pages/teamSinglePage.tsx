import React, { useContext, useEffect, useState } from "react";
import { Img } from "react-image";
import "../styles/pageStyles/teamSinglePage.css";
import { Context } from "..";
import { NavLink, useParams } from "react-router-dom";

//@ts-ignore
import VectorPhone from "../icons/taemSingle/VectorPhone.svg";
//@ts-ignore
import VectorMail from "../icons/taemSingle/VectorMail.svg";
import { LOGIN_ROUTE } from "../links/consts";

export default function TeamSinglePage() {
  const [infoAboutUser, setInfo] = useState<any>([]);

  const { TeamSingleContext } = useContext(Context);
  const { id } = useParams();
  useEffect(() => {
    getInfo(id);
  }, []);

  const getInfo = async (userArr: any) => {
    try {
      //массив с пользователями
      const infoAboutUser = await TeamSingleContext.getInfoAboutUniqueUserById(
        userArr
      );
      const userId = id?.replace(":", "");
      const userObject = infoAboutUser?.find((user) => {
        return user.id === userId;
      });

      setInfo(userObject);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="TeamSinglePage">
      <div className="FirstBlock">
        <div className="HomePageContainer">
          <p className="FirstBlockSubtittle">THE EXPERT</p>
          <p className="FirstBlockTittle">Creative Beauty Team</p>
        </div>
      </div>
      <section className="TeamSinglePageContent">
        <div className="HomePageContainer">
          <div className="TeamSinglePageBlock">
            <Img className="TeamSingleImg" src={infoAboutUser.img}></Img>
            <div className="TeamSinglePageTexts">
              <p className="TeamSinglePageTittle">Beautyness Expert Manager</p>
              <div className="TeamSinglePageUserName">
                {infoAboutUser.userName}
              </div>
              <div className="TeamSinglePageText">{infoAboutUser.text}</div>

              <div className="TeamSingleLittleBlocks">
                <div className="TeamSingleLittleBlock">
                  <div className="TeamSingleLittleBlockBorder">
                    <Img
                      className="getInTouchBlock_img"
                      src={VectorPhone}
                    ></Img>
                  </div>
                  <div className="TeamSinglePagePhone">
                    {infoAboutUser.phone}
                  </div>
                </div>

                <div className="TeamSingleLittleBlock">
                  <div className="TeamSingleLittleBlockBorder">
                    <Img className="getInTouchBlock_img" src={VectorMail}></Img>
                  </div>
                  <div className="TeamSinglePageEmail">
                    {infoAboutUser.email}
                  </div>
                </div>
              </div>
              <NavLink to={LOGIN_ROUTE} className="TeamSinglePageEmailButton">
                GET AN APPOINTMENT
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
