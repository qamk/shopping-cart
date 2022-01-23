import Navbar from "./Navbar"
import { Outlet } from "react-router"

const MainLayout = () => {
  return(
    <section className="section">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </section>
  )
}

export default MainLayout
