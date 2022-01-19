import ImageBox from './ImageBox';
import InfoBox from './InfoBox';

const Item = (props) => {
  const { imgData, ...itemData} = props.details;
  return (
    <>
      From Item:
      <article>
        <ImageBox details={imgData}/>
        <InfoBox details={ itemData }/>
          {props.children}
      </article>
    </>
  );
};

export default Item;
