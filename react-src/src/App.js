import { Fragment, React } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Banner from "./sections/Banner";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route
          render={() => (
            <Fragment>
              <Banner />
              <Skills />
              <About />
              <Experience />
              <Contact />
            </Fragment>
          )}
        />
      </Switch>
    </>
  );
}

export default App;
