const Feedback = ({message = "A message"}) => {  

  return(
    <>
      <p className="content is-small">
        {message}
      </p>
    </>
  )

}

export default Feedback;