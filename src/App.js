import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {name:'Manu', lesson:28},
      {name:'Another Name', lesson:51}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons:[
        {name:'Changed Manu', lesson:25},
        {name:'Another name', lesson: 51}
      ]
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.switchNameHandler}>Change Name</button>
          <Person firstname={this.state.persons[0].name} lesson={this.state.persons[0].lesson}>First children</Person>
          <Person firstname={this.state.persons[1].name} lesson={this.state.persons[1].lesson}></Person>
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
