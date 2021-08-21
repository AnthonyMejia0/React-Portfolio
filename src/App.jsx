import NavBar from "./components/nav/NavBar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";


function App() {
const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <header>
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      </header>
        
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </div>


    </div>
  );
}

export default App;
