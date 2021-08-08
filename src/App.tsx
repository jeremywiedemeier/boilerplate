import React from "react";
import { useSelector } from "react-redux";
import { selectUI } from "./AppSlice";
import alien from "./assets/alien.svg";
import "./App.css";

const App: React.FC = () => {
  return (
    <div id="app">
      {useSelector(selectUI).darkTheme ? (
        <link rel="stylesheet" type="text/css" href="./darkThemeStyles.css" />
      ) : null}
      <img alt="alien" src={alien} />
      Ayy lmao
    </div>
  );
};

export default App;
