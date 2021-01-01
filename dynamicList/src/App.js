import './App.css';
import React, {Component} from 'react';
import ValidationComponent from "./Components/ValidationComponent";
import CharacterComponent from "./Components/CharComponent";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            inputLength: 0
        }
    }

    state={
        inputLength: 0,
        input: null
    }

    inputChangeListener = ( event ) => {
        this.setState({
            inputLength: event.target.value.length,
            input: event.target.value
        })
    }

    deleteCharHandler = ( event, index ) => {
        let tempInput = this.state.input
        tempInput = tempInput.split('')
        tempInput.splice(index, 1)
        tempInput = tempInput.join('')
        this.setState({
            input: tempInput
        })
    }

    render(){
        let totalText = null

        if(this.state.inputLength > 5 ) {
            const arrOfChars = this.state.input.toString().split('')
             totalText = (
                <div>
                    {arrOfChars.map( (letter, index) => {
                        return <CharacterComponent
                            characterOfText={letter}
                            deleteCharHandler={(event) => this.deleteCharHandler(event,index)}/>
                    })
                    }
                </div>
            );
        }

        return (
            <div className="App">
                <input onChange={this.inputChangeListener} value={this.state.input}/>
                <ValidationComponent lengthOfText={this.state.inputLength}/>
                {totalText}
            </div>
        );
    }
}

export default App;
