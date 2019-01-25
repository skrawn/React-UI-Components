import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="calculator-container">
      <CalculatorDisplay />
      <div className="button-row">
        <ActionButton text={'clear'} buttonStyle="clear-button" />
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
        <NumberButton text={1} buttonStyle="button-class" />
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
};

export default App;
