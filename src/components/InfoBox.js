
const InfoBox = ({ details }) => {
  return(
    <>
      <div className="media-header">
        <h3 className="title is-5 text-centre">{details.name}</h3>
      </div>

      <div className="media-content">
        <p className="content">{details.description}</p>
      </div>

      <div className="media-side">
        <p className="content">£{details.cost}</p>
      </div>
    </>
  )
}

export default InfoBox;