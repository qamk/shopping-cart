import { useEffect, useState, useRef } from 'react';
import ProductList from './ProductList';
import FeedbackLayout from './FeedbackLayout';
import { clone, extractItemIndex, isFalsy, cartValuesIdentical } from '../assets/helpers/helperMethods';

const Main = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const mostRecentItem = useRef(null);
  const message = "You have added " + mostRecentItem.current + " to the cart";

  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem('cart'));
    const sameAsCart = cartValuesIdentical(cartItems, storedCart);
    const emptyStorage = isFalsy(storedCart);
    if (emptyStorage) {
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
    mostRecentItem.current = item.name;
    setCartItems(newItems);
    setShowFeedback(true);
    // setDisplayFeedback(true);
  }

  const unmountFeedback = () => {
    setShowFeedback(false);
  }

  return(
    <section>
      <header>
        <div className="title-container">
          <h1 className="title is-1">Products page</h1>
        </div>
      </header>
      <section className="container is-wide-1">
        { showFeedback 
          ? <FeedbackLayout cart={cartItems} unmountCallback={unmountFeedback} message = {message}/>
          : null
        }
        <ProductList addToCart={addToCart}/>
      </section>
    </section>
  )
};

export default Main;