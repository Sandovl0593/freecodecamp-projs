import "./App.css";
import React from "react";
import quotes from "./quotes.js";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.handleIndex = this.handleIndex.bind(this);
  }
  handleIndex() {
    this.setState((state) => ({
      index: Math.floor(Math.random() * quotes.length),
    }));
  }

  render() {
    let randomQuote = quotes[this.state.index];
    let author = randomQuote.author;
    let textURL = `${randomQuote.text} - ${author}`
      .split(" ")
      .join("%20")
      .split("@")
      .join("%40")
      .split("!")
      .join("%21");

    let link = "https://www.twitter.com/intent/tweet?text=" + textURL;

    return (
      <div
        id="quote-box"
        className="d-flex flex-column border border-secondary"
      >
        <div id="text" className="p-4">
          {randomQuote.text}
        </div>
        <div id="author" className="py-2">
          <span className="font-weight-bold">Author:</span> {author}
        </div>
        <div id="buttons" className="text-center w-100 d-inline-flex p-2">
          <a
            onClick={this.handleIndex}
            id="new-quote"
            className="btn btn-lg btn-success"
          >
            New Quote
          </a>
          <a
            id="tweet-quote"
            className="btn btn-lg btn-primary"
            href={link}
            target="_blank"
          >
            Tweet Quote
          </a>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <>
      <h1 className="text-secondary">Quote Random</h1>
      <QuoteBox />
    </>
  );
}

export default App;
