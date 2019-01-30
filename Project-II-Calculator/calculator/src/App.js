import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      total: 0,
      operation: '',
      showTotal: false,
    }

    this.handleAction = this.handleAction.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
  }

  handleNumber(number) {
    console.log("Handling number " + number);
    this.setState({
      value: number
    });
  }

  handleAction(action) {
    switch (action) {
      case '+':
      break;

      case 'x':
      break;
    }
  }

  clearDisplay() {
    this.setState({value: 0, total: 0, showTotal: false});
  }

  render() {
    const displayValue = this.state.showTotal ? this.state.total 
      : this.state.value;
    return (
      <div className="calculator-container">
        <CalculatorDisplay value={displayValue} />
        <div className="button-row">
          <ActionButton text={'clear'} buttonStyle="clear-button" onClick={this.clearDisplay} />
          <ActionButton text={'÷'} buttonStyle="action-button" />
        </div>
        <div className="button-row">
          <NumberButton text={7} buttonStyle="button-class" />
          <NumberButton text={8} buttonStyle="button-class" />
          <NumberButton text={9} buttonStyle="button-class" />
          <ActionButton text={'×'} buttonStyle="action-button" />
        </div>
        <div className="button-row">
          <NumberButton text={4} buttonStyle="button-class" />
          <NumberButton text={5} buttonStyle="button-class" />
          <NumberButton text={6} buttonStyle="button-class" />
          <ActionButton text={'-'} buttonStyle="action-button" />
        </div>
        <div className="button-row">
          <NumberButton text={1} buttonStyle="button-class" onClick={() => this.handleNumber(1)} />
          <NumberButton text={2} buttonStyle="button-class" />
          <NumberButton text={3} buttonStyle="button-class" />
          <ActionButton text={'+'} buttonStyle="action-button" />
        </div>
        <div className="button-row">
          <ActionButton text={0} buttonStyle="zero-button" />
          <ActionButton text={'='} buttonStyle="action-button" />
        </div>
      </div>
    );
  }
};

export default App;
