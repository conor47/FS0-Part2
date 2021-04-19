import React, { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import AddNew from './components/AddNew'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [searchName, setSearcName] = useState ('')

  const numbersToShow = searchName 
  ? persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))
  : persons

  const addName = event => {
    event.preventDefault()
    console.log("new person being added");
    let contains = false
    persons.forEach(person => {
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
      setPersons(persons.concat(nameObject))
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