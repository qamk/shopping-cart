
const ProductList = (props) => {
  // Props for handling psuedo-pagination through router params
  return(
    <>
      <h2>Available Products!</h2>
      <article>
        {props.inventory}
      </article>
    </>
  )
}
export default ProductList;