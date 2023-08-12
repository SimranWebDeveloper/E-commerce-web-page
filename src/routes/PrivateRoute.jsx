import React from 'react'
import { autUsers } from '../utils'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {


    if (autUsers())  return  <Outlet/>
    else return <Navigate to={'/login'}/>

}

export default PrivateRoute