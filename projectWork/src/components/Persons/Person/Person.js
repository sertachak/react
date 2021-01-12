import React, {Component} from 'react'
import AuthenticationContext from '../../../context/authenticationContext'
import classes from './Person.module.css'
import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;


class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render()
    {
        return (
            <div className={classes.Person}>
                <AuthenticationContext.Consumer>
                    {(context) => { return (context.authenticated ? <p>Authenticated!</p> : <p>Please authenticate</p>)}}
                </AuthenticationContext.Consumer>
                <p onClick={this.props.click}>Here are props {this.props.firstname}, {this.props.lesson} and lastly
                    children {this.props.children}</p>
                <input ref={this.inputElementRef} onChange={this.props.nameChange} value={this.props.firstname}/>
            </div>
        );
    }
}

export default Person;