import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Person from "./Person/Person";

class Persons extends PureComponent{


    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
    } PureComponent already implements shouldComponentUpdate for every props element
    */

    render() {
        return this.props.persons.map((person, index) => {
                return (<Person
                    click={() => this.props.clicked(index)}
                    firstname={person.name}
                    lesson={person.lesson}
                    key={person.id}
                    nameChange={(event) => this.props.changed(event, person.id)}/>)
            }
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    firstName: PropTypes.string,
    lesson: PropTypes.number,
    nameChange: PropTypes.func
}

export default Persons;