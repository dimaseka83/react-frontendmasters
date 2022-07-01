import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese"></Pet>
      <Pet name="Pepper" animal="bird" breed="Cocktail"></Pet>
      <Pet name="Doink" animal="cat" breed="Mix"></Pet> 
    </div>
  )
}



ReactDOM.render(<App/>, document.getElementById("root"));
