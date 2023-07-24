import Search from "./Search";
import EmployeeList from "./EmployeeList";
import Header from "./Header";
import "./list.css";
import DisplayForm from "./DisplayForm";

function HomePage({ employees, addEmployee }) {
  return (
    <div className="home">
      <Header title="Employee Directory" />
      <Search />
      <EmployeeList />
      <DisplayForm addEmployee={addEmployee}/>
    </div>
  );
}

export default HomePage;
