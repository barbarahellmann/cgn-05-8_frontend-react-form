import {ChangeEvent, FormEvent, useState} from 'react'
import './App.css'


type Input = {
    name: string,
    age: string
    email: string
}
function App() {


    const [formData, setFormData] = useState<Input>({name: "", age: "", email: ""})
    const [submittedInputs, setSubmittedInputs] = useState<Input[]>([])

    function handleOnChangeName(event: ChangeEvent<HTMLInputElement>) {
        setFormData({...formData, name: event.target.value})
    }

    function handleOnChangeAge(event: ChangeEvent<HTMLInputElement>) {
        setFormData({...formData, age: event.target.value})
    }

    function handleOnChangeEmail(event: ChangeEvent<HTMLInputElement>) {
        setFormData({...formData, email: event.target.value})
    }

    function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setSubmittedInputs([...submittedInputs, formData])
        setFormData({name: "", age: "", email: ""})
    }

    function customInputValues(){
    setFormData({name: "Currywurst", age: "2", email: "currywurst@currywurst.de"})
}



  return (
    <>
    <h1>Simple Form with Yup Validation</h1>
        <form onSubmit={handleOnSubmit}>
            <div>
                <label htmlFor={"name"}> Name</label>
                <input onChange={handleOnChangeName} type={"text"} id={"name"} name={"name"} value={formData.name}/>
            </div>
            <div>
                <label htmlFor={"age"}> Alter</label>
                <input onChange={handleOnChangeAge} type={"text"} id={"age"} name={"age"} value={formData.age}/>
            </div>
            <div>
                <label htmlFor={"email"}> Email</label>
                <input onChange={handleOnChangeEmail} type={"text"} id={"age"} name={"age"} value={formData.email}/>
            </div>
            <button>Submit</button>
        </form>
        <button onClick={customInputValues}>Set hardcoded custom inputs</button>
        <ul>{submittedInputs.map((input: Input) => <li key={input.email}>
            <h2>Name: {input.name}</h2>
            <h3>Age: {input.age}</h3>
            <h4>Email: {input.email}</h4>
        </li>)}</ul>
    </>
  )
}

export default App
