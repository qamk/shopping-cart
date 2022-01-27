import inventory from '../assets/inventory.json';
import ProductItem from '../components/ProductItem';

const useGrabInventory =  (addToCartCallback) => {
  let products = inventory.map((product) => {
    return <article key={product.id} className="container">
      <ProductItem details={product} addToCart={addToCartCallback}/>
    </article>
  })
  return products;
}

export default useGrabInventory;
