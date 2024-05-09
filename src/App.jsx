import { useState } from 'react'

import Navbar from './components/navbar'
import Hero from './components/Hero'
import About from './components/About'
import InfoOne from './components/infoOne'
import InfoTwo from './components/InfoTwo'
import CTA from './components/CTA'
import Testimonials from './components/Testimonials'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <InfoOne />
      <InfoTwo />
      <CTA/>
      <Testimonials/>
      <GetInTouch/>
      <Footer/>
    </>
  )
}

export default App
