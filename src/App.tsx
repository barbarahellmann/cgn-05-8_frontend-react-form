import {ChangeEvent, FormEvent, useState} from 'react'
import './App.css'
import * as yup from "yup"

type Input = {
    name: string,
    age: string,
    email: string
}


const inputSchema = yup.object().shape({
    name: yup.string().required("Name is required").min(2, "Name needs to be at least 2 characters"),
    age: yup.number().required("Age is required").positive("Age must be a positive number").integer('Age must be an integer').min(18, "You need to be at least 18 years old"),
    email: yup.string().email('Invalid email').required("Email is required")
})

function App() {


    const [formData, setFormData] = useState<Input>({name: "", age: "", email: ""})
    const [submittedInputs, setSubmittedInputs] = useState<Input[]>([])
    const [errors, setErrors] = useState<{ [key: string]: string }>({})

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
        inputSchema.validate(formData, {abortEarly: false}).then(() => {
            setSubmittedInputs([...submittedInputs, formData])
            setFormData({name: "", age: "", email: ""})
            setErrors({})
        }).catch((validationError: yup.ValidationError) => {
            // Validation failed
            const errors = validationError.inner.reduce<{ [key: string]: string }>((acc, currentError) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                acc[currentError.path] = currentError.message;
                return acc
            }, {})
            setErrors(errors)
        })
    }

    function customInputValues(){
    setFormData({name: "Currywurst", age: "2", email: "currywurst@currywurst.de"})
}

    console.log(errors)

  return (
      <>
          <h1>Simple Form with Yup Validation</h1>
          <form onSubmit={handleOnSubmit}>
              <div>
                  <label htmlFor={"name"}>Name</label>
                  <input onChange={handleOnChangeName} type="text" id="name" name={"name"} value={formData.name}/>
                  {errors.name && <div style={{color: "red"}}>{errors.name}</div>}
              </div>
              <div>
                  <label htmlFor={"age"}>Alter</label>
                  <input onChange={handleOnChangeAge} type={"text"} id={"age"} name={"age"} value={formData.age}/>
                  {errors.age && <div style={{color: "red"}}>{errors.age}</div>}
              </div>
              <div>
                  <label htmlFor={"email"}>Email</label>
                  <input onChange={handleOnChangeEmail} type={"email"} id={"email"} name={"email"} value={formData.email}/>
                  {errors.email && <div style={{color: "red"}}>{errors.email}</div>}
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
