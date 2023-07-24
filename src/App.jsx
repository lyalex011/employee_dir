import "./index.css";
import HomePage from "./components/HomePage";
import { useState } from "react";
import { data } from "./data";
import { Route, Routes } from "react-router-dom";
import EmployeePage from "./pages/EmployeePage";


export default function App() {
  // let [employees, setEmployees] = useState(data);



  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/employee/:id" element={<EmployeePage />}/>
      </Routes>
      
    </div>
  );
}
