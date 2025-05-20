import React from 'react'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import './App.css'

import pano1 from './assets/home/pano1.webp'

import { motion, useTransform, useScroll } from 'framer-motion'

function App() {
  const pano1ref = React.createRef();
  const { scrollYProgress } = useScroll({
        target: pano1ref,
        offset: ["start start", "end start"]
    });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <>
      <div className="panobox">
        <motion.img className="pano1" ref={pano1ref} src={pano1} style={{y: backgroundY}}/>
      </div>
      <Home/>
        <AboutMe/>
        <Experience/>
        <Portfolio/>
    </>
  )
}

export default App
