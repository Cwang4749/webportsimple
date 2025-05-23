import { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence, useScroll, useTransform} from "framer-motion"
import uparrow from "../assets/home/uparrow.png"

function Home() {

    const HelloVariant = {
        initial: {
            opacity: 0,
            y: 40
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -40
        }
    }
    const NavVariant = {
        initial: {
            opacity: 0,
            y: -40
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -40,
            transition: {
                duration: 0.2
            }
        },
        hover: {
            y: -10,
            transition: {
                duration: 0.1
            }
        }
    }
    const UpVariant = {
        initial: {
            opacity: 0,
            scale: 0.3
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: 0.5
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

        window.history.replaceState(null, document.title, "/");
    }, [])

    const handleNav = () => {
        setTimeout(() => {
            window.history.replaceState(null, document.title, "/");
        }, 1000);
    };

    const {scrollYProgress} = useScroll();
    const fontColor = useTransform(
        scrollYProgress,
        [0, 1],
        ["#0b4e02", "#57bd4a"]
    );
    return(
        <div
            style={{display: "grid", width: "100vw", height: "100vh", zIndex: 2, position: "relative", x: 0, y: 0}}
            id="homepage"
        >  
            <AnimatePresence>
            {navbar && <>
                <div className="hello">
                    <motion.div variants={HelloVariant} initial="initial" animate="animate" exit="exit" transition={{duration: 1}}>
                        HELLO,
                    </motion.div>
                    <motion.div variants={HelloVariant} initial="initial" animate="animate" exit="exit" transition={{duration: 1, delay: .3}}>
                        MY NAME IS CALVIN
                    </motion.div>
                </div>

                <div className="vertical_container">
                    <motion.div
                        initial={{ y: -30 }} animate={{ y: 0 }} exit={{ y: -30, transition: {duration: 0.2} }}
                        transition={{duration: 0.5}} id="aboutme"
                    >
                        <a href="#aboutmepage" onClick={handleNav}
                            style={{display: "grid", height: "100%", width: "100%", justifyItems: "center", alignItems: "end"}}
                        >
                            <span className="bubble">
                                <h1 className="bubble_heading"> About Me </h1>
                                <p className="bubble_text"> Background <br/> Hobbies <br/> Fun Facts </p>
                            </span>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: 20, opacity: 0, transition: {duration: 0.2} }}
                        transition={{ duration: .5}} id="contact"
                    >
                        <a href="#contactpage" onClick={handleNav}
                            style={{display: "grid", height: "100%", width: "100%", justifyItems: "center"}}
                        >
                            <span className="bubble">
                                <h1 className="bubble_heading"> Contact </h1>
                                <p className="bubble_text"> LinkedIn <br/> Email <br/> Github </p>
                            </span>
                        </a>
                    </motion.div>
                </div>

                <div className="horizontal_container">
                    <motion.div initial={{ x: 30 }} animate={{ x: 0 }} exit={{ x: 30, transition: {duration: 0.2} }}
                        transition={{duration: 0.5}} id="portfolio"
                    >
                        <a href="#portfoliopage" onClick={handleNav}
                            style={{display: "grid", height: "100%", width: "100%", alignItems: "center"}}
                        >
                            <span className="bubble">
                                <h1 className="bubble_heading"> Portfolio </h1>
                                <p className="bubble_text"> C++ <br/> React <br/> Flutter </p>
                            </span>
                        </a>
                    </motion.div>

                    <motion.div initial={{ x: -30 }} animate={{ x: 0 }} exit={{ x: -30, transition: {duration: 0.2} }}
                        transition={{duration: 0.5}} id="experience"
                    >
                        <a href="#experiencepage" onClick={handleNav}
                            style={{display: "grid", height: "100%", width: "100%", justifyItems: "end", alignItems: "center"}}
                        >
                            <span className="bubble">
                                <h1 className="bubble_heading"> Experience </h1>
                                <p className="bubble_text"> Education <br/> Work <br/> Skills </p>
                            </span>
                        </a>
                    </motion.div>
                </div>
            </> }
            </AnimatePresence>
            
            <AnimatePresence>
            {!navbar && 
            <motion.div className="navbar">
                <motion.a onClick={handleNav} href="#aboutmepage" className="nav_heading" id="abme"
                    variants={NavVariant} initial="initial" animate="animate" exit="exit" transition={{duration: 0.5}}
                    whileHover="hover"
                >About Me</motion.a>
                <motion.a onClick={handleNav} href="#experiencepage" className="nav_heading" id="exp"
                    variants={NavVariant} initial="initial" animate="animate" exit="exit" transition={{duration: 0.6}}
                    whileHover="hover"
                >Experience</motion.a>
                <motion.a onClick={handleNav} href="#portfoliopage" className="nav_heading" id="port"
                    variants={NavVariant} initial="initial" animate="animate" exit="exit" transition={{duration: 0.7}}
                    whileHover="hover"
                >Portfolio</motion.a>
                <motion.a onClick={handleNav} href="#contactpage" className="nav_heading" id="con"
                    variants={NavVariant} initial="initial" animate="animate" exit="exit" transition={{duration: 0.8}}
                    whileHover="hover"
                >Contact</motion.a>

                <motion.a href="#homepage" className="uparrow" onClick={handleNav}
                    variants={UpVariant} initial="initial" animate="animate" exit="exit" transition={{duration: 0.5}}
                >
                    <img src={uparrow} style={{height: "100%", width: "100%", transform: "rotateZ(-45deg)"}}/>
                </motion.a>
            </motion.div>}
            </AnimatePresence> 
            <div className="observer" ref={targetRef}></div>
        </div>
    )
}

export default Home