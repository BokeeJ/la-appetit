import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
function App() {


  return (
    <>
      <Navbar />
      <Outlet />
      {/* footer */}
    </>

  )

}

export default App
