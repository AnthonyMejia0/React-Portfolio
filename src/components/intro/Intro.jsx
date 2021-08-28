import './intro.scss'

function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="text-box">
                <h2>Hi, <br /> my name is <br /></h2>
                <h2 className="name">Anthony.</h2>
            </div>
            <div className="about-me">
                <ul>
                    <li>Programmer</li>
                    <li>Tech Enthusiast</li>
                    <li>Budding Web Developer</li>
                </ul>
            </div>
            <div className="skillset">
                <a href='#portfolio'>
                    <h3>Click to see my skillset</h3>
                </a>
            </div>
        </div>
    )
}

export default Intro
