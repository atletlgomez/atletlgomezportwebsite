import Header from "./components/header";
import Skills from "./components/skills";
import DisplayProj from "./components/project";
import Education from "./components/education";
import ReactGA from "react-ga4";
import useEffect from "react";


import "./styles/projdisplay.css"
import "./styles/page.css";
import "./styles/sidebarstyle.css"
import "./fonts.css";

ReactGA.initialize("G-MP70HJEMFZ");



function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, [])
  return (
    <>


    <div className="App">


      <Header></Header>
      <Skills></Skills>
      <DisplayProj></DisplayProj>
      <Education></Education>
    </div>
    </>
  );
}

export default App;
