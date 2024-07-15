import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(1)

  const addValue = () => {
    if(count >=20){
      alert("Cannot Exceed 20")
    }
    else {
    setCount(count+1)
    }
  }

  const removeValue = () => {
    if(count <= 0) {
      alert("Cannot be Negative")
    }
    else {
    setCount(count-1)
    }
  }
  return (
    <>
    <h2>Counter Project</h2>
    <h3>Counter Value: {count}</h3>

    <button onClick = {addValue}>Add Value</button><br/><br/>
    <button onClick = {removeValue}>Remove Value</button>
    </>
  )
}

export default App
