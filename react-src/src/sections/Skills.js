import React from "react";
import Tool from "../components/Tool";
import Skill from "../components/Skill";

function Skills() {
  return (
    <>
      <div id="Skills">
        <div className="container">
          <h2>SKILLS</h2>
          <div className="skills-container">
            <Skill fa={"fab fa-accessible-icon"} name={"Accessibility"} />
            <Skill fa={"fab fa-edge"} name={"Cross-Browser"} />
            <Skill fa={"fas fa-project-diagram"} name={"MVC"} />
            <Skill fa={"fa fa-mobile-alt"} name={"Responsiveness"} />
            <Skill fa={"fa fa-cloud"} name={"REST API"} />
            <Skill fa={"fa fa-window-restore"} name={"Wireframing"} />
          </div>
          <div className="tools-container">
            <Tool fa={"fab fa-bootstrap"} name={"Bootstrap"} per={"80%"} />
            <Tool fa={"fab fa-css3"} name={"CSS"} per={"80%"} />
            <Tool fa={"fab fa-git"} name={"Git"} per={"70%"} />
            <Tool fa={"fab fa-html5"} name={"HTML"} per={"80%"} />
            <Tool fa={"fab fa-js"} name={"JavaScript"} per={"50%"} />
            <Tool img={"images/jquery.png"} name={"jQuery"} per={"70%"} />
            <Tool img={"images/mui.png"} name={"Material UI"} per={"30%"} />
            <Tool fa={"fab fa-node"} name={"Node.js"} per={"30%"} />
            <Tool img={"images/photoshop.png"} name={"Photoshop"} per={"70%"} />
            <Tool fa={"fab fa-react"} name={"ReactJS"} per={"40%"} />
            <Tool fa={"fab fa-sass"} name={"SASS"} per={"70%"} />
            <Tool img={"images/webpack.png"} name={"Webpack"} per={"40%"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
