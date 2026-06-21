import { useState } from 'react'

const Header = ({title}) => {return (<h1>{title}</h1>)}
const Button = ({ onClick, text }) => {return (<span><button onClick={onClick}>{text}</button></span>)}

const App = () => {
  const [selected, setSelected] = useState(0)
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [votes, setVotes] = useState( Array(anecdotes.length).fill(0) )

  //rearranged the code from the original 1.13 step 2 exercise past here...
  //got 6 hours of "this is NOT working, why is this so difficult" experience D:

  const handleVotes = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const handleAnecdotes = () => {
    //if there is only one anecdote, set it to selected and be done
    if (anecdotes.length <= 1) {
      setSelected(0)
      return
    }
    //else keep generating a random index until it is different from the current one
    //this is meant to avoid showing the same anecdote when clicking the next button
    //got this logic due to an IA suggestion, which i find it cool
    let randomIndex
    do {
      randomIndex = Math.floor(Math.random() * anecdotes.length)
    } while (randomIndex === selected)
    setSelected(randomIndex)
  }

  const mostVotesIndex = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <Header title='Anecdote of the day' />
        {anecdotes[selected]}<br />
        has {votes[selected]} votes<br />
      <Button onClick={handleVotes} text='vote' />
      <Button onClick={handleAnecdotes} text='next anecdote' />
      <Header title='Anecdote with most votes' />
        {anecdotes[mostVotesIndex]}<br />
        has {votes[mostVotesIndex]} votes
    </div>
  )
}
export default App