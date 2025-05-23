import React from "react";
import { useState, useRef, useEffect } from "react";
import { easeInOut, motion } from "framer-motion";
import Alert from "./Alert";

import cardprofile from "../assets/contact/cardprofile.webp";
import linkedinlogo from "../assets/contact/linkedinlogo.png";
import githublogo from "../assets/contact/githublogo.webp";
import gmaillogo from "../assets/contact/gmaillogo.png";
import outlooklogo from "../assets/contact/outlooklogo.png";
import { linearGradient } from "framer-motion/client";

function Contact() {
    const [copied_text, set_copy] = useState("");
    const [show_alert, set_alert] = useState(false);

    // Resets the animation if pressed before animation ends
    function CopyText(text) {
        navigator.clipboard.writeText(text);
        set_alert(false);
        setTimeout(() => {
            set_alert(true);
        }, 10);
        set_copy(text);
    };

    const tarRef = useRef(null);
        useEffect(() => {
            const options = {
                root: null,
                threshold: 0.9,
                rootMargin: '0px'
            }
            const observer = new IntersectionObserver((entries) => {
                const entry = entries[0];
                setTimeout(() => {
                    if(document.getElementById("con") != null) {
                        if(entry.isIntersecting) {
                            document.getElementById("con").style.textDecoration = "underline";
                            document.getElementById("port").style.textDecoration = "none";
                        }
                        else {
                            document.getElementById("con").style.textDecoration = "none";
                            document.getElementById("port").style.textDecoration = "underline";
                        }
                    }
                }, 10);
            },options)
            observer.observe(tarRef.current);
        }, [])

    return(
        <div className="contactpage" id="contactpage" ref={tarRef}>
            {/* Business card: external links + emails; links open in new tabs and emails are copied upon click */}
            
            <motion.a href="https://calvin-wang.web.app/" target="_blank" rel="noreferrer" className="cardlink"
                whileHover={{scale: 1.3, transition: {duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: easeInOut}}}
                initial={{scale: 0.5}} whileInView={{scale: 1, transition: {duration: 0.5, delay: 0.2}}} 
            >
                <motion.img loading="lazy" id="cardprofile" src={cardprofile} alt=""/>
            </motion.a>

            <motion.a href="https://linkedin.com/in/calvin-wang-b107a71b9" target="_blank" rel="noreferrer" className="cardlink"
                whileHover={{scale: 1.3, transition: {duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: easeInOut}}}
                initial={{scale: 0.5}} whileInView={{scale: 1, transition: {duration: 0.5, delay: 0.1}}}
            >
                <img className="logo" loading="lazy" src={linkedinlogo} alt=""/>
            </motion.a>

            <motion.a href="https://github.com/Cwang4749" target="_blank" rel="noreferrer" className="cardlink"
                whileHover={{scale: 1.3, transition: {duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: easeInOut}}}
                initial={{scale: 0.5}} whileInView={{scale: 1, transition: {duration: 0.5}}}
            >
                <img className="logo" loading="lazy" src={githublogo} alt=""/>
            </motion.a>

            <motion.div className="cardlink" onClick={() => CopyText("calvinwang1002@gmail.com")}
                whileHover={{scale: 1.3, transition: {duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: easeInOut}}}
                initial={{scale: 0.5}} whileInView={{scale: 1, transition: {duration: 0.5, delay: 0.1}}}
            >
                <img className="logo" loading="lazy" src={gmaillogo} alt=""/>
            </motion.div>
                
            <motion.div className="cardlink" onClick={() => CopyText("calvin.wang161@myhunter.cuny.edu")}
                whileHover={{scale: 1.3, transition: {duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: easeInOut}}}
                initial={{scale: 0.5}} whileInView={{scale: 1, transition: {duration: 0.5, delay: 0.2}}}
            >
                <img className="logo" loading="lazy" src={outlooklogo} alt=""/>
            </motion.div>

            {/* Alert Component that shows up with an animation when one of the emails is pressed */}
            <Alert showAlert={show_alert} copiedText={copied_text} setAlert={set_alert}/>
        </div>
    )
}

export default Contact