import React from 'react'
import { useState } from 'react'

const SearchBar = () => {

    const [searchText,setSearchText]=useState("");


    const handleSearch=(e)=>{
        e.preventDefault();
        console.log("Searching for:",searchText);
    };




  return (
    <form className='search-bar' onSubmit={handleSearch}>
        <input typee="text" placeholder='Search for Events...' value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>

        <button type="submit">Search</button>

        </form>
        
    
  )
}

export default SearchBar