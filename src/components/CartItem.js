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
      <Item details={props.details} key={props.details.key}>
        <p>Currently {props.details.quantity} in cart</p>
        <div className="media-footer flex-centre-h">
          <div className="mr-1">
            <QuantityControls controls = {controls} />
          </div>
          <Button onClick={() => {
            // console.log('Remove button clicked.... Removing...');
            // console.dir(props.details);
            props.removeCartItem(props.details.key)
          }}>
            Remove me!
          </Button>
        </div>
      </Item>
    </>
  )
}

export default CartItem;
