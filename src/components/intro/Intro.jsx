import './intro.scss'
import BG from './laptop.jpg'

function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="imgContainer">
                <img src={BG} alt="laptop" />
            </div>
            <div className="text-box">
                <h2>Hi, <br /> my name is <br /></h2>
                <h2 className="name">Anthony.</h2>
            </div>
            <div className="skillset">
                <h3>Click to see my skillset</h3>
                <span>v</span>
            </div>
        </div>
    )
}

export default Intro
