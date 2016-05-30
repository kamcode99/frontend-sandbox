import React, {Component} from 'react';
import ReactDOM from 'react-dom';


// Functional based React Component Example
function App1() {
    return (
      <div>
        Hello there! This is a functional React Component.
      </div>
    )
}


// Class based React Component Example
class App2 extends Component {
  render() {
    return (
      <div>
        Hello there! This is a class based React Component.
      </div>
    )
  }
}


// Render React Comoponents
ReactDOM.render(
  <div>
    <App1 />
    <App2 />
  </div>,
  document.querySelector('.app-container')
);
