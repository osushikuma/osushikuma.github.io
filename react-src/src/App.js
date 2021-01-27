import { Fragment, React } from "react";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
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
            </Fragment>
          )}
        />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
