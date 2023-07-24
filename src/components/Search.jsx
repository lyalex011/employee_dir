import { useState } from "react";
import "./list.css";
import {searchEmployee} from '../employeeListSlice'
import { useDispatch } from "react-redux";

function Search() {
  const dispatch = useDispatch()
let [input, setInput] = useState('')

function handleChange(event) {
  setInput(event.target.value)
  
  return dispatch(searchEmployee(event.target.value))
}


  return <input className="searchbox" placeholder="Enter text to search" value={input} onChange={handleChange}/>
  
}

export default Search;
