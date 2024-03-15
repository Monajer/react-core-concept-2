import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {

  function handleClick() {
    alert('button clicked')
  }

  const addToTree = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h2>React Core Concepts 2</h2>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => {alert('2nd clicked')}}>Click me2</button>
      <button onClick={() => addToTree(3)}>Click Three</button>
    </>
  )
}

export default App
