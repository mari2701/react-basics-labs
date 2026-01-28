import React from 'react';

const Task = (props) => {
    
       return (
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Priority: {props.priority}</p>
            <p>Due: {props.deadline}</p>
            <p className="describe">{props.description}</p>
        </div>
    )


}


export default Task;
