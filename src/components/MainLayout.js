import Navbar from "./Navbar"
import { Outlet, Link } from "react-router-dom"

const MainLayout = () => {
  return(
    <section className="section">
      <header>
        <div className="banner">
          <div className="banner-container">
            <Link to="/shopping-cart">
              Fruit
            </Link>
          </div>
        </div>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </section>
  )
}

export default MainLayout
