import { Link } from "react-router-dom";

const Navbar = (props) => {
  
  return(
    <nav>
      <ul>
        <li> <Link to="/home">Home</Link> </li>
        <li> <Link to="/shop"> Shop! </Link> </li>
      </ul>
    </nav>
  )
}

export default Navbar;