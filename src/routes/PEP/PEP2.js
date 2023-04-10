import React from "react";
import "./PEP2.css";
import main from "./P1.png";

function PEP2() {
  return (
    <div>
      <section className="main-card--cointainer9101">
        <div className="card-container9101">
          <div className="card9101 ">
            <div className="img9101">
              <img src={main} alt="img" />
            </div>
          </div>
        </div>

        <div className="card-container9101">
          <div className="card9101 ">
            <div className="img91011">
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
      </section>
      <section className="main-card--cointainer910head01">
        <div className="card-container910head01">
          <div className="card910head01 ">
            <div className="PEP1head01">
              PEP 3: Designed to provide the maximum flexibility for PEP
              classes, PEP 3 consists of 10 DVDs with one theme per DVD. PEP 3
              contains the same 10 themes as PEP 1 and PEP 2. The handouts have
              been reduced to one page per class, and the Facilitator Handbook
              has been merged with the Facilitator Manual.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PEP2;
