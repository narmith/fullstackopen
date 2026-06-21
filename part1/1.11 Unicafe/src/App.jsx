import { useState } from 'react'

const Header = ({title}) => {return (<h1>{title}</h1>)}
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const StatisticLine = ({text, value}) => {return (<tr><td>{text}</td><td>{value}</td></tr>)}
const Statistics = (props) => {
  const all=props.good + props.neutral + props.bad
  if (all === 0) {
    return (
        <p>No feedback given</p>
    )
  }
  return (
    <p>
      <table>
        <tbody>
            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={(props.good - props.bad) / all} />
            <StatisticLine text="positive" value={props.good / all * 100} />
        </tbody>
      </table>
    </p>
  )
}

const App = () => {
  const [good, setGood] = useState(1)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(-1)
  return (
    <div>
      <Header title='give feedback' />
      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad + 1)} text='bad' />
      <Header title='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
export default App
