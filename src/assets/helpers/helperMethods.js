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

export { clone, extractItemIndex };