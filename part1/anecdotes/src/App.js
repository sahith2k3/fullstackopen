import { useState } from 'react'

const Heading = ({ text }) =>{
  return (
    <h1>
      {text}
    </h1>
  )
}


const Anec = ({text}) => {
  return (
    <p>
    {text}
    </p>
  )
}

const Button = ({onclick, text}) => {
  return (
    <button onClick={onclick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0, 0])

  const voteSelected = () => {
    const copy = [...points]
    copy[selected] += 1

    setPoints(copy)
  }

  return (
    <div>
      <Heading text = "Anecdote of the day" />
      <Anec text = {anecdotes[selected]} />
      <Anec text = {"has " + points[selected] + " votes"}/>
      <Button onclick = {voteSelected} text = "vote"/>
      <Button onclick={ () => setSelected(Math.floor(Math.random() * anecdotes.length)) } text = "next anecdote"/>


      <Heading text = "Anecdote with most votes" />
      <Anec text = {anecdotes[points.indexOf(Math.max(...points))]} />
      <Anec text = {"has " + Math.max(...points) + " votes"}/>
    </div>
  )
}

export default App