import React from 'react'
import Card from '../Card/Card'
import classes from './User.module.css'
import Button from "../UI/Button/Button";
import {useState} from "react";
import ErrorModal from "../UI/Modal/ErrorModal";

const User = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');
    const [error, setError] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title:'Cannot submit empty value',
                message:'Please fill the required areas'
            })
        }
        props.addUser(enteredUserName,enteredUserAge)
    };

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };

    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }

    return(
        <React.Fragment>
            {error && <ErrorModal error={error} onConfirm={errorHandler}/> }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler} className={classes.User}>
                    <label htmlFor="username">UserName</label>
                    <input id="username" type="text" onChange={userNameChangeHandler}/>
                    <label htmlFor="age">Age</label>
                    <input id="username" type="number" onChange={userAgeChangeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    )
}

export default User;