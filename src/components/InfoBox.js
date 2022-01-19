
const InfoBox = ({ details }) => {
  return(
    <div>
      From Info Box:
      <div>
        <h3>{details.name}</h3>
      </div>

      <div>
        <p>{details.description}</p>
      </div>
    </div>
  )
}

export default InfoBox;