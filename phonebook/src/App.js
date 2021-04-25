import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import AddNew from './components/AddNew'
import Notification from './components/Notification'
import axios from 'axios'
import contactservice from './services/contact'


const App = () => {
  const [contacts , setContacts] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [searchName, setSearcName] = useState ('')
  const [message, setMessage] = useState ('')

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
        contains = true 
      }
    })
    if (!contains){
      const nameObject = {
        name : newName,
        number : newNumber
      }

      contactservice
        .create(nameObject)
        .then(response => {
          setContacts(contacts.concat(response.data))
        setNewName('')
        setNewNumber('')
        setMessage(`${nameObject.name} was successfully added`)
        setTimeout(() => {
          setMessage('')
        }, 5000)
        })


      
    }
    if (contains){
      const currentContact = contacts.find(contact => contact.name === newName)
      console.log("current contact",currentContact);
      const nameObject = {
        ...currentContact,
        number: newNumber
      }

      console.log("new contact",nameObject);

      const result = window.confirm(`${nameObject.name} already exists, replace the old number with a new one ?`)

      if (result){
      contactservice
      .update(nameObject, nameObject.id)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })

      setMessage(`${nameObject.name} was successfully updated`)
        setTimeout(() => {
          setMessage('')
        }, 5000)

      setContacts(contacts.map(contact => contact.id !== nameObject.id ? contact : nameObject))
    }
  }
  }

  const deleteContact = id => {
    const contact1 = contacts.filter(contact => contact.id === id)
    const result = window.confirm(`Delete ${contact1[0].name} ?`)

    if (result){
    contactservice
      .deleteContact(id)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      })

      setContacts(contacts.filter(contact => contact.id !== id))
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
      <Notification message={message} />
      <Filter onChange={handleSearch} />
      <h2>Add a new</h2>
      <AddNew onSubmit={addName} newName={newName} handleName={handleName} newNumber={newNumber} handleNumber={handleNumber}/>
      <h2>Numbers</h2>
      <div>
        <Persons contacts={numbersToShow} handleClick={deleteContact}/>
      </div>
    </div>
  )
}

export default App