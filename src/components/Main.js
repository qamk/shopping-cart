import { useEffect, useState } from 'react';
import Button from './Button';
import Cart from './Cart';
import ProductList from './ProductList';

const clone = (value) => {
  return JSON.parse(JSON.stringify(value));
}

const extractItemIndex = (cartOfObjects, key) => {
  let itemInfo = null;
  cartOfObjects.forEach((obj, index) => {
    if ( obj.key === key ) {
      itemInfo = index
    }
  });
  return itemInfo;
}

const typeOf = (obj) => {
  return toString.call(obj).slice(8, -1).toLowerCase();
}

const isFalsy = (value) => {
  // console.log('---------- isFalsy')
  // console.log('Value is:');
  // console.dir(value);
  const objType = typeOf(value);
  // console.log(`Type of object is ${objType}`);
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
  // console.log(`Is it falsy? .... ${falsy}`);
  return falsy;
}

const cartValuesIdentical = (cart, storage) => {
  // console.log('Storage');
  // console.dir(storage);
  // console.log('Cart:');
  // console.dir(cart);
  if (isFalsy(storage) || isFalsy(cart)) {
    // console.log('Something is falsy...')
    return false;
  };

  if (cart.length !== storage.length) {
    // console.log('Storage and cart are different lengths...');
    return false;
  }

  const filtered = storage.filter((obj, index) => {
    const comparableObj = cart[index];
    // console.log(`storage item number ${index + 1}:`);
    // console.dir(obj);
    // console.log(`cart item number ${index + 1}:`);
    // console.dir(comparableObj);
    let idVerdict = (obj.id === comparableObj.id)
    let quantVerdict = (obj.quantity === comparableObj.quantity)
    // console.log(`Same id: ${idVerdict}\nSame quantity: ${quantVerdict}`);
    return (idVerdict && quantVerdict)
  })
  // console.log('filtered: ');
  // console.log(filtered);
  // console.log(`ref len is ${ref.len}`)
  return (cart.length === filtered.length);
}

const Main = () => {
  const [cartVisibility, setCartVisibility] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // console.log('Calling cart items effect')
    const storedCart = JSON.parse(sessionStorage.getItem('cart'));
    // console.log('---------- identical check start');
    const sameAsCart = cartValuesIdentical(cartItems, storedCart);
    // console.log('---------- identical check end');
    // console.log('is storage falsy?');
    const falsyStorage = isFalsy(storedCart);
    // console.log('Session cart: ');
    // console.dir(storedCart)
    // console.log('Current cart');
    // console.dir(cartItems);
    // console.log('Are they the same? Answer: ' + sameAsCart);
    if (falsyStorage) {
      // console.log('When our storage is empty or null (falsy)');
      // console.log(JSON.stringify(cartItems));
      sessionStorage.setItem('cart', JSON.stringify(cartItems));
      // console.log('What\'s in storage: ')
      // console.dir(JSON.parse(sessionStorage.getItem('cart')));
    } else if (cartItems.length === 0) {
        // console.log('When cart is empty...')
        // console.log('Updating cart to match storage....')
        setCartItems(storedCart);
    } else if (!sameAsCart)  {
        // console.log('When our storage has items and our cart isn\'t empty');
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
        // console.log('Update storage');
    }
  }, [cartItems])


  const addToCart = (item) => {
    let newItems;
    // console.log('Cart Items');
    // console.log(cartItems);
    const index = extractItemIndex(cartItems, item.key);
    // console.log('Index');
    // console.log(index);
    // console.log('---------------------');
    if (index !== null) {
      newItems = clone(cartItems)
      newItems[index].quantity = newItems[index].quantity + 1;
    } else {
      newItems = [...cartItems, item];
    }
    setCartItems(newItems);
  }
  
  const clearCart = () => {
    sessionStorage.clear();
    setCartItems([]);
  }

  const removeCartItem = (itemKey, index = null, loadedClone = null) => {
    // console.log('Removing item...')
    // console.dir(itemKey);
    // console.log('------------------');

    index = index ? index : extractItemIndex(cartItems, itemKey)

    try {
      let newItems = loadedClone ? loadedClone : clone(cartItems)
      newItems.splice(index, 1);
      sessionStorage.clear();
      setCartItems(newItems);
    } catch(error) {
      console.log('An error occurred!');
      console.log(error);
      console.log('---------------------')
    }
  }

  const increaseQuantity = (value) => value + 1;

  const decreaseQuantity = (value) => value - 1;

  const changeQuantity = (itemKey, methodKey) => {
    const change = { 'dec': decreaseQuantity, 'inc': increaseQuantity }[methodKey];
    // console.log('Changing quantity.......');
    // console.log('Method is: ' + methodKey);
    // console.log('Item key is: ' + itemKey);
    const index = extractItemIndex(cartItems, itemKey);

    let newItems = clone(cartItems);
    newItems[index].quantity = change(newItems[index].quantity);

    if (newItems[index].quantity === 0) {
      removeCartItem(null, index, newItems)
      return;
    }
    setCartItems(newItems)
    // console.log('---------------')
  }
  
  const toggleCart = () => {
    cartVisibility ? setCartVisibility(false) : setCartVisibility(true);
  }

  const cartMethods = { clearCart, removeCartItem, changeQuantity }
  
  let cart = <Cart methods={cartMethods} cartItems = {cartItems}/>;

  return(
    <section className="section is-medium">
      <div className="title-container">
        <h1 className="title is-1">Products page</h1>
      </div>
      <header>
        <Button onClick={toggleCart}>
          Show Cart
        </Button>
      </header>
      <section className="container is-wide-1">
        { cartVisibility
        ? cart 
        : null }
        <ProductList addToCart={addToCart}/>
      </section>
    </section>
  )
};

export default Main;