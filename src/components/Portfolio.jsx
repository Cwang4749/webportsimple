import React, { useState, useRef, useEffect } from "react";
import Contact from './Contact.jsx'

import  PortData from "./data/PortfolioData.js";

function Portfolio() {
    const [expanded, set_expanded] = useState(false);
    const [proj_index, set_proj_index] = useState(0);

    function CurrExpanded(projectIndex) {
        return expanded && projectIndex === proj_index;
    }

    const targetRef = useRef(null);
    useEffect(() => {
        const options = {
            root: null,
            threshold: 0.2,
            rootMargin: '0px'
        }
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setTimeout(() => {
                if(document.getElementById("port") != null) {
                    if(entry.isIntersecting) {
                        document.getElementById("port").style.textDecoration = "underline";
                    }
                    else {
                        document.getElementById("port").style.textDecoration = "none";
                    }
                }
            }, 10);
        },options)
        observer.observe(targetRef.current);
    }, [])

    return(
        <div className="PortfolioPage" id="portfoliopage" ref={targetRef}>

            {/* <video
                loading="lazy" src={fireworks} className="fireworks"
                autoPlay loop muted
            /> */}

            <div>
            {PortData.map((project, index) => {
                const proj_ref = React.createRef();

                function ExpandProj(projectIndex) {
                    if(projectIndex === proj_index) {
                        set_expanded(!expanded);
                        proj_ref.current.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                    }
                    else {
                        set_expanded(true);
                        set_proj_index(projectIndex);
                    }
                    
                }

                return(
                    <div key={index} style={{justifyContent: "center", display: "flex"}}>
                        <div key={index} ref={proj_ref} className={CurrExpanded(index) ? "projects_expanded" : "projects"} onClick={() => ExpandProj(index)}>
                            <p id={CurrExpanded(index) ? "projectname_expanded" : "projectname"}>{project.projectName}</p>
                            {CurrExpanded(index) ? 
                            <div className="expandedcontainer">
                                <p> {project.description} </p>
                                <a className="projectlink" 
                                    href={'https://calvin-wang.web.app/Portfolio/' + project.projectName.replaceAll(" ", "-")} target="_blank" rel="noreferrer"
                                >
                                    TO PROJECT 
                                </a>
                            </div> : ""
                            }
                            <img loading="lazy" src={project.preview} alt="" className="preview"/>
                        </div>
                    </div>
                )
            })}
            </div>

            <Contact/>
        </div>
    )
}

export default Portfolio