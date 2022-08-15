import Header from "./Heder";
import Footer from "./Footer";
import Employees from "./Employees.component";
import Employeeslist from "./Employees-list";
function Home(){
    return(
        <div>
            welcom 
            <Header/>
            <Employees/>
            <Footer/>
            <Employeeslist/>

        </div>
    )
}
export default Home;
