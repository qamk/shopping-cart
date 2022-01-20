import Item from "./Item";
import Button from "./Button";
import QuantityControls from "./QuantityControls";

const CartItem = (props) => {
  const controls = {
    add: {
      method: props.changeQuantity, label: '+', methodKey: 'inc', itemKey: props.details.key
    },
    subtract: {
      method: props.changeQuantity, label: '-', methodKey: 'dec', itemKey: props.details.key
    }
  };
  return(
    <>
      <Item details={props.details} key={props.details.id}>
        <p>Currently {props.details.quantity} in cart</p>
        <QuantityControls  controls = {controls} />
        <Button onClick={props.removeItem.bind(this, props.details.key)}>
          Remove me!
        </Button>
      </Item>
    </>
  )
}

export default CartItem;
