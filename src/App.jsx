import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import ScrollToTop from "react-scroll-to-top"
import "./app.scss"
import MobileMenu from "./components/menu/Menu"

function App() {
  return (
    <div className="App">
      <div className="scroll">
        <ScrollToTop smooth style={{}} color="#4FB286"/>
      </div>
      <Intro />
      <About />
      <Works />
      <Contact />
      <MobileMenu />
    </div>
  );
}

export default App;
