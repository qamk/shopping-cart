const CartItem = (props) => {
  console.log('Cart Item');
  console.log(props);
  console.log('---------------')
  return(
    <>
      <li>Added item: {props.details.name}</li>
      <li>There are {props.details.quantity} of me</li>
      {
        props.children
      }
    </>
  )
}

export default CartItem;
