import React from 'react';
const mailbox = (props) => {
    //adapted from react documentation     
    //create list of messages from passed in message prop
    let messageList =  props.messages.map((message) =>
    <li>{message}</li>
  );
    return(
    /*display messages as unordered list if there are any messages
    and indicate if there are no messages*/
    <div>
         {props.messages.length > 0 &&
        <div>
            <h2>
            You have {props.messages.length} messages.
            </h2>
            <ul>{messageList}</ul> 
        </div>           
      }
       {props.messages.length === 0 &&
        <div>
             <h2>
            You have no messages.
            </h2>
        </div>}

    </div>);    
     
   
}

export default mailbox;