import { useState } from "react";
import Tweet from "./Tweet";
import NewTweet from "./NewTweet";

const TweetFeed = (props) => {

  return (
    <div>
      {props.tweets.map((tweet) => (
          <Tweet
          text={tweet.text}
          />
        ))}
    </div>
  );
};

export default TweetFeed;
