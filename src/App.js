import Header from "./components/header";
import Skills from "./components/skills";
import DisplayProj from "./components/project";
import Education from "./components/education";
import ReactGA from "react-ga4";


import "./styles/projdisplay.css"
import "./styles/page.css";
import "./styles/sidebarstyle.css"
import "./fonts.css";

ReactGA.initialize("G-MP70HJEMFZ");



function App() {



  return (
    <>


    <div className="App">


      <Header></Header>
      <Skills></Skills>
      <h4 className="focus">MEDIUM - BLOG</h4>
      <div id="mediumblogdiv"><iframe src='https://widgets.sociablekit.com/medium-publication-feed/iframe/25411138' frameborder='0' width='100%' height='1000'></iframe></div>
      <DisplayProj></DisplayProj>
      <Education></Education>
    </div>
    </>
  );
}

export default App;
