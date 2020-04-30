import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Components/Title";
import Scoreboard from "./Components/Scoreboard";

function App() {
  return (
    <div>
      <header>
        <Title />
      </header>
      <main>
        <Scoreboard />
      </main>
    </div>
  );
}

export default App;
