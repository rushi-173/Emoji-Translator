import React from "react";
import "./styles.css";

export default function App() {
  var name = "Rushikesh";
  return (
    <div className="App">
      <h1 className="mainHeading">Emoji Translator</h1>
      <h2>
        Welcome <span Style="Color: red;">{name}</span>
      </h2>
    </div>
  );
}
