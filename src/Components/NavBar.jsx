import { Route,Routes,Link } from "react-router-dom";




function Navbar(){

const handleLogout =()=> {

    localStorage.removeItem("token")

    window.location.reload();

};

return ( 
    <div>
    <nav className="navbar">

            <div className="nav-logo">
                <h1>Event<span className="text-danger">Hub</span></h1>

            </div>

            <div className="nav-links">

                <Link to="/signin" className=' bg-dark text-white m-3'> <button className="btn bg-dark text-white">Logins</button> </Link>
                 <Link to="/user" className="btn bg-dark text-white m-3"> User  </Link>
                    <Link to="/home" className="btn bg-dark text-white m-3">Home</Link>
                <button className="btn btn-danger " onClick={handleLogout}>Logout</button>
             

            </div>

            <div>


     
            </div>







    </nav>

    





        

</div>








)




}

export default Navbar