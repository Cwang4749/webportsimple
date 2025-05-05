import React, {useState} from "react";
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

    return(
        <div
            className="experiencepage"
        >
            <div>
                <motion.div 
                    initial={{scale: 0.8}} animate={{scale: 1}} transition={{duration: 0.7}}
                    className="tableheader" id="firstheader"
                >
                    EXPERIENCE
                </motion.div>
                <table className="table1">
                    <motion.tbody variants={TableVariant} initial="initial" animate="animate">
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

                <motion.div
                    initial={{scale: 0.8}} animate={{scale: 1}} transition={{duration: 0.7}}
                    className="tableheader"
                >
                    EDUCATION
                </motion.div>
                <table className="table1">
                    <motion.tbody variants={TableVariant} initial="initial" animate="animate">
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

                <div className="tableheader">SKILLS</div>
                <motion.div className="skilltable"
                    variants={SkillVariant} initial="initial"
                    whileInView="animate" viewport={{once: true}}
                >
                    {skill.map((val, key) => (
                        <motion.div key={key} className="skillbox" variants={SkillVariant}>
                            <img loading="lazy" src={rocket} alt="" style={{"height": "100%"}}/>
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