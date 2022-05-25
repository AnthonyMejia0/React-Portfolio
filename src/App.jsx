import Intro from "./components/intro/Intro"
import Skillset from "./components/skillset/Skillset"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import "./app.scss"

function App() {
  return (
    <div className="App">
      <div className="sections">
        <Intro />
        <Skillset />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
