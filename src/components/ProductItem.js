import Button from "./Button";
import Item from "./Item";
// import QuantityControls from "./QuantityControls";

const ProductItem = (props) => {
  return(
    <>
      <Item details={props.details} key={props.details.key}>
        {/* <QuantityControls /> */}
        <Button styles={['media-footer is-primary']} onClick={() => props.addToCart(props.details)}>
          Add to Cart
        </Button>
      </Item>
    </>
  )
}

export default ProductItem;
