import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [emoji, setEmoji] = useState();
  function inputHandler(event) {
    setEmoji(event.target.value);
    console.log(event.target.value);
  }
  return (
    <div className="App">
      <h1 className="mainHeading">Emoji Translator</h1>
      <input type="text" onChange={() => inputHandler(event)} />
      <p>{emoji}</p>
    </div>
  );
}
