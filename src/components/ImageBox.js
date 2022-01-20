const ImageBox = ({alt, src = ''}) => {
  return(
    <figure>
      From Image Box:
      <img src={src} alt={alt} />
    </figure>
  )
}

export default ImageBox;