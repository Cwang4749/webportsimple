import React, {useState} from "react";
import { motion } from "framer-motion";
import Popup from "./Popup.jsx";

import {work, education, skill} from "./data/ExpData.js";
import rocket from '../assets/experience/rocket.png'

function Experience() {

    const [zoom, set_zoom] = useState(false);
    const [zoom_text, set_text] = useState("");
    const [indent, set_indent] = useState(false);

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
            id="experiencepage"
        >
            <div>
                <div className="tableheader" id="firstheader">EXPERIENCE</div>
                <table className="table1">
                    <tbody>
                    {
                        work.map((val, key) => (
                            <tr key={key}>
                                <td onClick={() => TableCellClick(val.year, false)}>
                                    {val.year}
                                </td>
                                <td onClick={() => TableCellClick(val.place, false)}>
                                    {val.place}
                                </td>
                                <td onClick={() => TableCellClick(val.description, true)}>
                                    {val.description.map((str,index) => {return(<p key={index}>{str} <br/></p> )})}
                                </td>
                            </tr>
                        ))
                    }</tbody>
                </table>

                <div className="tableheader">EDUCATION</div>
                <table className="table1">
                    <tbody>
                    {
                        education.map((val, key) => (
                            <tr key={key}>
                                <td onClick={() => TableCellClick(val.year, false)}>
                                    {val.year}
                                </td>
                                <td onClick={() => TableCellClick(val.place, false)}>
                                    {val.place}
                                </td>
                                <td onClick={() => TableCellClick(val.description, true)}>
                                    {val.description.map((str,index) => {return(<p key={index}>{str} <br/></p> )})}
                                </td>
                            </tr>
                        ))    
                    }</tbody>
                </table>

                <div className="tableheader">SKILLS</div>
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