import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {name:'Manu', lesson:28},
      {name:'Another Name', lesson:51}
    ],
    toggleVisible: false
  }

  switchNameHandler = (changedName) => {
    this.setState({
      persons:[
        {name: changedName, lesson:25},
        {name:'Another name', lesson: 51}
      ]
    })
  }

  toggleHandler = () => {
    const doToggle = this.state.toggleVisible;
    this.setState({toggleVisible: !doToggle})
  }

  deletePersonHandler = (index) => {
    const persons = this.state.persons
    persons.splice(index, 1)
    this.setState({persons: persons})
  }


  render(){

    let persons = null;

    if( this.state.toggleVisible ) {
      persons = (
          <div>
            {this.state.persons.map( (person, index) => {
              return <Person
                  click={this.deletePersonHandler.bind(this, index)}
                  firstname={person.name}
                  lesson={person.lesson}/>
            })}
            <button onClick={this.switchNameHandler.bind(this,'Changed Manu')}>Change Name</button>
          </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.toggleHandler}>Toggle</button>
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
