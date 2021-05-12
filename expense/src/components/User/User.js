import Card from '../Card/Card'
import classes from './User.module.css'
import Button from "../UI/Button/Button";
import {useState} from "react";

const User = (props) => {

    const [enteredUserName, setEnteredUserName] =useState('');
    const [enteredUserAge, setEnteredUserAge] =useState('');

    const addUserHandler = (event) => {
        console.log("asd")
        event.preventDefault();
        props.addUser(enteredUserName,enteredUserAge)
    };

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };

    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value);
    };

    return(
        <Card className={classes.input}>
            <form onSubmit={addUserHandler} className={classes.User}>
                <label htmlFor="username">UserName</label>
                <input id="username" type="text" onChange={userNameChangeHandler}/>
                <label htmlFor="age">Age</label>
                <input id="username" type="number" onChange={userAgeChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default User;