import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let obj = {
    user: "Cyber Geek",
    age: "23"
  }
   const arr = [1,2,3]
  return (
    <>
      <h1 className="bg-green-400 font-bold text-red-500 p-4 rounded-md mb-4">Hello TailwindCSS</h1>
      <Card name = "Gaurav" someObj = {obj} arr = {arr} btn = "Click Me"/>
    </>
  )
}

export default App
