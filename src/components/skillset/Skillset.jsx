import './skillset.scss'
import Skills from './Skills'

function Skillset() {
    return (
        <div className="skillset" id="skillset">
            <div className="title">
                <span>My Skills</span>
                <span>Experience / Comfort</span>
            </div>
            <div className="skill-list">
                <div className="software">
                    <Skills skillTitle='C++' exp='90' />
                    <Skills skillTitle='C' exp='75' />
                    <Skills skillTitle='C#' exp='60' />
                    <Skills skillTitle='Python' exp='70' />
                </div>
                <div className="web">
                    <Skills skillTitle='HTML' exp='80' />
                    <Skills skillTitle='CSS' exp='80' />
                    <Skills skillTitle='SASS' exp='55' />
                    <Skills skillTitle='REACT' exp='35' />
                </div>
            </div>
        </div>
    )
}

export default Skillset