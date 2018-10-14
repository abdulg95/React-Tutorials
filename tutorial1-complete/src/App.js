import React, { Component } from 'react';
import './App.css';
import Student from  './Student/Student';

class App extends Component {
  render() {
    return (
      //this creates a new student
      <div className="App">      
       <Student />
       <Student/>
      </div>
    );
  }
}

export default App;
