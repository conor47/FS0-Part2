import React from 'react';

const Persons = ({contacts}) => {
    return (
        <div>
            {contacts.map(person => 
          <p key={person.name}> {person.name} : {person.number} </p>)}
        </div>
    )
}

export default Persons