import ReactGA from "react-ga4";
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";

import "./styles/projdisplay.css"
import "./styles/page.css";
import "./styles/sidebarstyle.css"
import "./fonts.css";
import StationForSupplies from "./components/ecommerceproj";
import TitleName from "./components/titlename";
import AppInside from "./components/insdeapp";
import FourOhFour from "./components/fourohfour";

ReactGA.initialize("G-MP70HJEMFZ");



function App() {

  const [projpgdisplay, SetProjPgDisplay] = useState(false)


  return (
    <>





    <div className="App">
      <TitleName onClick={() => {
            SetProjPgDisplay(!projpgdisplay)
          }}></TitleName>
                 <Routes>
          <Route path="/" element={<AppInside />}/>
          <Route path="/ecommerceproj" element={<StationForSupplies />}/>
          <Route path="/" element={<AppInside />}/>
          <Route path="*" element={<FourOhFour />}/>
       </Routes>


    </div>

    </>
  );
}

export default App;
