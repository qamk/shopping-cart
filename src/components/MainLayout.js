import Navbar from "./Navbar"
import { Outlet } from "react-router"

const MainLayout = () => {
  return(
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
