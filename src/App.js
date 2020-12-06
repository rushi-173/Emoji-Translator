import React from "react";
import "./styles.css";

export default function App() {
  function likeBtnHandler() {
    console.log("liked");
  }
  return (
    <div className="App">
      <h1 className="mainHeading">Emoji Translator</h1>
      <button onClick={likeBtnHandler}> Like </button>
    </div>
  );
}
