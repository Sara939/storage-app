import Employees from "./Employees.component";
import {myArray} from "./Employees.component";

function Employeeslist(){
    return(
        <ol>
            {myArray.map((employeeItem) => (
            <li>
              {employeeItem.firstname}
              {employeeItem.lastname}
              {employeeItem.date}
            </li>
          ))}

        </ol>
    )


}

export default Employeeslist;

