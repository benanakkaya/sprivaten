import ClientsSay from "./components/ClientsSay/ClientsSay"
import ContactUs from "./components/ContactUs/ContactUs"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import OurTeam from "./components/OurTeam/OurTeam"
import ServiceVideo from "./components/ServiceVideo/ServiceVideo"
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs"


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
