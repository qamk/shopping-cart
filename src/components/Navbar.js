import React from 'react';
import Button from './Button';

const Navbar = (props) => {
  const methods = props.methods;
  const cartProcess = () => {
    console.log('Viewing cart!!');
    methods.toggleCart();
  }
  
  return(
    <nav>
      <ul>
        <li> <a href="/">Home</a> </li>
        <li> <a href="#"> Shop! </a> </li>
        <li>
          <Button onClick={cartProcess}>
            View Cart!
          </Button>
        </li>
        <li>
          <Button onClick={methods.toggleHomePage}>
            Click to change main content
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;