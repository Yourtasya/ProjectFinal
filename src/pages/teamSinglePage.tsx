import React, { useContext, useEffect, useState } from "react";
import { Img } from "react-image";
import "../styles/pageStyles/teamSinglePage.css";
import { Context } from "..";
import { useParams } from "react-router-dom";

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
      <h3>TeamSinglePage</h3>
      <div>{infoAboutUser.userName}</div>
      <Img src={infoAboutUser.img}></Img>
      <div>{infoAboutUser.email}</div>
      <div>{infoAboutUser.phone}</div>
      <div>{infoAboutUser.text}</div>
    </div>
  );
}
