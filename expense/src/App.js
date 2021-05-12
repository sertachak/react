import './App.css';
import User from './components/User/User'
import UserList from './components/User/UserList'
import { useState} from "react";

function App() {
const [list, setList] = useState([]);

const addUserToList = (userName, age) => {
    console.log("here")
    setList( (previousUserList ) => {
        return[...previousUserList, {userName, age}];
    })
}

  return (
    <div className="App">
        <User addUser={addUserToList}/>
        <UserList users={list}/>
    </div>
  );
}

export default App;
