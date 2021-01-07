import logo from '../logo.svg';
import classes from './App.css';
import React, {Component} from "react";
import styled from 'styled-components'
import Persons from '../components/Persons/Persons'

const StyledButton= styled.button`
  background-color: ${ (props) => { return props.alt === true ? 'red' : 'green' } };
  color: white;
  font: inherit;
  border: 1px solid #ccc;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => { return props.alt === true ? 'salmon' : 'lightgreen'}};
    color: black;
  }
`

class App extends Component {

  state = {
    persons: [
      {id: 'asdasd111',name:'Manu', lesson:28},
      {id: 'asdasdas2222', name:'Another Name', lesson:51}
    ],
    toggleVisible: false
  }

  switchNameHandler = (changedName) => {
    this.setState({
      persons:[
        {id:'asdasd111', name: changedName, lesson:25},
        {id:'asdasdas2222', name:'Another name', lesson: 51}
      ]
    })
  }

  inputNameHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( ( person ) => {
      return person.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })

  }

  toggleHandler = () => {
    const doToggle = this.state.toggleVisible;
    this.setState({toggleVisible: !doToggle})
  }

  deletePersonHandler = (index) => {
    //const persons = this.state.persons -> can lead problems because just use the original pointer of object
    const persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({persons: persons})
  }


  render(){

    let persons = null;

    if( this.state.toggleVisible ) {
      persons = (
          <div>
            <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.inputNameHandler}/>
            <button onClick={this.switchNameHandler.bind(this,'Changed Manu')}>Change Name</button>
          </div>
      );
    }

    return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <StyledButton alt={this.state.toggleVisible} onClick={this.toggleHandler} >Toggle</StyledButton>
              {persons}
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
    );
}}

export default App;
