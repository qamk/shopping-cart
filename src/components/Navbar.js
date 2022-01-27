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
    if (window.innerWidth <= 500) {
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
    <Button styles={['mobile-button']} onClick={openMenu} addButtonClass={false}>
      Menu
    </Button>;
  }

  return (
    <nav className="navbar">
      { mobileButton }
      <ul className={style}>
        <NavLink to="/shopping-cart/shop">
          <li className="navbar-item">Fruits</li>
        </NavLink>
        {/* <NavLink to="#">
          <li className="navbar-item">Vegetables</li>
        </NavLink>
        <NavLink to="#">
          <li className="navbar-item">???????</li>
        </NavLink> */}
        <NavLink to="/shopping-cart/cart">
          <li className="navbar-item">
            My Cart
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
