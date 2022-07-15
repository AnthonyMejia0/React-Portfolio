import Project from "./Project";
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./projectpage.scss";

function ProjectPage() {
  return (
    <div className="projects">
        <Project 
            title="Delve The Dungeon"
            description = "My UCR senior project. A 2D Deck building game built with Unity game engine. Designed and built over the course of 10 weeks and managed using the Scrum methodology."
            languages = {
                <ul>
                    <li>Unity</li>
                    <li>C#</li>
                </ul>
            }
            icons = {[
                <a href="https://youtu.be/eYuwrdHKdsc" target="_blank" rel="noreferrer">
                    <YouTubeIcon className="icons"/>
                </a>
            ]}  
        />

        <Project 
            title="Airline Database Manager"
            description = "Database Administration Project. Program to create, manage, and modify flight plans as well as passenger information for each flight."
            languages = {
                <ul>
                    <li>PostgreSQL</li>
                    <li>Java</li>
                </ul>
            }
            icons = {[
                <a href="https://github.com/AnthonyMejia0/CS166-Final-Project" target="_blank" rel="noreferrer">
                    <GitHubIcon className="icons"/>
                </a>
            ]}  
        />

        <Project 
            title="Accident Severity Prediction"
            description = "Machine learning project to predict the severity of car accidents. Program used existing accident reports and predicted its severity based on details such as, weather, road conditions, passengers, and vehicle type."
            languages = {
                <ul>
                    <li>Python</li>
                    <li>Pandas</li>
                    <li>Scikit Learn</li>
                </ul>
            }
            icons = {[
                <a href="https://github.com/AnthonyMejia0/CS170-ML-Project" target="_blank" rel="noreferrer">
                    <GitHubIcon className="icons"/>
                </a>
            ]}  
        />

        <Project 
            title="Embedded Snake Game"
            description = "An embedded systems project recreating the classic Snake Game on hardware. Project uses an LED Matrix, LCD Display, and a Joystick to display and play the game."
            languages = {
                <ul>
                    <li>Embedded C</li>
                    <li>ATmega1284P-PU</li>
                </ul>
            }
            icons = {[
                <a href="https://github.com/AnthonyMejia0/CS120B-SnakeGame" target="_blank" rel="noreferrer">
                    <GitHubIcon className="icons" />
                </a>,
                <a href="https://www.youtube.com/watch?v=iAvEMSA0AVU" target="_blank" rel="noreferrer">
                    <YouTubeIcon className="icons" />
                </a>
            ]}  
        />

        <Project 
            title="Raspberry Pi RFID Door Lock"
            description = "An embedded systems project representing a door locking mechanism using an RFID scanner, keycards, keypad, and a servo motor to simulate locking and unlocking. Keycard info and password are also modifiable and removable."
            languages = {
                <ul>
                    <li>Embedded C</li>
                    <li>ATmega1284P-PU</li>
                </ul>
            }
            icons = {[
                <a href="https://github.com/AnthonyMejia0/CS122A-Final-Project" target="_blank" rel="noreferrer">
                    <GitHubIcon className="icons" />
                </a>,
                <a href="https://www.youtube.com/watch?v=6YsKKifXEaM" target="_blank" rel="noreferrer">
                    <YouTubeIcon className="icons" />
                </a>
            ]}  
        />


        <Project 
            title="Ray Tracer"
            description = "Ray Tracing project which take predefined image specifications and applies ambient, diffuse, and specular lighting as well as shadows and reflection. Reflection recursion is modifiable to allow for a greater or lesser effect."
            languages = {
                <ul>
                    <li>C++</li>
                </ul>
            }
            icons = {[
                <a href="https://github.com/AnthonyMejia0/CS130-Final-Project" target="_blank" rel="noreferrer">
                    <GitHubIcon className="icons" />
                </a>
            ]}  
        />
    </div>
  )
}

export default ProjectPage