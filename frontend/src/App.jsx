import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/index.css'
import './styles/css/animations.css'
import './styles/css/navbar.css'
import Navbar from "./components/Header/Navbar"
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </>
  )
}

export default App
