import React from "react";
import "./info.scss";
import { FcAutomotive } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcLinux } from "react-icons/fc";
import { FcAlarmClock } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
function Info() {
  return (
    <section id="info">
      <div className="container">
        <div className="info">
          <h1>
            Our Services <FcIdea />
          </h1>
          <div className="boxes">
            <div className="box">
              <div className="icon">
                <FcAutomotive />
              </div>
              <h1>Equipment installation</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam beatae odit, numquam corrupti commodi quasi itaque et
                delectus
              </p>
            </div>
            <div className="box">
              <div className="icon">
                <FcGlobe />
              </div>
              <h1>Equipment installation</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam beatae odit, numquam corrupti commodi quasi itaque et
                delectus
              </p>
            </div>
            <div className="box">
              <div className="icon">
                <FcHome />
              </div>
              <h1>Equipment installation</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam beatae odit, numquam corrupti commodi quasi itaque et
                delectus
              </p>
            </div>
            <div className="box">
              <div className="icon">
                <FcLinux />
              </div>
              <h1>Equipment installation</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam beatae odit, numquam corrupti commodi quasi itaque et
                delectus
              </p>
            </div>
            <div className="box">
              <div className="icon">
                <FcAlarmClock />
              </div>
              <h1>Equipment installation</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam beatae odit, numquam corrupti commodi quasi itaque et
                delectus
              </p>
            </div>
          </div>
          <button>Read More</button>
        </div>
      </div>
    </section>
  );
}

export default Info;
