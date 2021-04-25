import React from 'react'

const FullView = (country) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <p>{country.capital}</p>
            <p>population : {country.population}</p>
            <h2>Languages</h2>
            {country.languages.forEach(language => 
                <p key={Math.random()}>{language.name}</p>
            )}
        </div>
    )
}

export default FullView