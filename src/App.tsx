import React from "react";
import "./App.css";
import alien from "./assets/alien.svg";

const App: React.FC = () => {
  return (
    <div id="app">
      <img alt="alien" src={alien} />
      Ayy lmao
    </div>
  );
};

export default App;
