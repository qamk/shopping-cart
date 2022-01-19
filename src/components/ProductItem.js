import Button from "./Button";
import Item from "./Item";
// import QuantityControls from "./QuantityControls";

const ProductItem = (props) => {
  return(
    <Item details={props.details}>
      {/* <QuantityControls /> */}
      <Button onClick={() => props.addToCart(props.details)}>
        Add to Cart
      </Button>
    </Item>
  )
}

export default ProductItem;
