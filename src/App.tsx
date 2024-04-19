import {ChangeEvent, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


type Input = {
    name: string
}
function App() {


    const[formData, setFormdata] = useState<Input>({name: ""})

    function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value)
        setFormdata({name: event.target.value})
    }

    console.log(formData)

  return (
    <>
    <h1>Simple Form with Yup Validation</h1>
        <form>
            <label htmlFor={"name"}> Name</label>
            <input onChange={handleOnChange} type={"text"} id={"name"} name={"name"}/>
        </form>
    </>
  )
}

export default App
