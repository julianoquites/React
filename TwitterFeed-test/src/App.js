import { useState } from "react";
import "./App.css";
import NewTweet from "./components/NewTweet";
import TweetFeed from "./components/TweetFeed";

const DUMMY_TWEETS = [
  {text: "Testezinho 1" },
  {text: "Testezinho 2" },
];

const App = () => {
  const [tweets, setTweets] = useState(DUMMY_TWEETS)

  const addTweetHandler = tweet => {
    setTweets(prevTweets => {
      return [tweet, ...prevTweets]
    });
  }

  return (
    <div className="App">
      <NewTweet onAddTweet={addTweetHandler} />
      <TweetFeed tweets={tweets} />
    </div>
  );
}

export default App;
