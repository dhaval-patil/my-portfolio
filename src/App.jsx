import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import TechnicalProficiency from './sections/TechnicalProficiency'
import AboutMe from './sections/AboutMe'
import MyProject from './sections/MyProject'
import ContactMe from './sections/ContactMe'
import Footer from './sections/Footer'
import Education from './sections/Education'
import BackToTop from './components/BackToTop'
import CodingProfiles from './sections/CodingProfiles'

const App = () => {
  return (
    <div>
      <BackToTop/>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Education />
      <TechnicalProficiency/>
      <MyProject />
      <ContactMe/>
      <Footer/>
      {/* <CodingProfiles/> */}
    </div>
  )
}

export default App