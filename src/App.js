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

let emojiList = Object.keys(emojiDictionary);

export default function App() {
  var [emoji, setEmoji] = useState("");
  var [meaning, setMeaning] = useState("");

  function inputHandler(event) {
    const inEmoji = event.target.value;
    setEmoji(inEmoji);
    if (inEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inEmoji]);
    } else {
      setMeaning("I don't know about this one.");
    }
  }

  function clickEmojiHandler(inputItem) {
    setEmoji(inputItem);
    setMeaning(emojiDictionary[inputItem]);
  }

  return (
    <div className="App">
      <nav>
        <h1 className="mainHeading">Emoji Translator</h1>
      </nav>
      <section>
        <input
          type="text"
          onChange={() => inputHandler()}
          style={{ width: "70%", padding: "0.4rem" }}
          placeholder="Paste your emoji here!"
        />
        <p style={{ marginTop: "2rem", marginBottom: "0", fontSize: "2rem" }}>
          {emoji}
        </p>
        <p style={{ marginTop: "0rem", fontSize: "2rem", fontWeight: "bold" }}>
          {meaning}
        </p>
        {emojiList.map((item) => {
          return (
            <span
              key={item}
              style={{
                fontSize: "x-large",
                cursor: "pointer",
                padding: "0.5rem"
              }}
              onClick={() => clickEmojiHandler(item)}
            >
              {item}
            </span>
          );
        })}
      </section>
      <footer className="footer">
        <p className="footer-title"> Made with love by rushi. </p>
      </footer>
    </div>
  );
}
