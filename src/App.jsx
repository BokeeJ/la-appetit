import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

function App() {


  return (
    <div className="bg-black">
      <Navbar />
      <Outlet />
      <Footer />
    </div >
  )

}

export default App
