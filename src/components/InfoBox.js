
const InfoBox = ({ details }) => {
  return(
    <div>
      <div>
        <h3 className="media-header title is-5 text-centre">{details.name}</h3>
      </div>

      <div>
        <p className="media-content content">{details.description}</p>
      </div>
    </div>
  )
}

export default InfoBox;