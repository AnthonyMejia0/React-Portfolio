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
                    <p>Over the past several years I've now had the oppurtunity to work on projects in several fields of code including, Embedded Systems, Databases, Gaming, and Machine Learning, and have added several languages to my skillset in the proccess.  </p>
                    <p>Currently I am exploring Full-Stack Web Development by taking courses and building web clones. My latest project is a fully responsive <span className="spotify">Spotify Controller</span> using Next.js, Tailwind CSS, NextAuth and the Spotify API. Check it out <a className="link spotify" href="https://spotify-clone-xi-five.vercel.app/" target="_blank" rel="noreferrer">here.</a></p>
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