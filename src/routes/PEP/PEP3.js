import React from "react";
import "./PEP3.css";
import main from "./P2.png";

function PEP3() {
  return (
    <div>
      <section className="main-card--cointainer91012">
        <div className="card-container91012">
          <div className="card91012 ">

          <div className="img910112">
              There are currently 3 stand-alone programs, and you can choose
              which course to start with. They are not sequential. Here are the
              unique aspects of each program: PEP 1: Each DVD / session is 1
              hour in length. It includes short and longer videos and five
              animated shorts. There are two Reflection times included in each
              session, which can be used at the facilitator's discretion. PEP 2:
              Each session is approximately 35 minutes in length, and there are
              two sessions on each DVD. PEP 2 is suitable for audiences of all
              ages, including young people. This program is ideal for people who
              have difficulty concentrating for longer periods of time, such as
              the ill, elderly, and those in a rehabilitation center. There are
              two designated reflection times per session. PEP 2 also includes
              some media interviews with Prem Rawat.
            </div>

          </div>
        </div>

        <div className="card-container910122">
          <div className="card91012 ">
          <div className="img91012">
          <img src={main} alt="img" />
        </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PEP3;
