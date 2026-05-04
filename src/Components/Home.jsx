import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom';
import Navbar from './NavBar';
import EventList from './EventList';

const Home = () => {
  return (
    <div>
   
    <div>
      
    <div className='hero' id='home'>
    

        <div className='hero-content'>

            <h1>Discover Nairobi's Best Events</h1>
            <p>Concerts,tech meetups,festivals,sports and unforgettable experiences.</p>
           
        </div>
        
        <div className='hero-buttons'>

        
           
            <Link to="/events" className="primary-btn">Explore </Link>
            <Link to="/categories" className="secondary-btn">Categories</Link>

        
        </div>

        <SearchBar/>
</div>

<EventList/>
</div>
    </div>
  )
}

export default Home