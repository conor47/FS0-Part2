import React from 'react'
import FullView from './FullView'

const Display = ({countriesToshow}, search) => {
    console.log(countriesToshow);

    if(countriesToshow.length <=10 && countriesToshow.length >=1 && search){
        return (
            <div>
                {countriesToshow.map(country => 
                 <FullView country={country} key={Math.random()} />   )}
            </div>
        )
    }     
    
    else if (search){
        return (
            <p>Too many matches , specify anohter search</p>
        )
    }
}

export default Display