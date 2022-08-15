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
    </div>
  );
};

export default App;
