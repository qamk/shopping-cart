import grabInventory from '../hooks/grabInventory'

const ProductList = (props) => {
  // Props for handling psuedo-pagination through router params
  let inventory = grabInventory(props.addToCart);
  return(
    <>
      <h2>Available Products!</h2>
      <article>
        {inventory}
      </article>
    </>
  )
}
export default ProductList;