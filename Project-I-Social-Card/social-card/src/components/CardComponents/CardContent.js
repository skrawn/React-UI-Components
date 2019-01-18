import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="card-content">
            <div className="card-text">
                <h4>Get started with React</h4>
                <p>
                    React makes it painless to create interactive UIs. Design
                    simple views for each state in your application.
                </p>
                <small>reactjs.org</small>
            </div>
        </div>
    );
};

export default CardContent;
