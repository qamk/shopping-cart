import ImageBox from './ImageBox';
import InfoBox from './InfoBox';

const Item = (props) => {
  const { imgData, ...itemData} = props.details;

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
