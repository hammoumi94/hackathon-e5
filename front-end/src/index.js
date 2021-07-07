import React, { Component } from 'react';
import { render } from 'react-dom';
import Ap from './App';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quiz: [
        {
          question: "How tall are you?",
          options: ["a1", "b1", "c1", "d1"],
          answer: "1"
        },{
          question: "How fast are you?",
          options: ["a2", "b2", "c2", "d2"],
          answer: "1"
        },{
          question: "How heavy are you?",
          options: ["a3", "b3", "c3", "d3"],
          answer: "1"
        },{
          question: "How heavy are you?",
          options: ["a3", "b3", "c3", "d3"],
          answer: "1"
        },{
          question: "How heavy are you?",
          options: ["a3", "b3", "c3", "d3"],
          answer: "1"
        },{
          question: "How heavy are you?",
          options: ["a3", "b3", "c3", "d3"],
          answer: "1"
        },{
          question: "How heavy are you?",
          options: ["a3", "b3", "c3", "d3"],
          answer: "1"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Ap quiz={this.state.quiz}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
