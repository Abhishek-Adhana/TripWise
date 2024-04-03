import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from "../assets/2.jpg"
import Footer from '../components/Footer'
import "../components/ContactForm.css"
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <>
        <Navbar />
     <Hero  
        cName="hero-mid"
        heroImg={AboutImg}
     
        title="Contact"
        url = "/contact"
        btnClass="hide"
     /> 
     <ContactForm />
     <Footer />
    </>
  )
}

export default Contact
