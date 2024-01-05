import React from "react";
import "./App.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: "",
      num1: 0,
      num2: null,
    };
    this.handleNum = this.handleNum.bind(this);
    this.handleOp = this.handleOp.bind(this);
    this.setStateNum1 = this.setStateNum1.bind(this);
    this.setStateNum2 = this.setStateNum2.bind(this);
    this.setOperator = this.setOperator.bind(this);
    this.setOutput = this.setOutput.bind(this);
  }

  setStateNum1(val) {
    this.setState((s) => {
      s.num1 = val;
    });
  }

  setStateNum2(val) {
    this.setState((s) => {
      s.num2 = val;
    });
  }

  setOperator(val) {
    this.setState((s) => {
      s.operator = val;
    });
  }

  setOutput() {
    this.setState((s) => {
      s.output = `${this.state.num1} ${this.state.op} ${this.state.num2}`;
    });
  }

  // Handles numbers pressed
  handleNum(keypressed) {
    if (op == "") {
      num1 == 0 && keypressed !== "."
        ? this.setStateNum1(String(keypressed))
        : !String(num1).includes(".")
        ? this.setStateNum1(String(num1) + String(keypressed))
        : keypressed !== "."
        ? this.setStateNum1(String(num1) + String(keypressed))
        : console.log("float");
    } else {
      num2 == null && keypressed !== "."
        ? this.setStateNum2(String(keypressed))
        : !String(num2).includes(".")
        ? this.setStateNum2(String(num2) + String(keypressed))
        : keypressed !== "."
        ? this.setStateNum2(String(num2) + String(keypressed))
        : console.log("float");
    }
    this.setOutput();
  }

  // Handles operators pressed
  handleOp(opPressed) {
    if (opPressed === "AC") {
      this.setState((state) => ({ num1: 0, num2: null, operator: "" }));
    } else if (op === "") {
      this.setOperator(opPressed);
    } else if (opPressed === "=" && num2 !== null) {
      this.setState((state) => ({
        num1: eval(Number(num1) + op + Number(num2)),
        num2: null,
        operator: "",
      }));
    } else if (num2 !== null && op !== "" && num2 !== "-") {
      this.setState((state) => ({
        num1: eval(Number(num1) + op + Number(num2)),
        num2: null,
        operator: opPressed,
      }));
    } else if (op !== "" && num2 === null) {
      if (opPressed === "-") {
        this.setStateNum2(opPressed);
      } else {
        this.setOperator(opPressed);
      }
    } else if (num2 !== null) {
      this.setStateNum2(null);
      this.setOperator(opPressed);
    }
    this.setOutput();
  }

  render() {
    return (
      <div id="calculator">
        <div id="display">{this.state.output}</div>
        <div id="buttons">
          <button id="clear" onClick={this.handleOp("AC")}>
            AC
          </button>
          <button id="seven" onClick={this.handleNum(7)}>
            7
          </button>
          <button id="eight" onClick={this.handleNum(8)}>
            8
          </button>
          <button id="nine" onClick={this.handleNum(9)}>
            9
          </button>

          <button id="divide" onClick={this.handleOp("/")}>
            /
          </button>
          <button id="four" onClick={this.handleNum(4)}>
            4
          </button>
          <button id="five" onClick={this.handleNum(5)}>
            5
          </button>
          <button id="six" onClick={this.handleNum(6)}>
            6
          </button>

          <button id="multiply" onClick={this.handleOp("*")}>
            *
          </button>
          <button id="one" onClick={this.handleNum(1)}>
            1
          </button>
          <button id="two" onClick={this.handleNum(2)}>
            2
          </button>
          <button id="three" onClick={this.handleNum(3)}>
            3
          </button>

          <button id="subtract" onClick={this.handleOp("-")}>
            -
          </button>
          <button id="zero" onClick={this.handleNum(0)}>
            0
          </button>
          <button id="decimal" onClick={this.handleNum(".")}>
            .
          </button>
          <button id="equals" onClick={this.handleOp("=")}>
            =
          </button>
          <button id="add" onClick={this.handleOp("+")}>
            +
          </button>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <>
      <h1 className="text-secondary">Javascript Calculator</h1>
      <br />
      <div className="card-body w-100">
        <Calculator />
      </div>
    </>
  );
}

export default App;
