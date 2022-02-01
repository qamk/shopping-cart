import { useEffect, useRef, useState } from "react";
import Feedback from "./Feedback";
import { cartValuesIdentical } from "../assets/helpers/helperMethods";


const FeedbackLayout = ({cart, unmountCallback, message}) => {
  const [prevCart, setPrevCart] = useState([]);
  const [feedbackQueue, setFeedbackQueue] = useState([]);
  const intervalRef = useRef(null);
  
  useEffect(() => {

    intervalRef.current =
    setInterval(() => {
      setFeedbackQueue(fbq => fbq.slice(0, -1));
      }, 4000)
      
    }, [])
    
  useEffect(() => {
    
    if (!cartValuesIdentical(cart, prevCart)) {
      const feedback = [<Feedback message={message}/>, ...feedbackQueue]
      setPrevCart(cart);
      setFeedbackQueue(feedback);
    }
  }, [cart, prevCart, feedbackQueue, message])

  if ( (feedbackQueue.length === 0) && cartValuesIdentical(cart, prevCart)) {
    clearInterval(intervalRef);
    unmountCallback()
  }
  
  return(
    <div className="feedback-temp">
      { cartValuesIdentical(cart, prevCart) 
        ? feedbackQueue
        : null
      }
    </div>
  )


}

export default FeedbackLayout;
