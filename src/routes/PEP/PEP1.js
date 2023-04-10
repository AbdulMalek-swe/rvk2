import React from "react";
import "./PEP1.css";
import main from "./main.png";

function PEP1() {
  return (
    <div>
      <section className="main-card--cointainer910head">
      <div className="card-container910head">
      <div className="card910head ">
        <div className="PEP1head">Peace Education Program</div></div></div>
      </section>
      <section className="main-card--cointainer910">
        <div className="card-container910">
          <div className="card910 ">
            <div className="img910">
              <img src={main} alt="img" />
            </div>
          </div>
        </div>

        <div className="card-container910">
          <div className="card910 ">
            <div className="img91019">
            
The Peace Education Program (PEP) consists of 10 sessions, each focusing on a particular theme. These customized, interactive workshops are non-religious and non-sectarian. The content of each theme is based on excerpts from Prem Rawat’s international talks. The themes are Peace, Appreciation, Inner Strength, Self-Awareness, Clarity, Understanding, Dignity, Choice, Hope, and Contentment.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PEP1;
