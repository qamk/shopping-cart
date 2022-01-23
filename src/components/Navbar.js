import { Link } from "react-router-dom";

const Navbar = (props) => {
  
  return(
    <nav className="navbar">
      <div className="navbar-item">
        <Link to="/" className="brand button is-primary">Home</Link>
      </div>
      <ul className="flex-centre-h bd-primary-dark">
        <li className="navbar-item button"> <Link to="/shop"> Shop! </Link> </li>
        <li className="navbar-item button">Page 2</li>
        <li className="navbar-item button">Page 3</li>
        <li className="navbar-item button">Page 4</li>
      </ul>
    </nav>
  )
}

export default Navbar;