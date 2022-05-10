import './Tweet.css'

const Tweet = (props) => {
  return (
    <div>
    <div className="tweetfeed">
      {props.text}
      
    </div>
    <br></br>
    </div>
  )
}
export default Tweet