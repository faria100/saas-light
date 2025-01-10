import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import LogoTicker from './sections/LogoTicker'
import Productshowcase from './sections/Productshowcase'
import { Pricing } from './sections/Pricing'
import { Testimonials } from './sections/Testimonial'
import CallToAction from './sections/CallToAction'
import Footer from './sections/Footer'


function App({ children }) {
  return (
    //<div className="antialiased min-h-screen bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] overflow-x-clip">
      //{children}
      <div>
      <Header />
      <Hero />
      <LogoTicker />
      <Productshowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
    //</div>
  );
}



    
  

export default App