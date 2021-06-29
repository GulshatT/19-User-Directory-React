import React from 'react'

function Users(props) {
    return (

        <p>{props.employees.map((element) => (
            <h1>{`${element.name.title} ${element.name.first} ${element.name.last}`} </h1>
        ))}</p>


    )
}

export default Users;