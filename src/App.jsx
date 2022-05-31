import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import "./app.scss"


function App() {

  return (
    <div className="App">
      <div className="sections">
        <Intro />
        <About />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
