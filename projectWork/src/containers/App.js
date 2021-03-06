import logo from '../logo.svg';
import classes from './App.css';
import React, {Component} from "react";
import styled from 'styled-components'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../hoc/WithClass'
import AuthenticationContext from '../context/authenticationContext'

class App extends Component {

  state = {
    persons: [
      {id: 'asdasd111',name:'Manu', lesson:28},
      {id: 'asdasdas2222', name:'Another Name', lesson:51}
    ],
    toggleVisible: false,
    cockpitVisible: true,
    changeCounter: 0,
    authenticated: false
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

    this.setState( (prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    })

  }

  toggleHandler = ( name, toggle ) => {
    console.log(toggle);
    const doToggle = toggle;
    this.setState({[name]: !doToggle})
  }

  deletePersonHandler = (index) => {
    //const persons = this.state.persons -> can lead problems because just use the original pointer of object
    const persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({persons: persons})
  }

  loginHandler = () => {
    this.setState({
      authenticated: !this.state.authenticated
    })
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
          <WithClass className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <button onClick={() => this.toggleHandler('cockpitVisible',this.state.cockpitVisible)}>Remove Cockpit</button>
              <AuthenticationContext.Provider value={{authenticated:this.state.authenticated, login: this.loginHandler}}>
              {this.state.cockpitVisible ?
                  <Cockpit toggleHandler={() => this.toggleHandler('toggleVisible', this.state.toggleVisible)}
                           toggleVisible={this.state.toggleVisible}/> :
                  null
              }
              {persons}
              </AuthenticationContext.Provider>
            </header>
          </WithClass>
    );
}}

export default App;
