import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar    from '../../components/Navbar/Navbar'
import Hero      from '../../components/Hero/Hero'
import About     from '../../components/About/About'
import Services  from '../../components/Services/Services'
import Portfolio from '../../components/Portfolio/Portfolio'
import Contact   from '../../components/Contact/Contact'
import CompanySlider   from '../../components/CompanySlider/CompanySlider'


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80
    })
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CompanySlider />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>

    </>
  )
}

export default Home
