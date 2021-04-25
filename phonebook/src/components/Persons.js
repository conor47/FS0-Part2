import React from 'react';

const Persons = ({contacts, handleClick}) => {
    return (
        <div>
            {contacts.map(person =>
            <li key={person.id}>
                {person.name} : {person.number}
                <span>        </span>
                <button onClick={() => handleClick(person.id)}>Delete</button>
            </li>
          )}
        </div>
    )
}

export default Persons