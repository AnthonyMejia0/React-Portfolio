import './intro.scss'
import BG from './laptop.jpg'

function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="imgContainer">
                <img src={BG} alt="laptop" />
            </div>
            <div className="text-box">
                <h2>Hi, <br /> my name is</h2>
                <h2 className="name">Anthony Mejia.</h2>
            </div>
        </div>
    )
}

export default Intro
