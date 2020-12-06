import React from "react";
import "./styles.css";

export default function App() {
  var userName = prompt("Enter Name");
  return (
    <div className="App">
      <h1 className="mainHeading">Emoji Translator</h1>
      <h1>
        Welcome <span Style="Color: blue;">{userName}</span>
      </h1>
    </div>
  );
}
