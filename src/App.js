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

  nameChangeHandler = (event) => {
    this.setState({
      persons:[
        {name: 'Manu', lesson:25},
        {name: event.target.value, lesson: 51}
      ]
    })
  }

  toggleHandler = () => {
    const doToggle = this.state.toggleVisible;
    this.setState({toggleVisible: !doToggle})
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.toggleHandler}>Toggle</button>
          { this.state.toggleVisible === true ?
            <div>
            <button onClick={this.switchNameHandler.bind(this,'Changed Manu')}>Change Name</button>
            <Person
                firstname={this.state.persons[0].name}
                lesson={this.state.persons[0].lesson}
                click={this.switchNameHandler.bind(this, 'Max!!')}>First children
            </Person>
            <Person
                firstname={this.state.persons[1].name}
                lesson={this.state.persons[1].lesson}
                nameChange={this.nameChangeHandler}>
            </Person>
          </div> : null
          }
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
