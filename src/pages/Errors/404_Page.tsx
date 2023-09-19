import React from "react";
import "../../styles/pageStyles/Errors/404_Page.css";
import "../../styles/adaptive/Errors/404_pageAdaptive.css"

export default function Not_Found() {
  return (
    <div className="Not_Found">
      <div className="FirstBlock">
        <div className="HomePageContainer">
          <p className="FirstBlockSubtittle">Page Not Found</p>
          <p className="FirstBlockTittle">
            404 Error Page
          </p>
        </div>
      </div>

      <section className="notFound">
        <div className="HomePageContainer">
          <div className="notFoundBlock">
            <div className="notFoundBlockTexts">
              <h2 className="notFoundBlockTittle">
                404
              </h2>
              <h2 className="notFoundBlockSubtittle">
                Page not Found!!!
              </h2>
              <p className="notFoundBlockTextsText">
                The page you are looking for doesn't exist. Please try searching for some other page, or return to the website's homepage to find what you're looking for.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
