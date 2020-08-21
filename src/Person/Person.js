import React from 'react';
import './Person.css'

const person = (props) => {
return (
    <div className="UserOutput">
        <h1>I am {props.name} I am {props.age}</h1>
        <h1>{props.children}</h1>
    </div>
)
}


export default person;