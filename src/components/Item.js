import ImageBox from './ImageBox';
import InfoBox from './InfoBox';

const Item = (props) => {
  // console.log('Item: props');
  // console.log(props);
  const { imgData, ...itemData} = props.details;
  // console.log('Item: imgData');
  // console.log(imgData);
  // console.log('Item: itemData');
  // console.log(itemData);
  // console.log('-----------------------');

  return (
    <>
      <div className="mb-1 media card">
        <ImageBox {...imgData}/>
        <InfoBox details={ itemData }/>
          {props.children}
      </div>
    </>
  );
};

export default Item;
