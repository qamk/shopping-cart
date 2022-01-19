import { useState } from 'react';
import Navbar from './Navbar';
// import Button from './Button';
import Cart from './Cart';
import PageLayout from './PageLayout';

const clone = (value) => {
  return JSON.parse(JSON.stringify(value));
}

const extractItemIndex = (arrayOfObjects, key) => {
  let itemInfo = null;
  arrayOfObjects.forEach((obj, index) => {
    if ( obj.key === key ) {
      itemInfo = index
    }
  });
  return itemInfo;
}

const MainLayout = () => {
  const [homePage, sethomePage] = useState(true);
  const [cartVisibility, setCartVisibility] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  
  const addToCart = (item) => {
    let newItems;
    console.log('Cart Items');
    console.log(cartItems);
    const index = extractItemIndex(cartItems, item.key);
    console.log('Index');
    console.log(index);
    console.log('---------------------');
    if (index !== null) {
      newItems = clone(cartItems)
      newItems[index].quantity = newItems[index].quantity + 1;
    } else {
      newItems = [...cartItems, item];
    }
    setCartItems(newItems);
  }
  
  const clearCart = () => {
    setCartItems([]);
  }

  const toggleHomePage = () => homePage ? sethomePage(false) : sethomePage(true)

  const removeItem = (item) => {
    console.log('Removing item...')
    console.log(item);
    console.log('------------------');

    const index = extractItemIndex(cartItems, item.key)

    try {
      let newItems = clone(cartItems)
      newItems.splice(index, 1)
      setCartItems(newItems);
    } catch(error) {
      console.log('An error occurred!');
      console.log(error);
      console.log('---------------------')
    }
  }
  
  const toggleCart = () => {
    cartVisibility ? setCartVisibility(false) : setCartVisibility(true);
  }
  
  let cart = <Cart clearCart={clearCart}/>;

  if (cartItems.length > 0) {
    cart = <Cart cartItems={cartItems} clearCart={clearCart} removeItem={removeItem}/>
  }

  return(
    <>
      <h1>Main Layout</h1>
      <header>
        <Navbar methods={{ toggleCart, toggleHomePage }}/>
      </header>
      <section>
        <h2>Below can be changed</h2>
        { cartVisibility
        ? cart 
        : null }
        <PageLayout homePage={homePage} addToCart={addToCart}/>
      </section>
    </>
  )
};

export default MainLayout;