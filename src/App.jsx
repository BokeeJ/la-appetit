import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import ScrollToTop from "./Components/ScrollToTop"


function App() {


  return (
    <div className="bg-black">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />

    </div >
  )

}

export default App
