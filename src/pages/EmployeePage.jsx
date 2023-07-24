import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {useEmployee} from "../context"
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { Link } from "react-router-dom";



function EmployeePage() {

    let {employees} = useSelector((state) => state.list)

    let [list, setList] = useState({})
    const params = useParams()

    useEffect( () => {
        console.log('hjg')
        let test = employees.filter((emp) => {
            
            if (emp.id == params.id) {
                return true
            } 
            return false
        })
        setList(test[0])     
    }, [])

    console.log( "this is list[0]")



    return (
        <div className="home"> 
            <Link className="headerlink" to="/"><Header title="Click to go backgi Directory" /></Link>
            <div>
              {list.name && (
                <div>
                    <div  className="item">
                        <img src={list.headshot} alt="headshot" />
                        <div>
                            <h3>{list.name}</h3>
                            <p> {list.title}</p>
                        </div>
                    </div>
                </div>)}
            </div>
            <div>
                {list.name && (
                    <div>
                        <div  className="item">
                            
                        <div className="item2">
                            <h3>Call office</h3>
                            <p> {list.phone}</p>
                        </div>
                    </div>
                </div>)}
            </div>
            <div>
                {list.name && (
                    <div>
                        <div  className="item">
                            
                        <div className="item2">
                            <h3>Call mobile</h3>
                            <p> {list.phone}</p>
                        </div>
                    </div>
                </div>)}
            </div>
            <div>
                {list.name && (
                    <div>
                        <div  className="item">
                            
                        <div className="item2">
                            <h3>SMS</h3>
                            <p> {list.phone}</p>
                        </div>
                    </div>
                </div>)}
            </div>
            <div>
                {list.name && (
                    <div>
                        <div  className="item">
                            
                        <div className="item2">
                            <h3>EMAIL</h3>
                            <p> {list.email}</p>
                        </div>
                    </div>
                </div>)}
            </div>
            
        </div>
     );
}

export default EmployeePage;