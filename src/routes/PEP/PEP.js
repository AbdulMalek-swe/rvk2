import "./PEP.css";
import Map from "./Map.jpg";
import main from "./main.png";
import P1 from "./P1.png";
import P2 from "./P2.png";
import PEP1 from "./PEP1";
import PEP2 from "./PEP2";
import PEP3 from "./PEP3";

const First = () => {
  window.scrollTo(0,0)
  return (
    <div className="maincontmargin234" style={{paddingTop:"114px"}}>
      <div className="card-container_out234">
        <div className="card_out234 ">
          <div className="card-body234">
            <div>
              <h2 className="card-title_out234">
                Peace Education Program <br />
                <div className="card-description_out234">
                  <br />
                  Helping People Discover Their True Potential of Getting Peace{" "}
                </div>
              </h2>
            </div>
          </div>
        </div>
        <div className="break234"></div>
        <PEP1 />
        <div className="break234"></div>

        <div className="map234">
          <img src={Map} alt="img234" />
          <div className="maptext234">
            <p>
              The Prem Rawat Foundation (TPRF) provides access to the course
              materials to organizations and volunteers free of charge, making
              the Peace Education Program readily available to diverse
              populations in more than 80 countries and in 40 languages.
              <br />
              <span>
                Each workshop features video excerpts of renowned author Prem
                Rawat’s inspiring presentations on one of ten themes: Peace,
                Appreciation, Inner Strength, Self-awareness, Clarity,
                Understanding, Dignity, Choice, Hope, and Contentment.
              </span>
            </p>
          </div>
        </div>
        <div className="break234"></div>

        <PEP2 />
        <div className="break234"></div>
        <PEP3 />
      </div>
    </div>
  );
};

export default First;
