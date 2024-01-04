import React from "react";
import "./App.css";

const operationOptions = ["add", "subtract", "multiply", "divide"];

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      acumulativeOutput: "",
      workingOperation: "",
      output: "",
    };
    this.calculate = this.calculate.bind(this);
    this.noOperation = this.noOperation.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
  }

  calculate(num1, num2, op) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    const result = {
      add: function () {
        return num1 + num2;
      },
      subtract: function () {
        return num1 - num2;
      },
      multiply: function () {
        return num1 * num2;
      },
      divide: function () {
        return num1 / num2;
      },
    };

    return result[op]().toString();
  }

  noOperation(argum) {
    if (argum === "decimal") {
      this.setState((state) => {
        state.input = "0.";
      });
    } else if (argum === "negative-value") {
      if (this.state.input.indexOf("-1") === -1) {
        this.setState((state) => {
          state.input = "-" + state.input;
        });
      } else if (this.state.input.indexOf("-1") > -1) {
        this.setState((state) => {
          state.input = state.input.slice(1, state.input.length);
        });
      }
    } else {
      this.setState((state) => {
        state.input = argum;
      });
    }
  }

  updateDisplay(argum) {
    if (this.state.input === "0" && operationOptions.indexOf(argum) === -1) {
      this.noOperation(argum);
    } else if (operationOptions.indexOf(argum) >= 0) {
      if (this.state.acumulativeOutput === this.state.input) {
        // Operand button pressed twice exeception
        this.setState((state) => {
          state.workingOperation = argum;
        });
      } else if (this.state.workingOperation === "") {
        // Dealing without an operand
        this.setState((state) => {
          state.workingOperation = argum;
          state.output = this.state.acumulativeOutput;
          state.input = 0;
        });
      } else {
        const toOper = this.calculate(
          this.state.acumulativeOutput,
          this.state.input,
          this.state.workingOperation
        );
        this.setState((state) => ({
          input: 0,
          acumulativeOutput: toOper,
          workingOperation: argum,
          output: toOper,
        }));
      }
    } else if (argum === "equals") {
      const toOper = this.calculate(
        this.state.acumulativeOutput,
        this.state.input,
        this.state.workingOperation
      );

      this.setState((state) => ({
        input: toOper,
        acumulativeOutput: "0",
        workingOperation: "",
        output: 0,
      }));
    } else if (argum === "decimal") {
      if (this.state.input.indexOf(".") === -1) {
        this.setState((state) => {
          state.input += ".";
        });
      }
    } else {
      this.noOperation(argum);
    }
  }

  clearDisplay() {
    this.setState((state) => {
      state.input = "0";
      state.acumulativeOutput = 0;
      state.output = 0;
    });
  }

  render() {
    return (
      <div id="calculator">
        <div id="display">{this.state.input}</div>
        <button id="clear" onClick={this.clearDisplay()}>
          AC
        </button>
        <button id="seven" onClick={this.updateDisplay(7)}>
          7
        </button>
        <button id="eight" onClick={this.updateDisplay(8)}>
          8
        </button>
        <button id="nine" onClick={this.updateDisplay(9)}>
          9
        </button>

        <button id="divide" onClick={this.updateDisplay("divide")}>
          /
        </button>
        <button id="four" onClick={this.updateDisplay(4)}>
          4
        </button>
        <button id="five" onClick={this.updateDisplay(5)}>
          5
        </button>
        <button id="six" onClick={this.updateDisplay(6)}>
          6
        </button>

        <button id="multiply" onClick={this.updateDisplay("multiply")}>
          *
        </button>
        <button id="one" onClick={this.updateDisplay(1)}>
          1
        </button>
        <button id="two" onClick={this.updateDisplay(2)}>
          2
        </button>
        <button id="three" onClick={this.updateDisplay(3)}>
          3
        </button>

        <button id="subtract" onClick={this.updateDisplay("subtract")}>
          -
        </button>
        <button id="zero" onClick={this.updateDisplay(0)}>
          0
        </button>
        <button id="decimal" onClick={this.updateDisplay("decimal")}>
          .
        </button>
        <button id="equals" onClick={this.updateDisplay("equals")}>
          =
        </button>
        <button id="add" onClick={this.updateDisplay("add")}>
          +
        </button>
        <div id="result"> {this.state.output}</div>
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
