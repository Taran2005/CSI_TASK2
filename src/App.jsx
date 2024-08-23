import './App.css'
import HotelList from './HotelCard'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import MapEmbed from './Map'
import Footer from './AppFooter'

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <HotelList/>
      <MapEmbed/>
      <Footer/>
    </>
  )
}

export default App