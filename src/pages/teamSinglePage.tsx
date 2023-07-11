import React, { useContext, useEffect, useState } from "react";

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
      console.log(userObject);
      console.log(id);

      setInfo(userObject);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="TeamSinglePage">
      <h3>TeamSinglePage</h3>
      <div>{infoAboutUser.id}</div>
      <div>{infoAboutUser.userName}</div>
      {/* <div>
        {infoAboutUser.map((item: any) => (
          <div key={item.id}>{item.userName}</div>
        ))}
      </div> */}
    </div>
  );
}
