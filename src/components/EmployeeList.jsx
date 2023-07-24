import EmployeeListItem from "./EmployeeListitem";
import {useEmployee} from "../context"
import { useDispatch, useSelector } from "react-redux";
import {listSlice} from '../employeeListSlice'
import { useEffect } from "react";




function EmployeeList() {

  let {employees} = useSelector((state) => state.list)

  // let {employees} = useEmployee()


useEffect(()=>{
localStorage.setItem('employeeList', JSON.stringify(employees))
},[employees])

  return employees.map((employee, index) => {
    return <EmployeeListItem key={index} person={employee} />;
  });
}

export default EmployeeList;
