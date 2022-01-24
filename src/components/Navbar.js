import { useEffect, useState } from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false);

  let mobileButton;
  let style = 'navbar-list';

  
  useEffect(() => {
    window.addEventListener('resize', updateUseMobileNav)
    
    return () => {
      window.removeEventListener('resize', updateUseMobileNav)
    }
  })
  
  
  const updateUseMobileNav = () => {
    if (window.innerWidth <= 430) {
      setIsMobile(true);
    } else {
      setIsMobile(false)
    }
  }
  
  const openMenu = () => {
    const list = document.querySelector('.navbar-list');
    if ( list.classList.contains('invisible') ) {
      list.classList.remove('invisible');
    } else {
      list.classList.add('invisible');
    }
  };
  
  if (isMobile) {
    style = 'navbar-list invisible';
    mobileButton =
    <Button styles={['hamburger-button']} onClick={openMenu} >
      Menu
    </Button>;
  }

  return (
    <nav className="navbar">
      <ul className={style}>
        <NavLink to="/shop">
          <li className="navbar-item"> Shop </li>
        </NavLink>
        <NavLink to="#">
          <li className="navbar-item">Dead link</li>
        </NavLink>
        <NavLink to="#">
          <li className="navbar-item">Dead link</li>
        </NavLink>
        <NavLink to="/cart">
          <li className="navbar-item">
            My Cart
          </li>
        </NavLink>
      </ul>
     { mobileButton }
    </nav>
  );
};

export default Navbar;
