import Header from "./components/header";
import Skills from "./components/skills";
import DisplayProj from "./components/project";
import Education from "./components/education";

import "./styles/projdisplay.css"
import "./styles/page.css";
import "./styles/sidebarstyle.css"
import "./fonts.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Skills></Skills>
      <DisplayProj></DisplayProj>
      <Education></Education>
    </div>
  );
}

export default App;
