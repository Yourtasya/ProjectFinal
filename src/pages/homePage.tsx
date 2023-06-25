import React from "react";

export default function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomePageContainer">
        <section className="HomePageBody Home">
          <div className="HomeText">
            <h3 className="HomeText_stock">Welcome to Beautyness!!!</h3>
            <h1 className="HomeText_tittle">Beauty is power a smile is its sword.</h1>
            <p className="HomeText_subtittle">There are many variation of passages are Ipsum available, majority have suffered alteration in some form.</p>
            <button className="HomeText_ButtonReservation">Make a reservation</button>
          </div>
        </section>

        <section className="HomePageProcedures Block">
          <div className="Block_1">
            <div className="Block_1_Text BlockText">
              <h3 className="BlockText_title">Spa & Massage</h3>
              <p className="BlockText_subtittle">If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.</p>
              <button className="BlockText_button">READ MORE</button>
            </div>
          </div>
          <div className="Block_2">
            <div className="Block_2_Text BlockText">
              <h3 className="BlockText_title">Hair & Beauty</h3>
              <p className="BlockText_subtittle">If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.</p>
              <button className="BlockText_button">READ MORE</button>
            </div>
          </div>

          <div className="Block_3">
            <div className="Block_3_Text BlockText">
              <h2 className="BlockText_title">Body Treatments</h2>
              <p className="BlockText_subtittle">If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.</p>
              <button className="BlockText_button">READ MORE</button>
            </div>
          </div>
        </section>

        <section className="HomePageAboutUs AboutUs">
          <div className="AboutUsBlock">
            <div className="AboutUsImg">

            </div>
            <div className="AboutUs_leftBlock leftBlock">
              <div className="leftBlock_top">
                <h3 className="leftBlock_text"></h3>
                <h2 className="leftBlock_tittle"></h2>
                
                <div className="leftBlock_cards">
                  <div className="leftBlock_card">
                    <h3 className="leftBlock_cardTittle">Beauty Experts</h3>
                  </div>

                  <div className="leftBlock_card">
                    <h3 className="leftBlock_cardTittle">Great Services</h3>
                  </div>

                  <div className="leftBlock_card">
                    <h3 className="leftBlock_cardTittle">100% Genuine</h3>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}
