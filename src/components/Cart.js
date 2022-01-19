import CartItem from './CartItem';
import Button from './Button';

const Cart = (props) => {

  let itemsToRender = <p>
    No Items in the cart. Add some and make me money!!!
  </p>

  if (props.cartItems) {
    itemsToRender = props.cartItems.map((item) => {
      console.log('cart item:');
      console.log(item);
      return(<>
          <CartItem details={item}>
            <Button onClick={props.removeItem.bind(this, item)}>
              Remove me!
            </Button>
          </CartItem>
        </>)
    })
  }

  return(
    <>
      <aside>
        <h2>My cart</h2>
        { itemsToRender }
        <Button onClick={props.clearCart}>
          Clear Cart
        </Button>
      </aside>
    </>
  )
}
export default Cart;
