import useGrabInventory from '../hooks/grabInventory'

const ProductList = (props) => {
  // Props for handling psuedo-pagination through router params
  let inventory = useGrabInventory(props.addToCart);
  return(
    <>
      <h2 className="title is-2 text-centre">Available Products!</h2>
      <article className="grid-auto">
        {inventory}
      </article>
    </>
  )
}
export default ProductList;