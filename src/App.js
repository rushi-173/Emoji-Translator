import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [likeCount, setLikeCounter] = useState(0);
  function likeBtnHandler() {
    setLikeCounter((likeCount += 1));
    console.log(likeCount);
  }
  return (
    <div className="App">
      <h1 className="mainHeading">Emoji Translator</h1>
      <button onClick={likeBtnHandler}> Like </button>
      <h2> {likeCount} </h2>
    </div>
  );
}
