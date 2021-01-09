import React from 'react'
import logo from '../../logo.svg';
import styled from "styled-components";
import cockpitStyle from './Cockpit.module.css'

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

const cockpit = (props) => {
    return (
        <div className="Cockpit-div">
            <img src={logo} className="Cockpit-logo" alt="logo"/>
            <StyledButton alt={props.toggleVisible} onClick={props.toggleHandler}>Toggle</StyledButton>
        </div>);
}

export default cockpit;