import { useState } from 'react'

const Header = ({heading}) => {
  return (
  <h1>
    {heading}
  </h1>
  )
}

const StatisticsLine = ({name, votes}) => {
  return (
    <tr>
        <td> {name} </td> 
        <td> {votes} </td>
    </tr>
  )
}

const Statistics = ({good, bad, neutral}) => {

  if (good === 0 && bad === 0 && neutral === 0) 
    return (
      <p>
        No feedback given
      </p>
    )

  const all = neutral + good + bad

  return (
    <table>
      <StatisticsLine name = "good" votes = {good}/>
      <StatisticsLine name = "neutral" votes = {neutral}/> 
      <StatisticsLine name = "bad" votes = {bad}/>

      <StatisticsLine name = "all" votes = {all}/>
      <StatisticsLine name = "average " votes = {(good - bad) / all}/>
      <StatisticsLine name = "positive " votes = {good * 100 / all + " %"}/>
    </table>
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
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header heading="give feedback" />
      <Button onclick={() => setGood(good + 1)} text = "good"/>
      <Button onclick={() => setNeutral(neutral + 1)} text = "neutral"/>
      <Button onclick={() => setBad(bad + 1)} text = "bad"/>
    
      <Header heading="statistics" />

      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App