import React  from 'react';
import {render} from 'react-dom';
import Button from './components/button.jsx';
import ChildComponent from './components/childComponent.jsx';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            text : false
        }

        this.onClickButton = this.onClickButton.bind(this);
        this.toggleText = this.toggleText.bind(this);
        
    }
    onClickButton(){
            this.setState({
                text : !this.state.text
            })
        }
        toggleText(){
            return this.state.text ? 'I am a good boy':'I am a naughty boy';
             }

    render(){
        return (
            <div>
            <ChildComponent toggle = {this.toggleText}/>
            <Button onButtonClick = {this.onClickButton}/>
            </div>
            
        )
    }
}

render(<App/>, document.getElementById('root'));

