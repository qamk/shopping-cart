import { useEffect, useState } from "react";

const Feedback = ({message = "A message", delay = null}) => {
  const [display, setDisplay] = useState(true);
  
  useEffect(() => {
    if (delay && display) {
      setTimeout(() => {
        setDisplay(false);
      }, 4 * 1000)
    }
  })
  

  return(
    <>
      { display
        ? (
            <p className="content is-small">
              {message}
            </p>
          )
        : null
      }
    </>
  )

}

export default Feedback;