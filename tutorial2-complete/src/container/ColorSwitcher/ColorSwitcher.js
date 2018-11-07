import React, {Component} from 'react';
import Card from  '../../components/Card/Card';
//class with state that will be used for manipulating components
class ColorSwitcher extends Component {
    //store index of card color in state 
    state = {
        colorIndex: 0
    }
    //click handler which updates value inside state
    onToggleColor = () =>{
        this.setState({   colorIndex: (this.state.colorIndex+1)%4   }  );
    }

    render(){
        //create card and pass current index no from state as prop
        let card = <Card colorNo={this.state.colorIndex}/> 
         return(
             //display toggle button and card 
             <div>
                 <button onClick={this.onToggleColor}>Toggle</button>
                 {card}                 
             </div>
             
             );
        

    }
}
export default ColorSwitcher;

