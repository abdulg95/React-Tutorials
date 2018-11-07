//imports
import React, { Component } from 'react';
import './App.css';
import ColorSwitcher from './container/ColorSwitcher/ColorSwitcher'
//main container for react app
class App extends Component {
  render() {
    return (
      <div className="App">
      {/*creates a color switching component */}
      <ColorSwitcher/>
      </div>
    );
  }
}

export default App;
