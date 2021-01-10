import React, {Component} from 'react'
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
    render()
    {
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>Here are props {this.props.firstname}, {this.props.lesson} and lastly
                    children {this.props.children}</p>
                <input onChange={this.props.nameChange} value={this.props.firstname}/>
            </div>
        );
    }
}

export default Person;