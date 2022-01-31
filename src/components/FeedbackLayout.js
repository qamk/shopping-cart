import { useEffect, useState } from "react";
import Feedback from "./Feedback";
import { cartValuesIdentical } from "../assets/helpers/helperMethods";


const FeedbackLayout = (props) => {
  const [prevCart, setPrevCart] = useState([]);
  const [feedbackQueue, setFeedbackQueue] = useState([]);
  
  useEffect(() => {
    const intervalId =
      setInterval(() => {
        setFeedbackQueue(fbq => fbq.slice(0, -1));
      }, 4000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {

    if (!cartValuesIdentical(props.cart, prevCart)) {
      const feedback = [<Feedback delay={4}/>, ...feedbackQueue]
      setPrevCart(props.cart);
      setFeedbackQueue(feedback);
    }
  }, [props.cart, prevCart, feedbackQueue])
  
  if (feedbackQueue.length > 0) {
    console.log('Prepended FeedbackQueue');
    console.log(feedbackQueue);
  }

  
  console.log('feedback layout --------------------------------')
  return(
    <div className="tooltip">
      { cartValuesIdentical(props.cart, prevCart) 
        ? feedbackQueue
        : null
      }
    </div>
  )


}

export default FeedbackLayout;
