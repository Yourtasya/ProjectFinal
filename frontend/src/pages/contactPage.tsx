import React, { useState } from "react";

import { Img } from "react-image";

//@ts-ignore
import Contact from "../img/contactPage/GetInTouch.png";

//@ts-ignore
import IconContact1 from "../icons/contactPageSvg/Icon1.svg";

//@ts-ignore
import IconContact2 from "../icons/contactPageSvg/Icon2.svg";

//@ts-ignore
import IconContact3 from "../icons/contactPageSvg/Icon3.svg";

import Model from "../components/Model";
import "../styles/pageStyles/contactPage.css";
import "../styles/adaptive/contactPageAdaptive.css"

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [anyNote, setAnyNote] = useState("");

  const [modelActive, setModelActive] = useState(false);
  const [modelErrorActive, setModelErrorActive] = useState(false)

  const handleSubmite = (e: any) => {
    e.preventDefault();
    if(!name || !email || !phone || !service || !anyNote) {

      setModelErrorActive(true)
    }
    else {
      setModelActive(true);
    }
  };

  return (
    <div className="ContactPage">
      <div className="FirstBlock">
        <div className="HomePageContainer">
          {/* <p className="FirstBlockSubtittle">GET IN TOUCH WITH US</p> */}
          <p className="FirstBlockTittle">
          Мы готовы помочь вам
            <br></br>в режиме 24x7
          </p>
        </div>
      </div>

      <section className="getInTouch">
        <div className="HomePageContainer">
          <div className="getInTouchBlock">
            <Img className="getInTouchBlock_img1" src={Contact}></Img>
            <div className="getInTouchBlock_texts">
              <h4 className="getInTouchBlock_tittle">Связаться с нами</h4>
              <h2 className="getInTouchBlock_subtittle">
              Ваше удовольствие - наша забота
              </h2>
              <p className="getInTouchBlock_text .getInTouchBlock_text1">
              Наша команда стремится быть вашими надежными помощниками в достижении благополучия и релаксации. Мы всегда
рады быть рядом, готовы помочь вам почувствовать себя лучше и насладиться моментом заботы о себе.
              </p>

              <div className="getInToucflatRight">
                <div className="getInToucVisit">
                  <Img className="getInTouchBlock_img" src={IconContact1}></Img>

                  <div className="flatRight_mail">
                    <p className="flatRight_mailTittle getInToucDropTittle">
                      Visit Us :
                    </p>
                    <p className="flatRight_mailSubittle getInToucDropSubtittle">
                      NO.09a, Downtown, SAN DIEAGO, USA
                    </p>
                  </div>
                </div>

                <div className="getInToucDrop">
                  <Img className="getInTouchBlock_img" src={IconContact2}></Img>

                  <div className="flatRight_call">
                    <p className="flatRight_callTittle getInToucDropTittle">
                      Call Us :
                    </p>
                    <p className="flatRight_callSubittle getInToucDropSubtittle">
                      support@beautyness.com
                    </p>
                  </div>
                </div>

                <div className="getInToucVisitCall">
                  <Img className="getInTouchBlock_img" src={IconContact3}></Img>

                  <div className="flatRight_call">
                    <p className="flatRight_callTittle getInToucDropTittle">
                      CALL US :
                    </p>
                    <p className="flatRight_callSubittle getInToucDropSubtittle">
                      Call: 1-800-123-9999
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="scheduleYourPresence">
        <div className="HomePageContainer">
          <div className="FirstBlockYourPresence">
            <p className="FirstBlockSubtittleYourPresence">
              SCHEDULE YOUR PRESENCE
            </p>
            <p className="FirstBlockTittleYourPresence ">Make an Appointment</p>
            <p className="FirstBlockText FirstBlockTextYourPresence">
              There are many variations of passages of Lorem Ipsum available,
              but the <br></br> majority have suffered alteration in some form.
            </p>
          </div>
          <div className="scheduleYourPresenceForm">
            <div className="scheduleYourPresenceContainer">
              <div className="scheduleYourPresence_form">
                <div className="flatLeft_formsYourPresence form">
                  <form onSubmit={handleSubmite} className="flatLeft_form">
                    <div className="wrapper">
                      <div className="iconName"></div>
                      <input
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        className="scheduleYourInput"
                      ></input>
                    </div>
                    <div className="wrapper">
                      <div className="iconEmail"></div>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="scheduleYourInput"
                      ></input>
                    </div>
                    <div className="wrapper">
                      <div className="iconPhone"></div>
                      <input
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone"
                        className="scheduleYourInput"
                      ></input>
                    </div>
                    <div className="wrapper">
                      <div className="iconService"></div>
                      <input
                        onChange={(e) => setService(e.target.value)}
                        placeholder="Service You Need"
                        className="scheduleYourInput"
                      ></input>
                    </div>
                    <div className="wrapper">
                      <div className="iconAnyNote"></div>
                      <textarea
                        onChange={(e) => setAnyNote(e.target.value)}
                        placeholder="Any Note For Us"
                        className="textarea note"
                      ></textarea>
                    </div>

                    <button className="formButton scheduleformButton">
                      Make An Appointment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Model active={modelActive} setActive={setModelActive}>
        {name}
        <br />
        {email}
        <br />
        {phone}
        <br />
        {service}
        <br />
        {anyNote}
        <p className="TextOnModelFormTrue">Ваше сообщение успешно отрпавлено!</p>
      </Model>

      <Model active={modelErrorActive} setActive={setModelErrorActive}>
      {name ? !name : `Поле "Name" не заполнено!`}
        <br />
        {email ? !email : `Поле "Email" не заполнено!`}
        <br />
        {phone ? !phone : `Поле "Phone" не заполнено!`}
        <br />
        {service ? !service : `Поле "Service" не заполнено!`}
        <br />
        {anyNote  ? !anyNote : `Поле "Any Note For Us" не заполнено!`}
        <p className="TextOnModelFormError">Вы заполнили не все поля!</p>
      </Model>
    </div>
  );
}
