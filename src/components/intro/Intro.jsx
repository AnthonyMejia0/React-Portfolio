import './intro.scss'

function Intro() {
    return (
        <div className="intro" id="intro">
            
            <div className="bg"></div>
            <div className="text-box">
                <h2>Hi, <br /> my name is <br /></h2>
                <h2 className="name">Anthony Mejia.</h2>
                <div className="about-me">
                    <ul>
                        <li>Programmer</li>
                        <li>Tech Enthusiast</li>
                        <li>Budding Web Developer</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Intro
