import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import markdownText from "./markdown.js";
import "./App.css";

class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: markdownText,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState((state) => ({
      input: e.target.value,
    }));
  }

  render() {
    return (
      <div style={{ paddingBottom: "3em" }}>
        <div id="editor-box">
          <h3>Text</h3>
          <textarea id="editor" onChange={this.handleChange}>
            Your Markdown Text
          </textarea>
        </div>
        <br />
        <div>
          <h3>Preview</h3>
          <div id="preview">
            <MarkdownPreview source={this.state.input} />
          </div>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <>
      <h1>Markdown Previewer</h1>
      <Previewer />
    </>
  );
}

export default App;
