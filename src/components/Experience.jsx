import React, {useState, useRef, useEffect} from "react";
import { motion } from "framer-motion";
import Popup from "./Popup.jsx";

import {work, education, skill} from "./data/ExpData.js";
import rocket from '../assets/experience/rocket.png'

function Experience() {

    const [zoom, set_zoom] = useState(false);
    const [zoom_text, set_text] = useState("");
    const [indent, set_indent] = useState(false);

    const TableVariant = {
        initial: {
            y: 30
        },
        animate: {
            y: 0,
            transition: {
                duration: 0.3,
                staggerChildren: 0.07
            }
        }
    };

    const SkillVariant = {
        initial: {
            x: "90vw"
        },
        animate: {
            x: 0,
            transition: {
                duration: 1.5,
                staggerChildren: 0.1
            }
        }
    };

    function TableCellClick(cell_text, indnt) {
        set_zoom(true);
        set_text(cell_text);
        set_indent(indnt);
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
                if(document.getElementById("exp") != null) {
                    if(entry.isIntersecting) {
                        document.getElementById("exp").style.textDecoration = "underline";
                    }
                    else {
                        document.getElementById("exp").style.textDecoration = "none";
                    }
                }
            }, 10);
        },options)
        observer.observe(targetRef.current);
    }, [])

    return(
        <div
            className="experiencepage"
            id="experiencepage"
            ref={targetRef}
        >
            <div>
                <motion.div className="tableheader" id="firstheader" initial={{x: -50}} whileInView={{x: 0}}>EXPERIENCE</motion.div>
                <table className="table1">
                    <motion.tbody variants={TableVariant} initial="initial" whileInView="animate">
                    {
                        work.map((val, key) => (
                            <tr key={key}>
                                <motion.td variants={TableVariant} onClick={() => TableCellClick(val.year, false)}>
                                    {val.year}
                                </motion.td>
                                <motion.td variants={TableVariant} onClick={() => TableCellClick(val.place, false)}>
                                    {val.place}
                                </motion.td>
                                <motion.td variants={TableVariant} onClick={() => TableCellClick(val.description, true)}>
                                    {val.description.map((str,index) => {return(<p key={index}>{str} <br/></p> )})}
                                </motion.td>
                            </tr>
                        ))
                    }</motion.tbody>
                </table>

                <motion.div className="tableheader" initial={{x: -50}} whileInView={{x: 0}}>EDUCATION</motion.div>
                <table className="table1">
                    <motion.tbody variants={TableVariant} initial="initial" whileInView="animate">
                    {
                        education.map((val, key) => (
                            <tr key={key}>
                                <motion.td variants={TableVariant} onClick={() => TableCellClick(val.year, false)}>
                                    {val.year}
                                </motion.td>
                                <motion.td variants={TableVariant} onClick={() => TableCellClick(val.place, false)}>
                                    {val.place}
                                </motion.td>
                                <motion.td variants={TableVariant} onClick={() => TableCellClick(val.description, true)}>
                                    {val.description.map((str,index) => {return(<p key={index}>{str} <br/></p> )})}
                                </motion.td>
                            </tr>
                        ))    
                    }</motion.tbody>
                </table>

                <motion.div className="tableheader" initial={{x: -50}} whileInView={{x: 0}}>SKILLS</motion.div>
                <motion.div className="skilltable"
                    variants={SkillVariant} initial="initial"
                    whileInView="animate" viewport={{once: true}}
                >
                    {skill.map((val, key) => (
                        <motion.div key={key} className="skillbox" variants={SkillVariant}>
                            <img src={rocket} alt="" style={{"height": "100%"}}/>
                            <div className="skill" onClick={() => TableCellClick(val, false)}>{val}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <Popup zoom={zoom} setZoom={set_zoom} zoomText={zoom_text} indent={indent}/>
        </div>
    )
}

export default Experience