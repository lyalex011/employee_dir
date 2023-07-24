import { createSlice } from "@reduxjs/toolkit";
import { data } from "./data";


const initialState = {
    employees: storedData()
}

function storedData() {
    let storedData = localStorage.getItem('employeeList')
    if(!storedData || []){
        return data
    }
    else {return JSON.parse(storedData)}
}
    

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addEmployee: (state,action) => {
            console.log(state.employees)
            state.employees.push(action.payload)
        },
        removeEmployee: (state, action) => {
           let index = state.employees.findIndex((employee) => employee.id === action.payload)
           state.employees.splice(index, 1)   
        },
        searchEmployee: (state, action) => {
            console.log(action.payload)

            const filtered = state.employees.filter(employee =>
                employee.name.toLowerCase().includes(action.payload.toLowerCase())
              )
              let arr = filtered.map((item) => item.name)
              console.log(arr) 

        }


    }
})

export const {addEmployee, removeEmployee, searchEmployee} = listSlice.actions
export default listSlice.reducer