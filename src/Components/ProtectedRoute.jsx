import React from 'react'

const ProtectedRoute = ({children}) => {

const token=
localStorage.getItem("token");

const isAuthenticated=token ? true : false;
if (isAuthenticated){
    return children;
}

  return (
    <div className='blocked-container'>
        <div className='blocked-box'>

            <h1>Access Restricted</h1>
            <p>You must <strong>log in</strong> Eventhub homepage</p>
            <p>Please return to login screen</p>

        </div>

    </div>
  )
}

export default ProtectedRoute