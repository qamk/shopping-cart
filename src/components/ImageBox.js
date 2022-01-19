const ImageBox = ({alt, src = ''}) => {
  console.log('Image: alt text');
  console.log(alt);
  console.log('----------------------')
  return(
    <figure>
      From Image Box:
      <img src={src} alt={alt} />
    </figure>
  )
}

export default ImageBox;