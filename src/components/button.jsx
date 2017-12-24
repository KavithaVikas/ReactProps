import React, {Component} from 'react';

 class Test extends Component{
    render(){
        return (
         <div>
               <button onClick={this.props.onButtonClick}> click me </button>
               </div>
           
        )
    }
}
module.exports = Test;