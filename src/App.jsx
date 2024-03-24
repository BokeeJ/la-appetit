import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import ScrollToTop from "./Components/ScrollToTop"
import ScrollTab from "./Components/ScrollTab"



function App() {


  return (
    <div className="bg-black">
      {/* scroll back */}
      <ScrollToTop />
      <ScrollTab />
      {/* Compponent */}
      <Navbar />
      <Outlet />
      <Footer />

    </div >
  )

}

export default App
