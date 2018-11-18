import React, { Component } from 'react';
import './App.css';
//import mailbox component
import Mailbox from './Components/Mailbox';

class App extends Component {
  /*state holds property for checking if user is logged in,
  if messages should be shown and the messages thenselves*/
  state={
    isLoggedIn:false,
    showMessages:false,
    messages: ["hi", "how are you", "whats up"]
  }
  //click handler for login/logout button
  handleLogin = () => {
    //toggles between true and false
    this.setState({isLoggedIn: !this.state.isLoggedIn});
  }
  
  //click handler for show message button
  showMessageHandler = () => {
     //toggles between true and false
    this.setState({showMessages: !this.state.showMessages});
  }

  render() {
    //set initial values for greeting, mailbox, and toggle message button when logged out
    let userGreeting = <h1>Log in!</h1>;
    let mailbox = null;
    let toggleMessages = null;     
    if(this.state.isLoggedIn){
    //changes initial values after logging in
    userGreeting = <h1>Welcome Back!</h1>; 
    //pass messages from state as prop to mailbox component
    mailbox = <Mailbox messages = {this.state.messages}/>;
    toggleMessages = 
      <button onClick={this.showMessageHandler}>
        {this.state.showMessages  ? 'Hide Messages' : 'Show Messages'}
      </button> 
    }
    return ( 
      //display user greeting along with message toggle button and login button   
      <div >
       {userGreeting}
       {toggleMessages}
       {this.state.showMessages  ? mailbox : null}
       <button onClick={this.handleLogin}>
        {this.state.isLoggedIn  ? 'Log out' : 'Log in'}
      </button>
      </div>     
    );    
  
}
}

export default App;
