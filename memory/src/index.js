import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

/** Chapitre : "Ecrivez des fonctions pures"
function CoolComponent({ prop, toto }) {
  return (
    <p>
      {toto} is {prop} cool !
    </p>
  );
}
ReactDOM.render(
    <CoolComponent toto="toto" prop="so" />,
    document.getElementById("root")
    );
*/

ReactDOM.render(<App />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
