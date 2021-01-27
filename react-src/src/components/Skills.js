import React from "react";
import Card from "./Card";

function Skills() {
  return (
    <>
      <div id="Skills" className="skills-container container">
        <h2>SKILLS</h2>
        <div className="other-skills-container">
          <div className="other-skill">
            <div className="other-skill-logo">
              <i className="fab fa-accessible-icon" />
            </div>
            <span>Accessibility</span>
          </div>
          <div className="other-skill">
            <div className="other-skill-logo">
              <i className="fab fa-edge" />
            </div>
            <span>Cross-Browser</span>
          </div>
          <div className="other-skill">
            <div className="other-skill-logo">
              <i className="fas fa-project-diagram" />
            </div>
            <span>MVC</span>
          </div>
          <div className="other-skill">
            <div className="other-skill-logo">
              <i className="fa fa-mobile-alt" />
            </div>
            <span>Responsiveness</span>
          </div>
          <div className="other-skill">
            <div className="other-skill-logo">
              <i className="fa fa-cloud" />
            </div>
            <span>REST API</span>
          </div>
          <div className="other-skill">
            <div className="other-skill-logo">
              <i className="fa fa-window-restore" />
            </div>
            <span>Wireframing</span>
          </div>
        </div>
        <div className="cards-container">
          <Card
            logo={"fa"}
            fa={"fab fa-bootstrap"}
            name={"Bootstrap"}
            per={"80%"}
          />
          <Card logo={"fa"} fa={"fab fa-css3"} name={"CSS"} per={"80%"} />
          <Card logo={"fa"} fa={"fab fa-git"} name={"Git"} per={"70%"} />
          <Card logo={"fa"} fa={"fab fa-html5"} name={"HTML"} per={"80%"} />
          <Card logo={"fa"} fa={"fab fa-js"} name={"JavaScript"} per={"50%"} />
          <Card
            logo={"img"}
            img={"images/jquery.png"}
            name={"jQuery"}
            per={"60%"}
          />
          <Card
            logo={"img"}
            img={"images/material-ui.png"}
            name={"Material UI"}
            per={"30%"}
          />
          <Card logo={"fa"} fa={"fab fa-node"} name={"Node.js"} per={"10%"} />
          <Card
            logo={"img"}
            img={"images/photoshop.png"}
            name={"Photoshop"}
            per={"70%"}
          />
          <Card logo={"fa"} fa={"fab fa-react"} name={"ReactJS"} per={"40%"} />
          <Card logo={"fa"} fa={"fab fa-sass"} name={"SASS"} per={"70%"} />
          <Card
            logo={"img"}
            img={"images/webpack.png"}
            name={"Webpack"}
            per={"40%"}
          />
        </div>
      </div>
    </>
  );
}

export default Skills;
