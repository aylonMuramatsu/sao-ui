import React, { Component } from 'react';
import logo from './logo.svg';
// import Login from './views/login';
import Model from './components/modal/model';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Model 
          title="Alerta!"
          message="Hello World"
        />
      </div>
    );
  }
}

export default App;
