
const course = {
  id: 1,
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      id: 2
    },
    {
      name: 'State of a component',
      exercises: 14,
      id: 3
    },
    {
      name: 'Something different and extra for testing',
      exercises: 24,
      id: 4
    }
  ]
}

const Header = ({title}) => {return (<h1>{title}</h1>)}

const Course = ({course}) => {
  return (
    <section>
      <Header title={course.name} />
      <Content parts={course.parts} />
    </section>
  )
}

//Using MAP to map the Course.Parts array
const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part => (<Part key={part.id} part={part} />) )}
      <Total parts={parts} />
    </>
  )
}

const Part = ({part}) => {
  return (
    <p> {part.name} {part.exercises} </p>
  )
}

//Using REDUCE to calculate the sum of the exercises
const Total = ({parts}) => {
  const total = parts.reduce( (sum, parts) => sum + parts.exercises, 0 )
  return (
    <p><b>total of {total} exercises</b></p>
  )
}

const App = ( ) => {
  return (
    <div>
      <Course course={course} />
    </div>
  )
}
export default App