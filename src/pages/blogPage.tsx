import React from "react";
import { Img } from "react-image";

import "../styles/pageStyles/blogPage.css";

//@ts-ignore
import Photo7 from "../img/homePage/Photo7.jpg";
//@ts-ignore
import Photo8 from "../img/homePage/Photo8.jpg";
//@ts-ignore
import Photo9 from "../img/homePage/Photo9.jpg";

export default function BlogPage() {
  return (
    <div className="BlogPage">

      <div className="FirstBlock">
        <div className="HomePageContainer">
          <p className="FirstBlockSubtittle">GET IN TOUCH WITH US</p>
          <p className="FirstBlockTittle">Articles & News</p>
        </div>
      </div>


      <div className="HomePageContainer">
        <section className="GetInTouchBlock">
          <div className="ourBlog_text">
            <h4 className="ourBlog_tittle">Our Blog</h4>
            <h2 className="ourBlog_subtittle">Latest Updates</h2>
          </div>
          <div className="GetInTouchBlocks">
            <div className="ourBlock_1">
              <div className="ourBlockImg">
                <Img src={Photo7}></Img>
              </div>
              <div className="Block_1_Text ourBlockText">
                <h4 className="BlockText_ourBlog_text">
                  11TH AUGUST 2021 - BY PETER BERGSON
                </h4>
                <h3 className="BlockText_ourBlog_tittle ">
                  The energy efficiency of the hydrotherapy or swim
                </h3>
                <p className="BlockText_ourBlog_subtittle">
                  The point of using Lorem Ipsum hiter that using making it
                  look like others readable will get end.
                </p>
              </div>
            </div>

            <div className="ourBlock_2">
              <div className="BlockImg">
                <Img src={Photo8}></Img>
              </div>
              <div className="Block_2_Text ourBlockText">
                <h4 className="BlockText_ourBlog_text">
                  11TH AUGUST 2021 - BY PETER BERGSON
                </h4>

                <h3 className="BlockText_ourBlog_tittle">
                  Tips to improve your body via cleansing
                </h3>
                <p className="BlockText_ourBlog_subtittle">
                  The point of using Lorem Ipsum hiter that using making it
                  look like others readable will get end.
                </p>
              </div>
            </div>

            <div className="ourBlock_3">
              <div className="BlockImg">
                <Img src={Photo9}></Img>
              </div>
              <div className="Block_3_Text ourBlockText">
                <h4 className="BlockText_ourBlog_text">
                  11TH AUGUST 2021 - BY PETER BERGSON
                </h4>

                <h3 className="BlockText_ourBlog_tittle">
                  The best and perfect skincare strategy
                </h3>
                <p className="BlockText_ourBlog_subtittle">
                  The point of using Lorem Ipsum hiter that using making it
                  look like others readable will get end.
                </p>
              </div>
            </div>

            <div className="ourBlock_1">
              <div className="ourBlockImg">
                <Img src={Photo7}></Img>
              </div>
              <div className="Block_1_Text ourBlockText">
                <h4 className="BlockText_ourBlog_text">
                  11TH AUGUST 2021 - BY PETER BERGSON
                </h4>
                <h3 className="BlockText_ourBlog_tittle ">
                  Fell the natural reverse aging process
                </h3>
                <p className="BlockText_ourBlog_subtittle">
                  The point of using Lorem Ipsum hiter that using making it
                  look like others readable will get end.
                </p>
              </div>
            </div>

            <div className="ourBlock_1">
              <div className="ourBlockImg">
                <Img src={Photo7}></Img>
              </div>
              <div className="Block_1_Text ourBlockText">
                <h4 className="BlockText_ourBlog_text">
                  11TH AUGUST 2021 - BY PETER BERGSON
                </h4>
                <h3 className="BlockText_ourBlog_tittle ">
                  How to make the make-up stay last
                </h3>
                <p className="BlockText_ourBlog_subtittle">
                  The point of using Lorem Ipsum hiter that using making it
                  look like others readable will get end.
                </p>
              </div>
            </div>

            <div className="ourBlock_1">
              <div className="ourBlockImg">
                <Img src={Photo7}></Img>
              </div>
              <div className="Block_1_Text ourBlockText">
                <h4 className="BlockText_ourBlog_text">
                  11TH AUGUST 2021 - BY PETER BERGSON
                </h4>
                <h3 className="BlockText_ourBlog_tittle ">
                  The energy efficiency of the hydrotherapy or swim
                </h3>
                <p className="BlockText_ourBlog_subtittle">
                  The point of using Lorem Ipsum hiter that using making it
                  look like others readable will get end.
                </p>
              </div>
            </div>
          </div>
          <div className="ourBlockText_button">
            <button className="BlockText_button ourButton">READ MORE</button>
          </div>
        </section>
      </div>
    </div>
  );
}
