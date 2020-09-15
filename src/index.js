import React, {Fragment} from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Header from "./Components/Header";
import Quiz from "./Components/Quiz";

//imported font
import "./fonts/BungeeOutline-Regular.ttf";

//imported font 2 
import "./fonts/Bungee-Regular.ttf";

function App() {
  return (
    <Fragment>
      {/**Header components */}
      <Header />

      {/**Quiz components* */}
      <Quiz />
    </Fragment>
  )
}

const rootElement = document.getElementById("root");
//reader method for react
ReactDOM.render(<App />, rootElement);