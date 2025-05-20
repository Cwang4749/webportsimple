import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

function Home() {

    const HelloVariant = {
        initial: {
            opacity: 0,
            y: 40
        },
        animate: {
            opacity: 1,
            y: 0,
        }
    }

    const targetRef = useRef(null);
    const [navbar, setNavbar] = useState(true);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setNavbar(entry.isIntersecting);
        })
        observer.observe(targetRef.current);
    }, [])

    return(
        <div
            style={{display: "grid", width: "100vw", height: "100vh", zIndex: 2, position: "relative", x: 0, y: 0}}
        >   
            {navbar ? <>
                <div className="hello">
                    <motion.div variants={HelloVariant} initial="initial" animate="animate" transition={{duration: 1}}>
                        HELLO,
                    </motion.div>
                    <motion.div variants={HelloVariant} initial="initial" animate="animate" transition={{duration: 1, delay: .5}}>
                        MY NAME IS CALVIN
                    </motion.div>
                </div>

                <div className="vertical_container">
                    <motion.div
                        initial={{ y: -30 }}
                        animate={{ y: 0 }}
                        transition={{duration: 0.5}}
                        id="aboutme"
                    >
                        <a href="#aboutmepage" style={{display: "grid", height: "100%", width: "100%", justifyItems: "center", alignItems: "end"}}>
                            <span className="bubble">
                                <h1 className="bubble_heading"> About Me </h1>
                                <p className="bubble_text"> Background <br/> Hobbies <br/> Fun Facts </p>
                            </span>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: .5}}
                        id="contact"
                    >
                        <a href="#contactpage" style={{display: "grid", height: "100%", width: "100%", justifyItems: "center"}}>
                            <span className="bubble">
                                <h1 className="bubble_heading"> Contact </h1>
                                <p className="bubble_text"> LinkedIn <br/> Email <br/> Github </p>
                            </span>
                        </a>
                    </motion.div>
                </div>

                <div className="horizontal_container">
                    <motion.div
                        initial={{ x: 30 }}
                        animate={{ x: 0 }}
                        transition={{duration: 0.5}}
                        id="portfolio"
                    >
                        <a href="#portfoliopage" style={{display: "grid", height: "100%", width: "100%", alignItems: "center"}}>
                            <span className="bubble">
                                <h1 className="bubble_heading"> Portfolio </h1>
                                <p className="bubble_text"> C++ <br/> React <br/> Flutter </p>
                            </span>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ x: -30 }}
                        animate={{ x: 0 }}
                        transition={{duration: 0.5}}
                        id="experience"
                    >
                        <a href="#experiencepage" style={{display: "grid", height: "100%", width: "100%", justifyItems: "end", alignItems: "center"}}>
                            <span className="bubble">
                                <h1 className="bubble_heading"> Experience </h1>
                                <p className="bubble_text"> Education <br/> Work <br/> Skills </p>
                            </span>
                        </a>
                    </motion.div>
                </div>
            </> : 
            <div className="navbar">
                <a href="#aboutmepage" className="nav_heading">About Me</a>
                <a href="#experiencepage" className="nav_heading">Experience</a>
                <a href="#portfoliopage" className="nav_heading">Portfolio</a>
                <a href="#contactpage" className="nav_heading">Contact</a>
            </div>}
            <div className="observer" ref={targetRef}></div>
        </div>
    )
}

export default Home