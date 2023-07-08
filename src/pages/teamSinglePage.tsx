import React, { useContext, useEffect, useState } from "react";

import "../styles/pageStyles/teamSinglePage.css";
import { Context } from "..";
import { info } from "console";

export default function TeamSinglePage() {
  const [infoAboutUser, setInfo] = useState([]);

  const { TeamSingleContext } = useContext(Context);

  // useEffect(() => {
  //   getInfo();
  // }, []);

  const getInfo = async (userId: any) => {
    try {
      const infoAboutUser = await TeamSingleContext.getInfoAboutUniqueUserById(
        userId
      );
      // console.log(infoAboutUser + "Page");
      // setInfo(infoAboutUser);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="TeamSinglePage">
      <h3>TeamSinglePage</h3>
      {/* <div>{infoAboutUser.map(() => {})}</div> */}
    </div>
  );
}
