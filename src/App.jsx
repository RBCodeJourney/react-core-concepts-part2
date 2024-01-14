
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {

  function handleClick() {
    alert('button clicked')
  }

  const handleClick2 = () => {
    alert('button 2 Clicked')
  }


  const addToFive = (num) => {
    alert(num + 5);
  }


  return (
    <>

      <h2>React Core Concepts 2</h2>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>

      <button onClick={() => { alert('third button clicked') }}>Third</button>

      <button onClick={() => addToFive(3)}>Four</button>

    </>
  )
}

export default App
