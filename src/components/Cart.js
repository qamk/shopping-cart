import CartItem from './CartItem';
import Button from './Button';
import { useEffect, useState } from 'react';
import { clone, extractItemIndex } from '../assets/helpers/helperMethods';

const Cart = (props) => {

  const [myCart, setMyCart] = useState([]);

  useEffect(() => {
    const startingCart = JSON.parse(sessionStorage.getItem('cart')) || []
    setMyCart(startingCart);
  }, [])

  const increaseQuantity = (value) => value + 1;

  const decreaseQuantity = (value) => value - 1;

  const changeQuantity = (itemKey, methodKey) => {
    const change = { 'dec': decreaseQuantity, 'inc': increaseQuantity }[methodKey];
    // console.log('Changing quantity.......');
    // console.log('Method is: ' + methodKey);
    // console.log('Item key is: ' + itemKey);
    const index = extractItemIndex(myCart, itemKey);

    let newItems = clone(myCart);
    newItems[index].quantity = change(newItems[index].quantity);

    if (newItems[index].quantity === 0) {
      removeCartItem(null, index, newItems)
      return;
    }
    sessionStorage.setItem('cart', JSON.stringify(newItems));
    setMyCart(newItems)
    // console.log('---------------')
  }

  const removeCartItem = (itemKey, index = null, loadedClone = null) => {
    // console.log('Removing item...')
    // console.dir(itemKey);
    // console.log('------------------');

    index = index ? index : extractItemIndex(myCart, itemKey)

    try {
      let newItems = loadedClone ? loadedClone : clone(myCart)
      newItems.splice(index, 1);
      sessionStorage.clear();
      setMyCart(newItems);
    } catch(error) {
      console.log('An error occurred!');
      console.log(error);
      console.log('---------------------')
    }
  }

  const clearCart = () => {
    sessionStorage.clear();
    setMyCart([]);
  }

  const itemMethods = { changeQuantity, removeCartItem };

  let itemsToRender = <p>
    No Items in the myCart. Add some and make me money!!!
  </p>

  if (myCart.length > 0) {
    itemsToRender = myCart.map((item) => {
      // console.log('Cart item:');
      // console.log(item);
      return(<>
          <CartItem details={item} {...itemMethods} key={item.key} />
        </>)
    })
  }

  return(
    <>
      <aside className="container">
        <header className="title-container">
          <h2 className="title is-2">My Cart</h2>
        </header>
        <div className="grid-auto mt-2">
          { itemsToRender }
        </div>
        <Button onClick={clearCart}>
          Clear My Cart
        </Button>
      </aside>
    </>
  )
}
export default Cart;
