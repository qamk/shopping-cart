import CartItem from './CartItem';
import Button from './Button';
import { useEffect, useState } from 'react';
import { clone, extractItemIndex, sumController } from '../assets/helpers/helperMethods';

const Cart = () => {

  const [myCart, setMyCart] = useState([]);
  const [cartCount, setCartCount] = useState(null);
  const [cartTotal, setCartTotal] = useState(null);

  useEffect(() => {
    const startingCart = JSON.parse(sessionStorage.getItem('cart')) || []
    setMyCart(startingCart);
  }, [])

  useEffect(() => {
    setCartCount(sumController({list: myCart, type: 'quantity'}));
    setCartTotal(sumController({list: myCart, type: 'cost'}));
  }, [myCart])

  const increaseQuantity = (value) => value + 1;

  const decreaseQuantity = (value) => value - 1;

  const changeQuantity = (itemKey, methodKey) => {
    const change = { 'dec': decreaseQuantity, 'inc': increaseQuantity }[methodKey];
    const index = extractItemIndex(myCart, itemKey);

    let newItems = clone(myCart);
    newItems[index].quantity = change(newItems[index].quantity);

    if (newItems[index].quantity === 0) {
      removeCartItem(null, index, newItems)
      return;
    }
    sessionStorage.setItem('cart', JSON.stringify(newItems));
    setMyCart(newItems)
  }

  const removeCartItem = (itemKey, index = null, loadedClone = null) => {

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

  let itemsToRender = <p className="content">
    No Items in the myCart. Add some and make me money!!!
  </p>

  if (myCart.length > 0) {
    itemsToRender = myCart.map((item) => {
      return(<>
          <CartItem details={item} {...itemMethods} key={item.key} />
        </>)
    })
  }

  return(
    <>
      <aside className="container">
        <header className="title-container">
          <h2 className="title is-2">My Cart ({cartCount})</h2>
          <p className="content">Total: £{cartTotal}</p>
        </header>
        <div className="grid-auto mt-2">
          { itemsToRender }
        </div>
        <Button styles={['is-transparent', 'is-danger']} onClick={clearCart}>
          Clear My Cart
        </Button>
      </aside>
    </>
  )
}
export default Cart;
