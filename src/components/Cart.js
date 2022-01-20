import CartItem from './CartItem';
import Button from './Button';

const Cart = (props) => {

  const { clearCart, ...itemMethods } = props.methods;

  let itemsToRender = <p>
    No Items in the cart. Add some and make me money!!!
  </p>

  if (props.cartItems.length > 0) {
    itemsToRender = props.cartItems.map((item) => {
      // console.log('cart item:');
      // console.log(item);
      return(<>
          <CartItem details={item} {...itemMethods} />
        </>)
    })
  }

  return(
    <>
      <aside>
        <h2>My cart</h2>
        { itemsToRender }
        <Button onClick={clearCart.clearCart}>
          Clear Cart
        </Button>
      </aside>
    </>
  )
}
export default Cart;
