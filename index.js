import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from './Form';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div style={{textAlign:'center'}}>
      <h1 style={{backgroundColor:'lightgray'}}>Mad Music Library</h1>
        <Form />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
