import ProductList from './ProductList';
import Home from './Home';
import grabInventory from '../hooks/grabInventory';

const PageLayout = (props) => {
  let mainSection = <Home />
  if (!props.homePage) {
    let inventory = grabInventory(props.addToCart); // side effect
    mainSection = <ProductList inventory={inventory}/>
  }

  console.log('Page Layout...');
  console.log(mainSection.type);
  console.log('--------------------');

  return(
    <>
      { mainSection }
    </>
  )
}

export default PageLayout;