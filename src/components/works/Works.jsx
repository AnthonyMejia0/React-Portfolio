import { useEffect } from "react";
import { useState } from "react"
import ProjectPage from "./ProjectPage"
import WebProjectPage from "./WebProjectPage";
import "./works.scss"

function Works() {
    const [page, setPage] = useState("web");

    useEffect(() => {
      if (page === "web") {
        document.getElementById("web").style.border = `1px solid #4FB286`;
        document.getElementById("software").style.border = "none";
        console.log("This is the web section");
      }
      else if (page === "software") {
        document.getElementById("web").style.border = "none";
        document.getElementById("software").style.border = "1px solid #4FB286";
        console.log("This is the software section");
      }
      else {
        console.log("NO SECTION LOADED!");
      }
    }, [page]);

    return (
        <div className="works" id="works">
            <div className="work-header">
                <h1>My projects</h1>
            </div>

            <div className="tabs">
                <button id="web" onClick={() => setPage("web")} className="tab">Web</button>
                <button id="software" onClick={() => setPage("software")} className="tab">Software</button>
            </div>

            <div>
                {   
                    page === "web" ? <WebProjectPage /> :
                    page === "software" ? <ProjectPage /> : 
                    null
                }
            </div>
        </div>
    )
}

export default Works
