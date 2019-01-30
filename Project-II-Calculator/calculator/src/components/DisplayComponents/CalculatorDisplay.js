import React from 'react';
import './Display.css';

class CalculatorDisplay extends React.Component {
  render() {
    return (
      <div className="calculator-display">
        <text className="calculator-text">{this.props.value}</text>
      </div>
    );
  }
}

export default CalculatorDisplay;
