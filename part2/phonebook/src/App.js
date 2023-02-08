import { useState } from 'react'
import Filter from './Components/Filter'
import Numbers from './Components/Numbers'
import PersonForm from './Components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterString, setNewFilter] = useState('')

  const filter = (event) => {
    event.preventDefault()

    setNewFilter(event.target.value);
    // console.log(filterString);
  }

  const addPerson = (event) => {
    event.preventDefault()

    if(newName === "" || persons.find(person => person.name === newName)){
      setNewName('')
      setNewNumber('')
      alert(`${newName} is already added to phonebook`)

      return
    }

    const personObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    setPersons(persons.concat(personObj))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    event.preventDefault()
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter}/>

      <h2> add a new </h2>
      
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber}  handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
        <Numbers numbers={persons.filter(input => input.name.includes(filterString))}/>
    </div>
  )
}

export default App
