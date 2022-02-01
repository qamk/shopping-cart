import Item from "./Item";
import Button from "./Button";
import QuantityControls from "./QuantityControls";

const CartItem = (props) => {
  const controls = {
    subtract: {
      method: props.changeQuantity, label: '-', methodKey: 'dec', itemKey: props.details.key
    },
    add: {
      method: props.changeQuantity, label: '+', methodKey: 'inc', itemKey: props.details.key
    }
  };
  return(
    <>
      <Item details={props.details} key={props.details.key}>
        <div className="br">
          <div className="feedback-perm">
            <p className="content">{props.details.quantity} in cart</p>
          </div>
        </div>
        <div className="media-footer flex-around-h">
          <Button styles={['is-transparent']} onClick={() => {
            props.removeCartItem(props.details.key)
          }}>
            Remove me!
          </Button>
          <div className="m-1">
            <QuantityControls controls = {controls} />
          </div>
        </div>
      </Item>
    </>
  )
}

export default CartItem;
