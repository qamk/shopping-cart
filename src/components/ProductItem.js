import Button from "./Button";
import Item from "./Item";

const ProductItem = (props) => {
  return(
    <Item details={props.details}>
      <Button onClick={() => props.addToCart(props.details)}>
        Add to Cart
      </Button>
    </Item>
  )
}

export default ProductItem;
