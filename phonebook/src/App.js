import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import AddNew from './components/AddNew'
import axios from 'axios'

const App = () => {
  const [contacts , setContacts] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [searchName, setSearcName] = useState ('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setContacts(response.data)
      })
  }, [])

  const numbersToShow = searchName 
  ? contacts.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))
  : contacts

  const addName = event => {
    event.preventDefault()
    console.log("new person being added");
    let contains = false
    contacts.forEach(person => {
      if (newName === person.name){
        window.alert(`${newName} is already added to the phonebook`)
       contains = true 
       return
      }
    })
    if (!contains){
      const nameObject = {
        name : newName,
        number : newNumber
      }
      setContacts(contacts.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleName= event => {
    setNewName(event.target.value)
  }

  const handleNumber = event => {
    setNewNumber(event.target.value)
  }

  const handleSearch = event => {
    setSearcName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleSearch} />
      <h2>Add a new</h2>
      <AddNew onSubmit={addName} newName={newName} handleName={handleName} newNumber={newNumber} handleNumber={handleNumber}/>
      <h2>Numbers</h2>
      <div>
        <Persons contacts={numbersToShow} />
      </div>
    </div>
  )
}

export default App