import ClientsSay from "./components/ClientsSay/ClientsSay"
import ContactUs from "./components/ContactUs/ContactUs"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import OurTeam from "./components/OurTeam/OurTeam"
import ServiceVideo from "./components/ServiceVideo/ServiceVideo"
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs"


export const containerVariant = {
  onscreen: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const itemVariant = {
  offscreen: {
    opacity:0,
    translateY:20
  },
  onscreen: {
    opacity:1,
    translateY:0
  }
}

function App() {


  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <ServiceVideo />
      <ClientsSay />
      <OurTeam />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
