import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from "../assets/night.jpg"
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
import "../components/AboutUs.css";


function About() {
  return (
    <>
        <Navbar />
     <Hero  
        cName="hero-mid"
        heroImg={AboutImg}
     
        title="About"
        url = "/"
        btnClass="hide"
     /> 
     <AboutUs />
     <Footer />
    </>
  )
}

export default About
