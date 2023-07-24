import Form from "./Form"
import {useState} from "react"

export default function DisplayForm({addEmployee}) {
    
    const [isShown, setIsShown] = useState(false)
    let buttonText = "Add Employee"
    let buttonText2 = "Hide the Form"

    function display() {
        setIsShown(current => !current)

    }
    
    return (
        <div className='btndiv'>
            <button className="btn" onClick={display}> {!isShown ? buttonText : buttonText2}</button>
            {isShown && <Form addEmployee={addEmployee} />}
        </div>

        
    )
    
}