import React from "react";
import { useSelector } from "react-redux";
import { selectUI } from "./AppSlice";

import "./App.css";

const App: React.FC = () => {
  return (
    <div id="app">
      {useSelector(selectUI).darkTheme ? (
        <link rel="stylesheet" type="text/css" href="./darkThemeStyles.css" />
      ) : null}
      <h1>Ayy lmao</h1>
    </div>
  );
};

export default App;
