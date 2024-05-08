import Header from "./components/header";
import Skills from "./components/skills";
import DisplayProj from "./components/project";
import Education from "./components/education";
import { Helmet } from "react-helmet";

import "./styles/projdisplay.css"
import "./styles/page.css";
import "./styles/sidebarstyle.css"
import "./fonts.css";

function App() {
  return (
    <>
    <Helmet>

    <script async src="https://www.googletagmanager.com/gtag/js?id=G-MP70HJEMFZ"></script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-MP70HJEMFZ');
    </Helmet>

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
