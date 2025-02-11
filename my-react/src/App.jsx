import React from 'react'
import Header from './component/Header/Header'
import Home from './component/Home/Home'
import AboutUs from './component/AboutUs/AboutUs'
import ContactUs from './component/ContactUs/ContactUs'
import { Route, Routes } from 'react-router-dom'
import Footer from './component/Footer/Footer'
import OurTeams from './component/OurTeams/OurTeams'
import Services from './component/Sservices/Services'
import Minimalist from './component/Minimalist/Minimalist'
import surot1 from './assets/Group1000004251.svg'
import surot2 from './assets/Group1000004403.svg'
import surot3 from './assets/Line12.svg'
import surot4 from './assets/Maskgroup.svg'
import surot5 from './assets/Rectangle871.svg'
import surot6 from './assets/Group2169.svg'
import surot7 from './assets/AboutUs/Maskgroup1.svg'
import surot8 from './assets/AboutUs/Maskgroup2.svg'
import surot9 from './assets/Servicess/Maskgroup3.svg'
import surot10 from './assets/Servicess/Maskgroup4.svg'
import surot11 from './assets/Servicess/Maskgroup(1).svg'
import surot12 from './assets/Servicess/Maskgroup(2).svg'
import surot13 from './assets/OurTeams/Maskgroup5.svg'




function App() {
  return (
    <div>
      <Header image={surot1}  />

      <Routes>
        <Route path='HomePage' element={ <Home image={surot3 } images={[surot4]} imagess={[surot5]} imaged={surot6} /> } />
        <Route path='aboutUsPage' element={ <AboutUs image={surot7} images={surot3} imagess={[surot8]} art={surot5} artt={surot6} /> } />
        <Route path='contactPage' element={ <ContactUs  /> } />
        <Route path='OurTeamsPage' element={ <OurTeams su={surot13} /> } />
        <Route path='MinimalistPage' element={ <Minimalist  /> } />
        <Route path='ServicesPage' element={ <Services image={surot9} images={surot10} imagess={[surot11]} art={surot12} /> } />

      </Routes>
      <Footer image={surot1} images={surot2} />
    </div>
  )
}

export default App
