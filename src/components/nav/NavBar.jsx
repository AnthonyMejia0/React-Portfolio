import './navbar.scss'
import logo from './Portfolio_Logo_Blue.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

function NavBar() {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="logocontainer">
                        <img className="logo" src={logo} alt="My Personal logo" />
                    </div>
                </div>
                <div className="middle">
                    <div className="navlink">
                        <a className="link" href="#intro">Home</a>
                    </div>
                    <div className="navlink">
                        <a className="link" href="#about">About Me</a>
                    </div>
                    <div className="navlink">
                        <a className="link" href="#works">Projects</a>
                    </div>
                    <div className="navlink">
                        <a className="link" href="#contact">Contact</a>
                    </div>  
                </div>
                <div className="right">
                    <div className="itemContainer">
                        <a className="github" href="https://github.com/AnthonyMejia0" target="_blank" rel="noreferrer">
                            <GitHubIcon className="icon" id="social" />
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a className="linkedin" href="https://www.linkedin.com/in/anthony-mejia-84169b172" target="_blank" rel="noreferrer">
                            <LinkedInIcon className="icon" id="social" />
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a className="youtube" href="https://www.youtube.com/channel/UCqfTZe21vlUhOUqeR59bxcQ" target="_blank" rel="noreferrer">
                            <YouTubeIcon className="icon" id="social" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
