import './skills.scss'
import ProgressBar from "@ramonak/react-progress-bar"

function Skills({ skillTitle, exp }) {
    return (
        <div className="skill">
            <h1>
                {skillTitle}
            </h1>
            <ProgressBar 
                completed={exp} 
                bgColor={`#6F9DE0`} 
                baseBgColor={`#777`} 
                width={`25vw`}
                height={`15px`}
                isLabelVisible={false}
            />
            <h3>
                {exp}%
            </h3>
        </div>
    )
}

export default Skills
