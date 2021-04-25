import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Display from './components/Display'

function App() {

  const [countrySearch , setCountry] = useState('')
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState(false)

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
    setSearch(true)
  }
   
  return (
    <div className="App">
      find countries <input value={countrySearch} onChange={handleSearch}/>
      <Display countriesToshow={countriesToshow} search={search}/>
    </div>
  );
}

export default App;
