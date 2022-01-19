import inventory from '../assets/inventory.json';
import ProductItem from '../components/ProductItem';

const grabInventory =  (addToCartCallback) => {
  let products = inventory.map((product) => {
    return <article key={product.id}>
      <ProductItem details={product} addToCart={addToCartCallback}/>
    </article>
  })
  return products;
}

export default grabInventory;
