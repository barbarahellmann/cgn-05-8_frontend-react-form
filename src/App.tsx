import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <h1>Simple Form with Yup Validation</h1>
        <form>
            <label>Name</label>
            <input type={"text"} id={"name"} name={"name"}/>
        </form>
    </>
  )
}

export default App
