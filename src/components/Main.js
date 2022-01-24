import { useEffect, useState } from 'react';
import ProductList from './ProductList';
import { clone, extractItemIndex } from '../assets/helpers/helperMethods';

const typeOf = (obj) => {
  return toString.call(obj).slice(8, -1).toLowerCase();
}

const isFalsy = (value) => {
  const objType = typeOf(value);
  let falsy;
  switch (objType) {
    case "array":
      falsy = (value.length === 0)
      break;
    case "object":
      falsy = (value.keys().length === 0)
      break
    default:
      falsy = ( (value === undefined) || (value === null))
      break;
  }
  return falsy;
}

const cartValuesIdentical = (cart, storage) => {
  if (isFalsy(storage) || isFalsy(cart)) {
    return false;
  };

  if (cart.length !== storage.length) {
    return false;
  }

  const filtered = storage.filter((obj, index) => {
    const comparableObj = cart[index];
    let idVerdict = (obj.id === comparableObj.id)
    let quantVerdict = (obj.quantity === comparableObj.quantity)
    return (idVerdict && quantVerdict)
  })
  return (cart.length === filtered.length);
}

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
    console.log('Adding to cart item:');
    console.dir(newItems);
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