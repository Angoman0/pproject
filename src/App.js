
import './App.css';
import { useState } from 'react';

import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import Footer from './Components/Footer';

import SignIn from './Components/SignIn';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import ProtectedRoute from './Components/ProtectedRoute';
import NavBar from './Components/NavBar';
import Home from './Components/Home';

import SignUp from './Components/SignUp';
import EventList from './Components/EventList';










function App() {

    const [isLoggedIn,setIsLoggedIn]=useState(false);

  
  return (
    <Router>
      
{/*  
       {isLoggedIn ? (
      
    <ProtectedRoute> */}
       <NavBar />
       

       <div className='main-content'>
       

           
     <Routes>

    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/signin' element={<SignIn/>}/>
   <Route path="/home" element={<Home/>}/>
   
    
    <Route path='/footer' element={<Footer/>}/>
    
   
    <Route path='/prot' element={<ProtectedRoute/>}/>
    
     

    </Routes>


       </div>
       {/* <Footer /> */}
       {/* <EventCard/> */}

      {/* </ProtectedRoute>
     ):( */}
       {/* <SignIn
         setIsLoggedIn={setIsLoggedIn} />
       */}
      
    {/* <Home/> */}
    </Router>
  );
}

export default App;