import React, { useState, useRef, useEffect } from "react"
import { motion, useAnimate, useTransform, useSpring, useMotionValue } from "framer-motion"

import Flashcard from "./Flashcard.jsx"
import FlashcardData from "./data/FlashcardData.js"
import profile from "../assets/aboutme/profile.webp"

function AboutMe() {
    const [curr_circle, set_curr_circle] = useState(0);
    const [flashcard_image_index, set_flashcard_image_index] = useState(-1);
    const [scope, animate] = useAnimate();

    function ChangeCard(flashcard_index) {
        if(curr_circle < flashcard_index)
        {
            animate([
                [".am_curr_circle", {y: 50}, {duration: .05}],
                [".am_curr_circle", {y: 0}, {duration: .05}]
            ]);
        }
        else if(curr_circle > flashcard_index)
        {
            animate([
                [".am_curr_circle", {y: -50}, {duration: .05}],
                [".am_curr_circle", {y: 0}, {duration: .05}]
            ]);
        }

        set_curr_circle(flashcard_index);
        set_flashcard_image_index(-1);
    }

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const xSpring = useSpring(x);
    const ySpring = useSpring(y);
    const rotateX = useTransform(ySpring, [-0.5, 0.5], ["15deg", "-15deg"])
    const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-15deg", "15deg"])

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const rX = mouseX / width - 0.5;
        const rY = mouseY / height - 0.5;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const targetRef = useRef(null);
    useEffect(() => {
        const options = {
            root: null,
            threshold: 1,
            rootMargin: '0px'
        }
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setTimeout(() => {
                if(document.getElementById("abme") != null) {
                    if(entry.isIntersecting) {
                        document.getElementById("abme").style.textDecoration = "underline";
                    }
                    else {
                        document.getElementById("abme").style.textDecoration = "none";
                    }
                }
            }, 10);
        }, options)
        observer.observe(targetRef.current);
    }, [])

    return(
        <div
            className="aboutmepage"
            id="aboutmepage"
            ref={targetRef}
        >
            <motion.div
                style={{
                    transformStyle: "preserve-3d",
                    rotateX,
                    rotateY
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="profilepic"
            >
                <motion.img
                    initial={{scale: 0.8}} transition={{duration: 0.2, delay: 0.15}} whileInView={{scale: 1}}
                    loading="lazy" src={profile}
                    style={{
                        width: "90%",
                        height: "90%",
                        objectFit: "cover",
                        borderRadius: "inherit",
                        transformStyle: "preserve-3d",
                        translateZ: "30px"
                    }}
                />
            </motion.div>

            <Flashcard flashCardText={FlashcardData[curr_circle].description}
                flashCardImage={FlashcardData[curr_circle].image}
                imageIndex={flashcard_image_index}
                setImageIndex={set_flashcard_image_index}
                imageType={FlashcardData[curr_circle].imageType}
                bg_color={curr_circle}
            />

            <div ref={scope} className="am_circlecontainer">
                <div className={curr_circle===0 ? "am_curr_circle" : "am_circle"} onClick={() => ChangeCard(0)}/>
                <div className={curr_circle===1 ? "am_curr_circle" : "am_circle"} onClick={() => ChangeCard(1)}/>
                <div className={curr_circle===2 ? "am_curr_circle" : "am_circle"} onClick={() => ChangeCard(2)}/>
            </div>

        </div>
    )
}

export default AboutMe