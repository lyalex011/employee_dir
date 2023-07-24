import { useState } from "react";
import { useDispatch } from "react-redux";
import {addEmployee} from "../employeeListSlice"


export default function Form() {

  
const dispatch = useDispatch()


  let [form, setForm] = useState({
    name: "",
    title: "",
    phone: "",
    email: "",    
  });
  
  let [error, setError] = useState({
    nameError: false,
    nameMessage:'name must be between 3 and 8 letters',
    titleError: false,
    phoneError: false,
    emailError: false,
  });

  let errors = {
    name: 'name must be between 3 and 8 letters',
    title: 'title must be between 3 and 16 letters',
    phone: 'must be only numbers',
    email: 'must be a valid email containing @ and .'
  }
  

  function handleSubmit(event) {
    // prevent the page from reloading because its an on submit
    event.preventDefault();
    // alert(form);
    // let rngHeadshot = `../images/headshot${randomNumber(12)}.jpeg`;
    let employee = {
      ...form,
      headshot: '../images/headshot9.jpeg',
      borderColor: "blue",
      id: crypto.randomUUID()
    };
    // if name.length < 3 || name.length >8 { set vale = " NAME TOO LONG OR SHORT" style ={border:red}}
    console.log(employee.name)
    if(employee.name.length < 3 || employee.name.length > 8){
      let newError = {...error, nameError: true}      
      setError(newError)
      return;      
    }
   
    setForm({
      name: "",
      title: "",
      phone: "",
      email: ""
    });

    dispatch(addEmployee(employee));   
    
    
    // else if (employee.name.length < 3 || employee.name.length > 8){
    //   setForm({
    //     name: errors.name,
    //     title: "",
    //     phone: "",
    //     email: ""
    //   })
      
    // }
    
    
  }

  //form.name <-- dot notation to get the value of form.name

  //let prop = 'name'

  //form[prop]  <-- bracket notation

  function handleChange(event) {
    // setInput(event.target.value);
    // called computer property name
    let key = event.target.id;
    setForm({ ...form, [key]: event.target.value });
  }
 //{contitional rendering a <p className="error"> with error message </p>}
  return (
    <form onSubmit={handleSubmit}>
      {/* <label htmlFor="name">Name:</label> */}
      <input className="form__input" id="name" placeholder="Name" style={{borderColor:error.nameError ? 'red' : 'black' }} value={form.name} onChange={handleChange} />
      {error.nameError && (<p className="error-message">{error.nameMessage}</p>)}     
      <br />
      {/* <label htmlFor="title">Title</label> */}
      <input className="form__input" id="title" placeholder="Title" value={form.title} onChange={handleChange}></input>
      <br />
      {/* <label htmlFor="phone">Phone #</label> */}
      <input className="form__input" id="phone" placeholder="Phone" value={form.phone} onChange={handleChange}></input>
      <br />
      {/* <label htmlFor="email">Email</label> */}
      <input className="form__input" id="email" placeholder="Email" value={form.email} onChange={handleChange}></input>
      <br />
      <button className="btn">Submit</button>
    </form>
  );
}