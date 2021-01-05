import React from 'react'
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


const person = (props) => {
    /*const style = {
        '@media (min-width: 600px)': {
            width: '450px'
        }
    };*/

    return(
        <div className={classes.Person}>
            <p onClick={props.click}>Here are props {props.firstname}, {props.lesson} and lastly
                children {props.children}</p>
            <input onChange={props.nameChange} value={props.firstname}/>
        </div>
    );
}

export default person