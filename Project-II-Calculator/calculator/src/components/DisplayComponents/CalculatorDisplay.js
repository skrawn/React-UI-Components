import React from 'react';
import './Display.css';

class CalculatorDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1000000000,
        };
    }

    render() {
        return(
            <div className="calculator-display">
                <text className="calculator-text" >{this.state.value}</text>
            </div>
        );
    }
}

export default CalculatorDisplay;
