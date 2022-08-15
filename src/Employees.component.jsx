import { Component } from "react";
import Employee from "./Employee.component";
import Employeepic from "./Employee-pic";

class Employees extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div>
                {
                    myArray.map(emp=>{
                        <Employee firstname={emp.firstname} lastname={emp.lastname} date={emp.date} pic={<Employeepic/>} />
                    })
                }

            </div>
        )
    }
}
export const myArray=[
    {firstname:"sara", lastname:"lik", date:"8.1", },
    {firstname:"noy", lastname:"lik", date:"8.1"},
    {firstname:"tal", lastname:"lik", date:"8.1"},
    {firstname:"aliza", lastname:"lik", date:"8.1"}
]



export default Employees;