import React from 'react'
import Person from "./Person/Person";

const persons = (props) => {
    return props.persons.map((person, index) => {
            return (<Person
                click={() => props.clicked(index)}
                firstname={person.name}
                lesson={person.lesson}
                key={person.id}
                nameChange={(event) => props.changed(event, person.id)}/>)
        }
    )
}


export default persons