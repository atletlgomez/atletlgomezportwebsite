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
    <div className="App">
        <Helmet>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MP70HJEMFZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-MP70HJEMFZ');
</script>
        </Helmet>

      <Header></Header>
      <Skills></Skills>
      <DisplayProj></DisplayProj>
      <Education></Education>
    </div>
  );
}

export default App;
