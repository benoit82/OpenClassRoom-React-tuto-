import React, { Component } from "react";
import GuessCount from "./GuessCount";
import Card from "./Card";
import "./App.css";

const Greeter = ({ whom }) => (
  <button onClick={() => console.log(`Bonjour ${whom}`)}>
    Vas-y, clique !
  </button>
);

class App extends Component {
  handleCardClick(card) {
    console.log(card, "clicked");
  }

  render() {
    return (
      <div className="memory">
        <GuessCount guesses={0} />
        <Card card="😀" feedback="hidden" onClick={this.handleCardClick} />
        <Card card="🎉" feedback="justMatched" onClick={this.handleCardClick} />
        <Card
          card="💖"
          feedback="justMismatched"
          onClick={this.handleCardClick}
        />
        <Card card="🎩" feedback="visible" onClick={this.handleCardClick} />
        <Card card="🐶" feedback="hidden" onClick={this.handleCardClick} />
        <Card card="🐱" feedback="justMatched" onClick={this.handleCardClick} />
        {/* <Greeter whom="Roberto" /> */}
      </div>
    );
  }
}

export default App;
