import "./NewTweet.css";
import { useState } from "react";

const NewTweet = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const tweetData = {
      text: enteredText,
    };
    props.onAddTweet(tweetData);

    var x = { user_id: 1, body: tweetData.text };

    fetch("http://localhost:8000/post/create", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
      body: JSON.stringify({ user_id: 1, body: tweetData.text }),
    });

    setEnteredText("");
  };

  return (
    <form onSubmit={submitHandler}>
      <br></br>
      <textarea
        value={enteredText}
        onChange={textChangeHandler}
        className="tweet"
        placeholder="O que está acontecendo?"
        maxLength="254"
        rows="8"
        cols="15"
      ></textarea>
      <br></br>
      <button type="submit" className="button">
        Tweetar
      </button>
    </form>
  );
};

export default NewTweet;
