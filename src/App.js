import Header from "./components/header";
import Skills from "./components/skills";
import Display from "./components/displaywork";
import "./styles/page.css";
import "./fonts.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Skills></Skills>
      <Display></Display>
    </div>
  );
}

export default App;
