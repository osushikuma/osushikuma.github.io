import React from "react";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <div className="container">
        <h2>ABOUT</h2>
        <div className="about-line">
          <img src="images/about.png" alt="Me" width="150px" />
          <h3>Inspiring full-stack, improving one at a time.</h3>
          <p>
            Started my career as a front-end web developer during student
            internship back in college. Shifted my career to application
            configuration analyst where it didn't only tested my skills as a web
            developer but also communication and problem-solving skills. After
            one year of being an analyst, I went back to being front-end web
            developer in Software Developer title. As I indulge myself with
            helping the back-end support, I decided to take my career to be a
            full-stack developer.
          </p>
        </div>
        <h2>EXPERIENCE</h2>
        <div className="about-line">
          <div className="company">
            <div className="comp-logo">
              <img src="images/linkage.png" alt="Linkage Web Development" />
            </div>
            <div className="details">
              <p>Apr 2014 - Jul 2014</p>
              <p>Student Intern</p>
              <p>
                <a rel="noreferrer" href="https://linkage.ph/" target="_blank">
                  Linkage Web Development
                </a>
              </p>
              <p>3 First Rd Quezon Hill, Baguio City, Benguet</p>
            </div>
          </div>
          <p>
            Web construction using HTML5, CSS3, jQuery, Wordpress, WooThemes and
            LESS SCSS from a given web design. Used Adobe Photoshop to get the
            design, photos and color schemes for the website to be developed.
            Smartphone and mobile compatibility or responsiveness design using
            Bootstrap and other jQuery plugins.
          </p>
          <span>Other tools used:</span>
          <ul className="tools">
            <li>
              <i className="fab fa-less" />
            </li>
            <li>
              <img src="images/woothemes.png" alt="WooThemes" />
            </li>
            <li>
              <i className="fab fa-wordpress" />
            </li>
          </ul>
        </div>
        <div className="about-line">
          <div className="company">
            <div className="comp-logo">
              <img src="images/pcm.png" alt="PCM BPO LLC" />
            </div>
            <div className="details">
              <p>Mar 2016 - Jul 2017</p>
              <p>Associate Front End Web Developer</p>
              <p>
                <a
                  rel="noreferrer"
                  href="https://www.pcm.com.ph/"
                  target="_blank"
                >
                  PCM BPO LLC
                </a>
              </p>
              <p>
                2/F EDSA Central Pavilion Bldg, EDSA, corner United Street,
                Mandaluyong City, Metro Manila
              </p>
            </div>
          </div>
          <p>
            Technical subject matter expert for front-end development and
            improvements. Work with business teams to understand requirements
            for new development and support related changes by creating web
            mock-ups and functional HTML models. Web design implementation and
            maintaining eCommerce related components. Provide accurate timing
            estimates for work based on written or verbal front-end fixes or
            enhancements or projects. Maintain brand standards and follow the
            corporate style guide.
          </p>
          <span>Other tools used:</span>
          <ul className="tools">
            <li>
              <img src="images/bitbucket.png" alt="Bitbucket" />
            </li>
            <li>
              <img src="images/data_maps.png" alt="DataMaps" />
            </li>
            <li>
              <img src="images/slack.png" alt="Slack" />
            </li>
            <li>
              <img src="images/tooltwist.png" alt="ToolTwist" />
            </li>
            <li>
              <img src="images/trello.png" alt="Trello" />
            </li>
          </ul>
        </div>
        <div className="about-line">
          <div className="company">
            <div className="comp-logo">
              <img src="images/wtw.png" alt="Willis Towers Watson" />
            </div>
            <div className="details">
              <p>Jul 2017 - Oct 2018</p>
              <p>Application Configuration Analyst</p>
              <p>
                <a
                  rel="noreferrer"
                  href="https://www.willistowerswatson.com/en-PH"
                  target="_blank"
                >
                  Wilis Towers Watson
                </a>
              </p>
              <p>
                10/F Bonifacio One Technology Tower, Bonifacio Global City,
                Taguig City, Metro Manila
              </p>
            </div>
          </div>
          <p>
            Review the technical specifications that support the desired
            functionality within an application. Review, validate, format and
            upload configuration-related data provided by client. Apply the
            approved look and feel identified in requirements. Conduct basic
            application testing to ensure usability and adherence to technical
            specifications, desired functionality and defined aesthetic
            properties; consistently log and report errors in a timely manner.
            Launch applications to defined client distribution lists; generate
            and validate pre-defined reports as needed. Work with the Senior
            Analyst, Project Coordinator, Industry Coordinator and/or Project
            Manager to analyze and resolve configuration issues and answer
            client’s concern about the application. Use case management tool and
            standardized workflow to share work with other team members and
            document interim work status.
          </p>
          <span>Other tools used:</span>
          <ul className="tools">
            <li>
              <img src="images/confirmit.png" alt="Confirmit" />
            </li>
            <li>
              <img src="images/jira.png" alt="Jira" />
            </li>
            <li>
              <img src="images/ms-access.png" alt="MS Access" />
            </li>
            <li>
              <img src="images/ms-excel.png" alt="MS Excel" />
            </li>
          </ul>
        </div>
        <div className="about-line">
          <div className="company">
            <div className="comp-logo">
              <img
                src="images/ezlife.png"
                alt="EZLife Software Solutions Inc."
              />
            </div>
            <div className="details">
              <p>Nov 2018 - Jan 2021</p>
              <p>Software Developer</p>
              <p>
                <a
                  rel="noreferrer"
                  href="https://www.ezlifesoftwaresolutions.com/"
                  target="_blank"
                >
                  EZlife Software Solutions Inc.
                </a>
              </p>
              <p>888 Cayetano Ave, C5 Ext., Taguig City, Philippines</p>
            </div>
          </div>
          <p>
            Developed and supported existing HR management system software using
            optimal and efficient technologies, frameworks, and patterns
            including Bootstrap, jQuery, SASS and selectize.js. Used Jira and
            Confluence for given issues, new features and wireframes to design
            and develop into a new page, component or function. Mainly worked in
            front-end but learnt how to support on back-end with C# and MS SQL.
            Helped the advertising team to go to clients to perform demo of the
            company's product. Almost fully-integrated the application from
            ASP.NET-C#-jQuery to ASP.NET-C#-React but got postponed.
          </p>
          <span>Other tools used:</span>
          <ul className="tools">
            <li>
              <img src="images/asp.net-mvc.png" alt="ASP.NET MVC" />
            </li>
            <li>
              <img src="images/bitbucket.png" alt="Bitbucket" />
            </li>
            <li>
              <img src="images/c-sharp.png" alt="C-Sharp" />
            </li>
            <li>
              <img src="images/confluence.png" alt="Confluence" />
            </li>
            <li>
              <img src="images/jira.png" alt="Jira" />
            </li>
            <li>
              <img src="images/ms-sql-server.png" alt="MS SQL Server" />
            </li>
            <li>
              <img src="images/selectizejs.png" alt="selectize.js" />
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
