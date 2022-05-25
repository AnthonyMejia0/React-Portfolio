import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import "./app.scss"


function App() {

  return (
    <div className="App">
      <div className="sections">
        <Intro />
        <About />
      </div>
    </div>
  );
}

export default App;
