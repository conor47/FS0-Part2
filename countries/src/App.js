import axios from 'axios'
import React, { useState, useEffect } from 'react'


function App() {

  const [countrySearch , setCountry] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      console.log('promise fulfilled')
      setCountries(response.data)
    })
  }, [])

  const countriesToshow = countrySearch
  ? countries.filter(country => country.name.toLowerCase().includes(countrySearch.toLowerCase()))
  : countries
  
  const handleSearch = (event) => {
    setCountry(event.target.value)
  }
  console.log(countriesToshow)
  
  return (
    <div className="App">
      find countries <input onChange={handleSearch}/>
    </div>
  );
}

export default App;
