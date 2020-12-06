import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Happy",
  "😔": "Sad",
  "❤️": "Love",
  "👋": "Hello",
  "🧠": "Brain",
  "🔥": "Fire",
  "⚽": "FootBall",
  "⚾": "Baseball",
  "🏀": "Basketball",
  "🏐": "Volleyball"
};

export default function App() {
  var [emoji, setEmoji] = useState();
  function inputHandler(event) {
    setEmoji(event.target.value);
    if (emoji in emojiDictionary) {
      console.log(emojiDictionary[emoji]);
    } else {
      console.log("Dont know about this.");
    }
  }
  return (
    <div className="App">
      <h1 className="mainHeading">Emoji Translator</h1>
      <input type="text" onChange={() => inputHandler(event)} />
      <p>{emoji}</p>
    </div>
  );
}
