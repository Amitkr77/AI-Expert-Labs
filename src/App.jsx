import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Services from "./pages/Services/Services"
import Portfolio from "./pages/Portfolio/Portfolio"
import Contact from "./pages/Contact/Contact"
import Institute from "./pages/Courses/Institute"
import Corporate from "./pages/Courses/Corporate"



import './styles/globals.css'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80
    })
  }, [])

  return (
    <div className="App">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Institute />} />
          <Route path="/courses" element={<Corporate />} />
          <Route path="/courses/institute" element={<Institute />} />
          <Route path="/courses/corporate" element={<Corporate />} />


        </Routes>
      </main>
    </div>
  )
}

export default App
