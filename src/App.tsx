import {ChangeEvent, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


type Input = {
    name: string,
    age: string
    email: string
}
function App() {


    const[formData, setFormData] = useState<Input>({name: "", age: "", email: ""})
const{submittedInouts, setSubmittedInputs} = useState
    function handleOnChangeName(event: ChangeEvent<HTMLInputElement>) {
        setFormData({...formData, name: event.target.value})
    }

    function handleOnChangeAge(event: ChangeEvent<HTMLInputElement>) {
        setFormData({...formData, age: event.target.value})
    }

    function handleOnChangeEmail(event: ChangeEvent<HTMLInputElement>) {
        setFormData({...formData, email: event.target.value})
    }

    console.log(formData)

  return (
    <>
    <h1>Simple Form with Yup Validation</h1>
        <form>
            <div>
                <label htmlFor={"name"}> Name</label>
                <input onChange={handleOnChangeName} type={"text"} id={"name"} name={"name"}/>
            </div>
            <div>
                <label htmlFor={"age"}> Alter</label>
                <input onChange={handleOnChangeAge} type={"text"} id={"age"} name={"age"}/>
            </div>
            <div>
                <label htmlFor={"email"}> Email</label>
                <input onChange={handleOnChangeEmail} type={"text"} id={"age"} name={"age"}/>
            </div>
            <button>Submit</button>
        </form>
    </>
  )
}

export default App
