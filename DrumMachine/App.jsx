import React from "react";
import "./App.css";

const hotKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

class DrumBox extends React.Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  play(el) {
    const audio = window.document.getElementById(el);
    audio.play();
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(e) {
    const keyPressed = e.key.toUpperCase();
    if (keyPressed in hotKeys) {
      this.play(keyPressed);
    }
  }

  render() {
    return (
      <div id="drum-machine" className="btn btn-light text">
        <div class="text-center pb-2 text-dark-emphasis" id="display">
          {/* {this.state.displayaudio} */}
        </div>
        {hotKeys.map((el) => (
          <button
            key={el}
            className="drum-pad btn col-3 btn-dark"
            id={`drum-${el}`}
            onClick={this.play(el)}
          >
            {el}
            <audio src={`./assets/${el}.mp3`} className="clip" id={el} />
          </button>
        ))}
      </div>
    );
  }
}

function App() {
  return (
    <>
      <h1 className="text-secondary">Drum Machine</h1>
      <br />
      <div className="card-body w-100">
        <DrumBox />
      </div>
    </>
  );
}

export default App;
