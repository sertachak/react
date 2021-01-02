import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import Radium from 'radium'
import Person from './Person/Person'

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

    const style={
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid #ccc',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if( this.state.toggleVisible ) {
      persons = (
          <div>
            {this.state.persons.map( (person, index) => {
              return <Person
                  click={this.deletePersonHandler.bind(this, index)}
                  firstname={person.name}
                  lesson={person.lesson}
                  key={person.id}
                  nameChange={( event ) => this.inputNameHandler(event, person.id)}/>
            })}
            <button onClick={this.switchNameHandler.bind(this,'Changed Manu')}>Change Name</button>
          </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.toggleHandler} style={style}>Toggle</button>
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

export default Radium(App);
