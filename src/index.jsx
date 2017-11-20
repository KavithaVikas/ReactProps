import React  from 'react';
import {render} from 'react-dom';
import Test from './components/Test.jsx';

class App extends React.Component{

    render(){
        return (
            <Test/>
        )
    }
}

render(<App/>, document.getElementById('root'));

