import React, { Component } from 'react';

import './Courses.css';
import Course from "../Course/Course";
import {Route, Switch} from "react-router-dom";

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    courseClickHandler = (course) => {
        this.props.history.push(`/courses/${course.id}/${course.title}`)
    }

    render () {
        return (
            <div>
                <div>
                    <h1>Amazing Udemy Courses</h1>
                    <section className="Courses">
                        {
                            this.state.courses.map(course => {
                                return <article onClick={() => this.courseClickHandler(course)}
                                                className="Course"
                                                key={course.id}>{course.title}</article>;
                            })
                        }
                    </section>
                </div>
                <Route path='/courses/:id/:title' component={Course}/>
            </div>
        );
    }
}

export default Courses;