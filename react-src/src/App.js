import { Fragment, React } from "react";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

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
