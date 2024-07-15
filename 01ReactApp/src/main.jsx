import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const MyApp = () =>{
  return (
    <div>
    <h1>HelloWorld</h1>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    MyApp()
)
