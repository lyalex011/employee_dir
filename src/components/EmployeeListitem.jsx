import { useState } from "react";
import { data } from "../data";
import "./list.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {removeEmployee} from '../employeeListSlice'




function EmployeeListItem(props) {


  const dispatch = useDispatch()

  console.log(data);

  let [state, setState] =useState()
  const navigate = useNavigate()

  
  
  function handleClick(id) {
    console.log(id)
    navigate(`/employee/${id}`)
  }

  function handleDelete(id) {
    dispatch(removeEmployee(id))
    
  }

  return (
    <div className='listdiv'>
    <div onClick={() => handleClick(props.person.id)} className="item" key={props.person.id}>
      <img src={props.person.headshot} alt="headshot" />
      <div>
        <h3>{props.person.name}</h3>
        <p> {props.person.title}</p>
      </div>
      
    </div>
    <button key={props.person.name + props.person.id} onClick={() => handleDelete(props.person.id)} className="rmvbtn">Remove</button>
    </div>

  );
}

export default EmployeeListItem;
