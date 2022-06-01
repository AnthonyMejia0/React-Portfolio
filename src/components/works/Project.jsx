import TerminalIcon from '@mui/icons-material/Terminal';
import "./project.scss"

function Project({title, description, languages, icons}) {
  return (
    <div className="project">
        <div className="header">
            <TerminalIcon className="icon" />
            <div>{icons}</div>
        </div>
        <div className="title">
            {title}
        </div>
        <div className="desc">
            {description}
        </div>
        <div className="lang">
            {languages}
        </div>
    </div>
  )
}

export default Project