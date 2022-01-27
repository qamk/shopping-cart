import { useEffect, useState } from 'react';
import ProductList from './ProductList';
import { clone, extractItemIndex, isFalsy, cartValuesIdentical } from '../assets/helpers/helperMethods';

const Main = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem('cart'));
    const sameAsCart = cartValuesIdentical(cartItems, storedCart);
    const falsyStorage = isFalsy(storedCart);
    if (falsyStorage) {
      sessionStorage.setItem('cart', JSON.stringify(cartItems));
    } else if (cartItems.length === 0) {
        setCartItems(storedCart);
    } else if (!sameAsCart)  {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems])


  const addToCart = (item) => {
    let newItems;
    const index = extractItemIndex(cartItems, item.key);
    if (index !== null) {
      newItems = clone(cartItems)
      newItems[index].quantity = newItems[index].quantity + 1;
    } else {
      newItems = [...cartItems, item];
    }
    sessionStorage.setItem('cart', JSON.stringify(newItems))
    setCartItems(newItems);
  }

  return(
    <section className="section is-medium">
      <header>
        <div className="title-container">
          <h1 className="title is-1">Products page</h1>
        </div>
      </header>
      <section className="container is-wide-1">
      <ProductList addToCart={addToCart}/>
      </section>
    </section>
  )
};

export default Main;