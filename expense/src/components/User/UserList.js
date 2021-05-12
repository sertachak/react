import Card from './../Card/Card'
import classes from './UserList.module.css'

 const userList = (props) => {
    console.log(props.users)
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user,i) => {
                   return (
                    <li key={i}>
                        {user.name} ( {user.age} years old )
                    </li>
                   )
                })}
            </ul>
        </Card>
    )
 };

 export default userList;