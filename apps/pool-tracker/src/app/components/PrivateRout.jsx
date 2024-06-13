import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import User from './User'

 const PrivateRout = () => {
    let logedIn = true;
    if(logedIn)
    {
        return <Outlet/>
    }
    else{
        console.log("user is not loged in")
    }
    // const auth = localStorage.getItem('user');
    return(
        <div>PrivateRout</div>
    )
//   return auth? <Outlet/>:<Navigate to "/user" />
  
}
export default PrivateRout