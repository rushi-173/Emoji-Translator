import React from "react";
import "./styles.css";

export default function App() {
  let likeCounter = 0;
  function likeBtnHandler() {
    likeCounter += 1;
    console.log(likeCounter);
  }
  return (
    <div className="App">
      <h1 className="mainHeading">Emoji Translator</h1>
      <button onClick={likeBtnHandler}> Like </button>
    </div>
  );
}
