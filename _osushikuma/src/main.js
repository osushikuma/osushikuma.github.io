import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faBitbucket,
  faBootstrap,
  faConfluence,
  faCss3Alt,
  faFigma,
  faGit,
  faGithubAlt,
  faHtml5,
  faInstagram,
  faJira,
  faJs,
  faLess,
  faLinkedin,
  faNodeJs,
  faNpm,
  faReact,
  faSass,
  faSlack,
  faStackOverflow,
  faTrello,
  faTwitter,
  faVuejs,
  faYarn,
} from "@fortawesome/free-brands-svg-icons";

import {
  faBolt,
  faGlobe,
  faLaptopCode,
  faLightbulb,
  faMagnifyingGlass,
  faMobileScreenButton,
  faPersonRays,
  faQuestion,
  faScrewdriverWrench,
  faTable,
  faUsers,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faBitbucket,
  faBootstrap,
  faConfluence,
  faCss3Alt,
  faFigma,
  faGit,
  faGithubAlt,
  faHtml5,
  faInstagram,
  faJira,
  faJs,
  faLess,
  faLinkedin,
  faNodeJs,
  faNpm,
  faReact,
  faSass,
  faSlack,
  faStackOverflow,
  faTrello,
  faTwitter,
  faVuejs,
  faYarn,
  faBolt,
  faGlobe,
  faLaptopCode,
  faLightbulb,
  faMagnifyingGlass,
  faMobileScreenButton,
  faPersonRays,
  faQuestion,
  faScrewdriverWrench,
  faTable,
  faUsers,
  faWindowRestore
);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
