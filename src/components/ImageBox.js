const ImageBox = ({alt, src = ''}) => {
  return(
    <figure className="figure media-image">
      <img src={src} alt={alt} />
    </figure>
  )
}

export default ImageBox;