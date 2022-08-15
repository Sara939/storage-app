import { Component } from "react";
import Employeepic from "./Employee-pic";

class Employee extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div>
                {this.props.firstname}
                {this.props.lastname}
                {this.props.date}
                <Employeepic/>
            </div>
        )
    }

}
export default Employee;
