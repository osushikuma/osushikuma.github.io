import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="main-container">
        <div className="container">
          <h1>
            Kamusta, ako si <span>Yumi</span>. <br />
            I'm a Front-end Web Developer.
          </h1>
          <img src="images/sushi_dog.png" alt="Sushi" />
        </div>
      </div>
      <div className="skills-container container">
        <h2>SKILLS</h2>
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
        <span>
          <i className="fa fa-circle" />
          <i className="fa fa-circle" />
          <i className="fa fa-circle" />
        </span>
        <div className="other-skills-container">
          <div className="other-skill">
            <div className="other-skill-logo">
              <i className="fab fa-accessible-icon" />
            </div>
            <span>Accessibility / WAI-ARIA</span>
          </div>
          <div className="other-skill">
            <div className="other-skill-logo">
              <i className="fab fa-edge" />
            </div>
            <span>Cross-Browser Development</span>
          </div>
          <div className="other-skill">
            <div className="other-skill-logo">
              <i className="fas fa-project-diagram" />
            </div>
            <span>MVC Architecture</span>
          </div>
          <div className="other-skill">
            <div className="other-skill-logo">
              <i className="fa fa-mobile-alt" />
            </div>
            <span>Responsive / Mobile Design</span>
          </div>
          <div className="other-skill">
            <div className="other-skill-logo">
              <i className="fa fa-cloud" />
            </div>
            <span>RESTful Services / APIs</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
