import Skills from '../skills/Skills'
import './About.scss'

function About() {
    return (
        <div className="about" id="about">
            <div className="text-box">
                <div className="about-box">
                    <div className='title'>About Me.</div>
                </div>
                <div className="headline">
                    <h3>Hey, i'm Anthony. <br /> I'm an aspiring Software/Web Developer who enjoys learning, experimenting, and trying new things. I am currently seeking employment opportunities where I can put my aquired skills to use.</h3>
                </div>
                <div className="detailed">
                    <p>I'm 26 years old and recently graduated from UC Riverside with a Bachelor's degree in Computer Science.</p>
                    <p>Over the past several years I've now had the oppurtunity to work work on projects in several fields of code including, Embedded Systems, Databases, Gaming, and Machine Learning, and have added several languages to my skillset in the proccess.  </p>
                    <p>Currently I am working on building 2D games using the SDL2 game library in C++ by first constructing a reusable framework to make future projects simpler. My goal for this project is to continue learning while simultaneously practicing the techniques I've learned over the years.</p>
                </div>
                <div className="skills-title-box">
                    <div className="title">My Skills</div>
                </div>
                <div className="skills-box">
                    <Skills />
                </div>
            </div>
        </div>
    )
}

export default About