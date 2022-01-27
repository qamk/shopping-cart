const clone = (value) => {
  return JSON.parse(JSON.stringify(value));
}

const extractItemIndex = (cartOfObjects, key) => {
  let itemInfo = null;
  cartOfObjects.forEach((obj, index) => {
    if ( obj.key === key ) {
      itemInfo = index
    }
  });
  return itemInfo;
}

const createTooltip = ({styles = {}, fade = false}) => {

  let myTooltip = document.createElement('div');

  myTooltip.classList.add('tooltip');

  Object.entries(styles).forEach(([property, value]) => {
    myTooltip.style[property] = value;
  })

  if (fade) {
    myTooltip.style.opacity = 1;
  }

  return myTooltip

}


const typeOf = (obj) => {
  return toString.call(obj).slice(8, -1).toLowerCase();
}

const isFalsy = (value) => {
  const objType = typeOf(value);
  let falsy;
  switch (objType) {
    case "array":
      falsy = (value.length === 0)
      break;
    case "object":
      falsy = (value.keys().length === 0)
      break
    default:
      falsy = ( (value === undefined) || (value === null))
      break;
  }
  return falsy;
}

const cartValuesIdentical = (cart, storage) => {
  if (isFalsy(storage) || isFalsy(cart)) {
    return false;
  };

  if (cart.length !== storage.length) {
    return false;
  }

  const filtered = storage.filter((obj, index) => {
    const comparableObj = cart[index];
    let idVerdict = (obj.id === comparableObj.id)
    let quantVerdict = (obj.quantity === comparableObj.quantity)
    return (idVerdict && quantVerdict)
  })
  return (cart.length === filtered.length);
}

const sumController = ({list = null, type='quantity'}) => {
  const cart = list || JSON.parse(sessionStorage.getItem('cart'));
  const methods = {
    'quantity': countStorage,
    'cost': calculateCost 
  }
  
  if(!isFalsy(cart)) {
    return methods[type](cart);
  }

  return 0;
} 

const countStorage = (cart) => {
  let count = 0;
  cart.forEach((item) => {
      count += item.quantity;
  })
  return count;
}

const calculateCost = (cart) => {
  let total = 0;
  cart.forEach((item) => {
    total += (item.quantity * item.cost);
  })
  return total;
}

export { clone, extractItemIndex, isFalsy, sumController, createTooltip, cartValuesIdentical };